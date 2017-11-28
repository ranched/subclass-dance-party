var Square = function(top, left, timeBetweenSteps) {
  //var Square = new makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node.removeClass('dancer');
  this.$node.addClass('square');
};

Square.prototype = Object.create(Dancer.prototype);
Square.prototype.constructor = Square;

Square.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();


};
