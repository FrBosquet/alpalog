/**
 * Logger utility for different levels of logging.
 */
export declare const logger: {
    /**
     * Logs a title message in underlined format.
     * @param {...unknown[]} message - The message(s) to log.
     */
    title: (...message: unknown[]) => void;
    /**
     * Logs a subtitle message in italic and underlined format.
     * @param {...unknown[]} message - The message(s) to log.
     */
    subtitle: (...message: unknown[]) => void;
    /**
     * Logs an error message in red color.
     * @param {...unknown[]} message - The message(s) to log.
     */
    error: (...message: unknown[]) => void;
    /**
     * Logs an informational message.
     * @param {...unknown[]} message - The message(s) to log.
     */
    info: (...message: unknown[]) => void;
    /**
     * Logs a warning message in yellow color.
     * @param {...unknown[]} message - The message
     */
    warn: (...message: unknown[]) => void;
    /**
     * Logs a whisper message in gray color.
     * @param {...unknown[]} message - The message(s) to log.
     */
    whisper: (...message: unknown[]) => void;
    /**
     * Logs a success message in green color.
     * @param {...unknown[]} message - The message(s) to log.
     */
    success: (...message: unknown[]) => void;
    /**
     * Logs a a json object.
     * @param {...unknown[]} message - The message(s) to log.
     */
    json: (object: Record<string, unknown>) => void;
};
export declare const pencil: {
    red: (...message: any[]) => string;
    green: (...message: any[]) => string;
    yellow: (...message: any[]) => string;
    blue: (...message: any[]) => string;
    magenta: (...message: any[]) => string;
    cyan: (...message: any[]) => string;
    white: (...message: any[]) => string;
    gray: (...message: any[]) => string;
    bgRed: (...message: any[]) => string;
    bgGreen: (...message: any[]) => string;
    bgYellow: (...message: any[]) => string;
    bgBlue: (...message: any[]) => string;
    bgMagenta: (...message: any[]) => string;
    bgCyan: (...message: any[]) => string;
    bgWhite: (...message: any[]) => string;
    bold: (...message: any[]) => string;
    underline: (...message: any[]) => string;
    italic: (...message: any[]) => string;
    strike: (...message: any[]) => string;
    hidden: (...message: any[]) => string;
};
