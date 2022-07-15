// https://github.com/vinissimus/next-translate/issues/851
const workaround = require("next-translate/lib/cjs/plugin/utils.js");
workaround.defaultLoader =
  "(l, n) => import(`src/locales/${n}_${l}.json`).then(m => m.default)";

module.exports = {
  locales: ["en", "fr", "ru"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/sign-in": ["auth"],
    "/sign-up": ["auth"],
    "/app/quiz": ["game"],
    "/app/settings": ["game"],
    "/app/quiz/[gameId]": ["game"],
  },
  // loadLocaleFrom: (locale, namespace) =>
  // require(`@/locales/${namespace}_${locale}`),
};
