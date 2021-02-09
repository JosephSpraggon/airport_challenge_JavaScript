class Airport {

  constructor(){
    this.hangar = []
  }

  landPlane(plane){
    this.hangar.push(plane);
    return this.hangar;
  }

}