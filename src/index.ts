/**
 * Logger utility for different levels of logging.
 */
export const logger = {
  /**
   * Logs a title message in underlined format.
   * @param {...unknown[]} message - The message(s) to log.
   */
  title: (...message: unknown[]) => {
    console.log('\n➡️', pencil.bold(...message), '\n')
  },

  /**
   * Logs a subtitle message in italic and underlined format.
   * @param {...unknown[]} message - The message(s) to log.
   */
  subtitle: (...message: unknown[]) => {
    console.log('  ➡️', pencil.italic(pencil.underline(...message)))
  },

  /**
   * Logs an error message in red color.
   * @param {...unknown[]} message - The message(s) to log.
   */
  error: (...message: unknown[]) => {
    console.error('\n‼️', pencil.red(...message), '\n')
  },

  /**
   * Logs an informational message.
   * @param {...unknown[]} message - The message(s) to log.
   */
  info: (...message: unknown[]) => {
    console.log('ℹ️', ...message)
  },

  /**
   * Logs a warning message in yellow color.
   * @param {...unknown[]} message - The message
   */
  warn: (...message: unknown[]) => {
    console.warn('⚠️', pencil.yellow(...message))
  },

  /**
   * Logs a whisper message in gray color.
   * @param {...unknown[]} message - The message(s) to log.
   */
  whisper: (...message: unknown[]) => {
    console.log(pencil.gray(...message))
  },

  /**
   * Logs a success message in green color.
   * @param {...unknown[]} message - The message(s) to log.
   */
  success: (...message: unknown[]) => {
    console.log('\n✅', pencil.green(...message), '\n')
  },

  /**
   * Logs a a json object.
   * @param {...unknown[]} message - The message(s) to log.
   */
  json: (object: Record<string, unknown>) => {
    console.log(JSON.stringify(object, null, 2))
  }
}

export const pencil = {
  red: (...message: any[]) => `\x1b[31m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  green: (...message: any[]) => `\x1b[32m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  yellow: (...message: any[]) => `\x1b[33m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  blue: (...message: any[]) => `\x1b[34m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  magenta: (...message: any[]) => `\x1b[35m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  cyan: (...message: any[]) => `\x1b[36m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  white: (...message: any[]) => `\x1b[37m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  gray: (...message: any[]) => `\x1b[90m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bgRed: (...message: any[]) => `\x1b[41m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bgGreen: (...message: any[]) => `\x1b[42m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bgYellow: (...message: any[]) => `\x1b[43m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bgBlue: (...message: any[]) => `\x1b[44m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bgMagenta: (...message: any[]) => `\x1b[45m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bgCyan: (...message: any[]) => `\x1b[46m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bgWhite: (...message: any[]) => `\x1b[47m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  bold: (...message: any[]) => `\x1b[1m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  underline: (...message: any[]) => `\x1b[4m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  italic: (...message: any[]) => `\x1b[3m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  strike: (...message: any[]) => `\x1b[9m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
  hidden: (...message: any[]) => `\x1b[8m${message.map(i => i.toString()).join(' ')}\x1b[0m`,
}