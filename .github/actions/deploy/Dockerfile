FROM ghcr.io/pmlogist/ansible:latest

WORKDIR /root

COPY entrypoint.sh .
COPY ansible /opt/ansible
RUN chmod +x entrypoint.sh

ENTRYPOINT ["/root/entrypoint.sh"]
