'use strict';

/**
 * vanliga-fragor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vanliga-fragor.vanliga-fragor');
