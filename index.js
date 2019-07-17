class Driver{
  constructor(name,startDate){
    this.name = name,
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    let yOfExperience = year - this.startDate.getFullYear(); 
    return yOfExperience;
  }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation,
    this.endingLocation = endingLocation
  }
  
}

