const EventEmitter = require('events')

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} in ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log('data: ', data);
})

logger.log('test 1')
logger.log('test 2')
logger.log('test 3')