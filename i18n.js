module.exports = {
  locales: ["en", "fr", "ru"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["home"],
  },
  loadLocaleFrom: (locale, namespace) =>
    require(`src/locales/${namespace}_${locale}`),
};
