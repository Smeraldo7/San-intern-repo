module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Use Babel to transform .js and .jsx files
  },
  testEnvironment: "jsdom", // If you need a browser-like environment for testing
};
