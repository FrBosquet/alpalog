"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pencil = exports.logger = void 0;
/**
 * Logger utility for different levels of logging.
 */
exports.logger = {
    /**
     * Logs a title message in underlined format.
     * @param {...unknown[]} message - The message(s) to log.
     */
    title: (...message) => {
        console.log(exports.pencil.bold('\n ➡️ ', ...message), '\n');
    },
    /**
     * Logs a subtitle message in italic and underlined format.
     * @param {...unknown[]} message - The message(s) to log.
     */
    subtitle: (...message) => {
        console.log(exports.pencil.italic(exports.pencil.underline('➡️ ', ...message)), '\n');
    },
    /**
     * Logs an error message in red color.
     * @param {...unknown[]} message - The message(s) to log.
     */
    error: (...message) => {
        console.error('\n‼️', exports.pencil.red(...message), '\n');
    },
    /**
     * Logs an informational message.
     * @param {...unknown[]} message - The message(s) to log.
     */
    info: (...message) => {
        console.log('ℹ️', ...message);
    },
    /**
     * Logs a warning message in yellow color.
     * @param {...unknown[]} message - The message
     */
    warn: (...message) => {
        console.warn('⚠️', exports.pencil.yellow(...message));
    },
    /**
     * Logs a whisper message in gray color.
     * @param {...unknown[]} message - The message(s) to log.
     */
    whisper: (...message) => {
        console.log('  ', exports.pencil.gray(...message));
    },
    /**
     * Logs a success message in green color.
     * @param {...unknown[]} message - The message(s) to log.
     */
    success: (...message) => {
        console.log('\n✅', exports.pencil.green(...message), '\n');
    },
    /**
     * Logs a a json object.
     * @param {...unknown[]} message - The message(s) to log.
     */
    json: (object) => {
        console.log(JSON.stringify(object, null, 2));
    }
};
exports.pencil = {
    red: (...message) => `\x1b[31m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    green: (...message) => `\x1b[32m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    yellow: (...message) => `\x1b[33m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    blue: (...message) => `\x1b[34m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    magenta: (...message) => `\x1b[35m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    cyan: (...message) => `\x1b[36m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    white: (...message) => `\x1b[37m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    gray: (...message) => `\x1b[90m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bgRed: (...message) => `\x1b[41m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bgGreen: (...message) => `\x1b[42m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bgYellow: (...message) => `\x1b[43m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bgBlue: (...message) => `\x1b[44m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bgMagenta: (...message) => `\x1b[45m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bgCyan: (...message) => `\x1b[46m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bgWhite: (...message) => `\x1b[47m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    bold: (...message) => `\x1b[1m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    underline: (...message) => `\x1b[4m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    italic: (...message) => `\x1b[3m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    strike: (...message) => `\x1b[9m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
    hidden: (...message) => `\x1b[8m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
};
