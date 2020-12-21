export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building || this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override ');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
