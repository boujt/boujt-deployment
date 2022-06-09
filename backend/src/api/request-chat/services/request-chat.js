'use strict';

/**
 * request-chat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-chat.request-chat');
