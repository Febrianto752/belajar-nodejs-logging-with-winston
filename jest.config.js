export default {
  collectCoverage: true,
  coverageProvider: "v8",
  // coverageThreshold: {
  //   global: {
  //     branches: 80, // mempresentasika % harus berhasil
  //     functions: 80,
  //     lines: 80,
  //     statements: -10,
  //   },
  // },
  // collectCoverageFrom: ["src/**/*.{js,jsx}", "vendor/**/*.{js,jsx}"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  verbose: true,
};
