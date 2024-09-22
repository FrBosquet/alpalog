import { logger } from ".";

logger.title('Hello, World!')
logger.subtitle('This is a subtitle.')

logger.info('This is an informational message.')
logger.warn('This is a warning message.')

logger.error('This is an error message.')

logger.whisper('This is a whisper message.')

logger.success('This is a success message.')

logger.json({
  name: 'John Doe',
  age: 30,
  email: 'jdoe@doecorp.com'
})

