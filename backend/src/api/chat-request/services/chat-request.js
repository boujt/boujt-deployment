'use strict';

/**
 * chat-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chat-request.chat-request');
