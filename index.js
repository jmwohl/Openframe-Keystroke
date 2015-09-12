try {
    var gpio = require('pi-gpio');
} catch(e) {
    console.error(e);
}
/**
 * Example plugin which reads keystrokes from standard in.
 */

module.exports = function(socket, pubsub) {
    'use strict';
    if (!gpio) {
        console.error('\n!!!\nGPIO Not available... is this an RPi?\n!!!\n');
        return;
    }
    console.log('loading gpio plugin');

};
