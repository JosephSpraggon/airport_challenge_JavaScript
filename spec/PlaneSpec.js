'use strict';

describe('Plane', function(){

  var jet;
  var heathrow;
  beforeEach(function(){
    heathrow = jasmine.createSpyObj('heathrow', ['clearForLanding', 'clearForTakeoff']);
    jet = new Plane();
  });
  
  describe('Jet', function(){

    it('jet is an instance of the Plane class', function(){
      expect(jet).toBeInstanceOf(Plane);
    });

    it('can land at an airport', function(){
      jet.land(heathrow);
      expect(heathrow.clearForLanding).toHaveBeenCalledWith(jet);
    });

    it('can takeoff from an airport', function(){
      jet.land(heathrow);
      jet.takeoff();
      expect(heathrow.clearForTakeoff).toHaveBeenCalled();
    });
    
  });

});
