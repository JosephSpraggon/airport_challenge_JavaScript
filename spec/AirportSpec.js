describe ('Airport', function(){

  var jet;
  var heathrow;
  beforeEach(function(){
    heathrow = new Airport();
    jet = jasmine.createSpy('jet', ['land']);
  });


  describe('heathrow', function(){

    it('is an instance of the Airport class', function(){
      expect(heathrow).toBeInstanceOf(Airport);
    });

    it('initializes with an empty hangar is as an array', function(){
      expect(heathrow._hangar).toEqual([]);
    });

    it('can store planes in the hangar', function(){
      heathrow.clearForLanding(jet);
      expect(heathrow.viewHangar()).toContain(jet);
    });

    it('can clear planes for takeoff', function(){
      heathrow.clearForLanding(jet);
      heathrow.clearForTakeoff(jet);
      expect(heathrow.viewHangar()).toEqual([]);
    });

    it('can check for stormy conditions', function(){
      expect(heathrow.isStormy()).toBeFalsy();
    });

  });

  describe('under stormy conditions', function(){

    it('does not clear planes for takeoff',function(){
      spyOn(heathrow, 'isStormy').and.returnValue(true);
      expect(function(){heathrow.clearForTakeoff(jet);}).toThrowError('cannot takeoff during a storm');
    });

  });


});