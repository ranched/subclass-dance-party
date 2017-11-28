var BlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkydancer');
  this.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // Object.getPrototypeOf(BlinkeyDancer.prototype).step(this);
  
  
  this.$node.toggle();
};
