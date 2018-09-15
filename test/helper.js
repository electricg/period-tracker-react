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

/**
 * Hide console.log output in test
 */
global.console.log = () => {
  return;
};

module.exports.LocalStorageMock = LocalStorageMock;
