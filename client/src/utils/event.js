/**
 * Return delta： positive means wheel up, negative means wheel down
 * @param event
 */
let getWheelDelta = function(event) {
  let delta = event.wheelDelta || -event.deltaY || -event.detail;
  return delta;
};

module.exports = {
  getWheelDelta: getWheelDelta
};