'use strict';

describe ('Feature test', function(){

  var jet;
  var heathrow;
  beforeEach(function(){
    heathrow = new Airport();
    jet = new Plane();
  });

  it('planes can be instructed to land at an airport', function (){
    jet.land(heathrow);
    expect(heathrow.viewHangar()).toContain(jet);
  });

  it('planes can be instructed to takeoff', function(){
    jet.land(heathrow);
    jet.takeoff();
    expect(heathrow.viewHangar).not.toContain(jet);
  });

  it('blocks takeoff when weather is stormy', function(){
    jet.land(heathrow)
    spyOn(heathrow, 'isStormy').and.returnValue(true);
    expect(function(){jet.takeoff();}).toThrowError('cannot takeoff during a storm');
    expect(heathrow.viewHangar()).toContain(jet);
  });

});