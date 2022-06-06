'use strict';

/**
 * blogg service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blogg.blogg');
