import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
