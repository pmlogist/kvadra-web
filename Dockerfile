# Dependencies
FROM node:18.2.0-alpine3.15 as deps
LABEL builder=true
RUN mkdir /opt/deps && chown node:node /opt/deps
RUN mkdir /opt/app && chown node:node /opt/app
WORKDIR /opt/deps
COPY --chown=node:node package.json package-lock.json* ./
RUN npm set progress=false && npm config set depth 0
RUN npm install --omit=optional --omit=dev --no-update-notifier
RUN cp -r node_modules prod 
RUN npm install --no-update-notifier && npm cache clean --force
RUN cp -r node_modules dev && rm -rf node_modules

# Build
FROM deps as build
LABEL builder=true
WORKDIR /opt/app
COPY --from=deps /opt/deps/dev  ./node_modules
COPY . .
RUN npm run build 

# Release 
FROM node:18.2.0-alpine3.15 as release
RUN mkdir /opt/app && chown node:node /opt/app
WORKDIR /opt/app
COPY --from=deps /opt/deps/prod /opt/app/node_modules
COPY --from=build /opt/app /opt/app
EXPOSE 3000
CMD npm run start
HEALTHCHECK --interval=30s CMD curl --fail http://localhost:3000
