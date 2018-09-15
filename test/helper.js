/**
 * Mock localStorage in test
 */
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}
const LocalStorageMockReset = () => {
  delete global.localStorage;
};

/**
 * Mock Date
 */
const RealDate = Date;
const mockDate = isoDate => {
  global.Date = class extends RealDate {
    constructor() {
      return new RealDate(isoDate);
    }
  };
};
const mockDateReset = () => {
  global.Date = RealDate;
};

/**
 * Hide console.log output in test
 */
global.console.log = () => {
  return;
};

module.exports.LocalStorageMock = LocalStorageMock;
module.exports.LocalStorageMockReset = LocalStorageMockReset;
module.exports.mockDate = mockDate;
module.exports.mockDateReset = mockDateReset;
