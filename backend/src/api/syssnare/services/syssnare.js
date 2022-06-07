'use strict';

/**
 * syssnare service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::syssnare.syssnare');
