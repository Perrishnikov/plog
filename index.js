'use strict';

module.exports = function plog(text) {
  var empty = 'Hello World';

  if (!text) {
    console.log(empty);
  } else {
    console.log(text);
  }
};
