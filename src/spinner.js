var Spinner = function(top, left, spinTime) {
  Dancer.call(this, top, left, spinTime);
  this.$node.addClass('spinner');
  this.step();
};

Spinner.prototype = Object.create(Dancer.prototype);