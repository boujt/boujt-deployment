'use strict';

/**
 * video-chat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::video-chat.video-chat');
