let isCuteMixin = function (obj) {
  obj.isCute = function () {
    return true;
  };
};
let singMixin = function (obj) {
  obj.sing = function () {
    console.log("Singing to an awesome tune");
  };
};

const funModule = (function () {
  return {
    isCuteMixin,
    singMixin,
  };
})();

