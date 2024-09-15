/**
 * Logger utility for different levels of logging.
 */
export declare const logger: {
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
