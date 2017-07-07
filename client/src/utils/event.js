/**
 * Return wheel delta： 1 --- UP, -1 --- DOWN
 * @param event
 */
let getWheelDelta = function(event) {
  let value = event.wheelDelta || -event.deltaY || -event.detail;
  let delta = Math.max(-1, Math.min(1, value));
  return delta;
};

module.exports = {
  getWheelDelta: getWheelDelta
};