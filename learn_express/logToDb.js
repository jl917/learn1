const Transport = require('winston-transport');
const util = require('util');

//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
module.exports = class logToDb extends Transport {
  constructor(opts) {
    super(opts);
  }

  log(info, callback) {
    setImmediate(() => {
        console.log(info.meta.req.headers)
      //this.emit('logged', info);
    });

    // Perform the writing to the remote service
    callback();
  }
};