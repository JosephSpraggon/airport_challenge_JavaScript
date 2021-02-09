describe ('Airport', function() {

  var jet;
  var heathrow;
  beforeEach(function() {
    heathrow = new Airport();
    jet = new Plane();
  });

  describe('Airport', function() {

    describe('heathrow', function(){

      it('heathrow is an instance of the Airport class', function() {
        expect(heathrow).toBeInstanceOf(Airport);
      });

      it('heathrow initializes with an empty hangar is as an array', function(){
        expect(heathrow.hangar).toEqual([]);
      });

      it('can store planes in the hangar', function(){
        expect(heathrow.landPlane(jet)).toContain(jet);
      });

    });

  });

  describe('Plane', function() {

    it('jet is an instance of the Plane class', function(){
      expect(jet).toBeInstanceOf(Plane);
    });

  });

});