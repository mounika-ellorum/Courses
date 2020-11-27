/**
 * challenge
 * insert new prototype "vehicle.prototype" to existing proto type
 * 
 * CURRENT CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * >Object.prototype
 * 
 * UPDATED CHAIN
 * CivilPlane.prototye > Airplane.prototype
 * Vehicle.prototype > Object.prototype
 * 
 * Vehicle.prototype shold have 2 additional props
 
 */

 const propsOfSmallPlane = {
     numOfSeats: 4,
     wingSpan: 20,
     maxRangeOfFlight: 1000,
     maxSpeed: 800,
     weight: 15
 };
 
 const propsOfLargePlane = {
    numOfSeats: 250,
    wingSpan: 60,
    maxRangeOfFlight: 3500,
    maxSpeed: 900,
    weight: 40
};
  
function Vehicle(props) {
    this.maxSpeed = props.maxSpeed;
    this.weight = props.weight;
}
Vehicle.prototype.vehicleInfo = function() {
    console.log(`Max speed is ${this.maxSpeed} and max weight is 
    ${this.weight}`);
}

function Airplane(props) {
    Vehicle.call(this,props);
    this.wingSpan = props.wingSpan;
    this.maxRangeOfFlight = props.maxRangeOfFlight;
}

Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.constructor = Airplane;

Airplane.prototype.airplaneInfo = function() {
    console.log(`wngspan ${this.wingSpan} and max range ${this.maxRangeOfFlight}`)
};


const largePlane = new CivilPlane(propsOfLargePlane);

///verification
smallPlane.vehicleInfo();

largePlane.vehicleInfo();

