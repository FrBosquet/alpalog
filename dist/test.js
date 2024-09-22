"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
_1.logger.title('Hello, World!');
_1.logger.subtitle('This is a subtitle.');
_1.logger.info('This is an informational message.');
_1.logger.warn('This is a warning message.');
_1.logger.error('This is an error message.');
_1.logger.whisper('This is a whisper message.');
_1.logger.success('This is a success message.');
_1.logger.json({
    name: 'John Doe',
    age: 30,
    email: 'jdoe@doecorp.com'
});
