class Door {
  constructor(door_name, location) {
    this._door_name = door_name;
    this._location = location;
  }

  get doorName() {
    return this._door_name;
  }

  set doorName(name) {
    this._door_name = name;
  }

  get doorLocation() {
    return this._location;
  }

  set doorLocation(location) {
    this._location = location;
  }
}

module.exports = Door;
