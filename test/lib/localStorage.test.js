const {
  localStorageNamespace,
  loadState,
  saveState,
} = require('../../src/lib/localStorage');
const { LocalStorageMock, LocalStorageMockReset } = require('../helper');

beforeEach(() => {
  LocalStorageMockReset();
});

afterEach(() => {
  LocalStorageMockReset();
});

describe('localStorage', () => {
  describe('loadState', () => {
    test('should succeed when localStorage does not exist', () => {
      const expectedOutput = undefined;
      const output = loadState();
      expect(output).toEqual(expectedOutput);
    });

    test('should succeed when localStorage does exist and is empty', () => {
      global.localStorage = new LocalStorageMock();
      const expectedOutput = undefined;
      const output = loadState();
      expect(output).toEqual(expectedOutput);
    });

    test('should succeed when localStorage does exist and is not empty', () => {
      global.localStorage = new LocalStorageMock();
      localStorage.setItem(
        localStorageNamespace,
        JSON.stringify({ test: true })
      );
      const expectedOutput = { test: true };
      const output = loadState();
      expect(output).toEqual(expectedOutput);
    });
  });

  describe('saveState', () => {
    test('should fail when localStorage does not exist', () => {
      const state = { test: true };
      const expectedOutput = false;
      const output = saveState(state);
      expect(output).toEqual(expectedOutput);
    });

    test('should succeed when localStorage does exist and is empty', () => {
      const state = { test: true };
      global.localStorage = new LocalStorageMock();
      const expectedOutput = true;
      const expectedLocalStorage = JSON.stringify(state);
      const output = saveState(state);
      const outputLocalStorage = localStorage.getItem(localStorageNamespace);
      expect(output).toEqual(expectedOutput);
      expect(outputLocalStorage).toEqual(expectedLocalStorage);
    });

    test('should succeed when localStorage does exist and is not empty', () => {
      const state = { something: true };
      global.localStorage = new LocalStorageMock();
      localStorage.setItem(
        localStorageNamespace,
        JSON.stringify({ test: true })
      );
      const expectedOutput = true;
      const expectedLocalStorage = JSON.stringify(state);
      const output = saveState(state);
      const outputLocalStorage = localStorage.getItem(localStorageNamespace);
      expect(output).toEqual(expectedOutput);
      expect(outputLocalStorage).toEqual(expectedLocalStorage);
    });
  });
});
