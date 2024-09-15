/**
 * Logger utility for different levels of logging.
 */
export const logger = {

  /**
   * Logs an error message in red color.
   * @param {...unknown[]} message - The message(s) to log.
   */
  error: (...message: unknown[]) => {
    console.error('\x1b[31m', ...message, '\x1b[0m')
  },

  /**
   * Logs an informational message.
   * @param {...unknown[]} message - The message(s) to log.
   */
  info: (...message: unknown[]) => {
    console.log(...message)
  },

  /**
   * Logs a warning message in yellow color.
   * @param {...unknown[]} message - The message
   */
  warn: (...message: unknown[]) => {
    console.warn('\x1b[33m', ...message, '\x1b[0m')
  },

  /**
   * Logs a whisper message in gray color.
   * @param {...unknown[]} message - The message(s) to log.
   */
  whisper: (...message: unknown[]) => {
    console.log('\x1b[90m', ...message, '\x1b[0m')
  },

  /**
   * Logs a success message in green color.
   * @param {...unknown[]} message - The message(s) to log.
   */
  success: (...message: unknown[]) => {
    console.log('\x1b[32m', ...message, '\x1b[0m')
  },

  /**
   * Logs a a json object.
   * @param {...unknown[]} message - The message(s) to log.
   */
  json: (object: Record<string, unknown>) => {
    console.log(JSON.stringify(object, null, 2))
  }
}