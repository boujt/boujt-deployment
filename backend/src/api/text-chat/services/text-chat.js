'use strict';

/**
 * text-chat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::text-chat.text-chat');
