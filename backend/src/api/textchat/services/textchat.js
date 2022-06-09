'use strict';

/**
 * textchat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::textchat.textchat');
