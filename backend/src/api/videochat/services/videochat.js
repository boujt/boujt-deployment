'use strict';

/**
 * videochat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::videochat.videochat');
