module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            // `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
            `${process.env.DO_SPACE_BUCKET}.${process.env.DO_SPACE_ENDPOINT}`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            // `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
            `${process.env.DO_SPACE_BUCKET}.${process.env.DO_SPACE_ENDPOINT}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
