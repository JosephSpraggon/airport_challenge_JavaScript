'use strict';

class Airport {

  constructor(){
    this._hangar = []
  }

  viewHangar(){
    return this._hangar
  }

  clearForLanding(plane){
    this._hangar.push(plane);
  }

  clearForTakeoff(plane){
    if(this.isStormy()) {
      throw new Error('cannot takeoff during a storm');
    }
    this._hangar = [];
  }

  isStormy(){
    return false;
  }
  

}