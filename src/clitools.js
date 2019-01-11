const { stdin, stdout } = require('process');
const { EOL } = require('os');

/**
 *  write question to console and read answer
 *
 *  @param {string} question - question
 *  @param {function} callback - callback that returns answer
 */

function ask(question, callback) {
  stdin.setEncoding('utf-8');
  this.say(question);

  stdin.on('readable', () => {
    const answer = stdin.read();
    callback(answer);
  });
}

/**
 *  write to the terminal
 *
 *  @param {string} val - value to be writtern
 *  @param {function} [callback = function(){}] - callback function
 */
function say(val, callback = () => {}) {
  stdout.write(val);
  callback();
}

/**
 *  write new line to the terminal
 *
 *  @param {string} val - value to be writtern
 *  @param {function} [callback = function(){}] - callback function
 */
function sayLine(val, callback = () => {}) {
  stdout.write(EOL + val);
  callback();
}

module.exports = { ask, say, sayLine };
