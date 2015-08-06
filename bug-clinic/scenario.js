module.exports = scenario;

function scenario(log, cb) {
  function start() {
    process.nextTick(thing);
  }

  var value = 97;
  log.log(value)
  
  function foo() {
    value *= 13;
    log.log(value)
    cb(value);
  }

  start();

  function racer() {
    value &= 255;
    log.log(value)
    setTimeout(foo, 0);
  }

  value = 213;
  log.log(value)

  function thing() {
    value += 131;
    log.log(value)
    process.nextTick(racer);
  }
}