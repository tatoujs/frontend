const utils = {};

utils.isNumber = num => !isNaN(num);

utils.objectValueByIndex = (object, index) => object[Object.keys(object)[index]];

utils.arraysEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; ++i) {
    if (a[i] instanceof Array && b[i] instanceof Array && !this.arraysEqual(a[i], b[i])) {
      return false;
    } else if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

export default utils;
