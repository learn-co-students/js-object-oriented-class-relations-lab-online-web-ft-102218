let driverId = 0;
let passengerId = 0;
let trip_id = 0;
let store = { drivers: [], passengers: [], trips: [] };

class Driver {
  // A driver has many trips, and has many passengers through trips.
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  
  trips() {
    // return all of the trips that a driver has taken
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  } 
  
  passengers() {
    // return all of the passengers that a driver has taken on a trip
    return this.trips().map(trip => {
      return trip.passenger();
    });
  } 
}

class Passenger {
  // A passenger has many trips, and has many drivers through trips.
  constructor(name) {
    this.name = name;
    this.id = ++passengerId
    store.passengers.push(this);
  }
  
  trips() {
    // return all of the trips that a passenger has taken
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  } 
  
  drivers() {
    // return all of the drivers that has taken a passenger on a trip
    return this.trips().map(trip => {
      return trip.driver();
    });
  } 
}

class Trip {
  // A trip belongs to a driver and belongs to a passenger.
  constructor(driver, passenger)  {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++trip_id;
    store.trips.push(this);

  }
  
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  } 
  
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;  
    });
  } 
}
