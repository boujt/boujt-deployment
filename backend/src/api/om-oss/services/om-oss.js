'use strict';

/**
 * om-oss service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::om-oss.om-oss');
