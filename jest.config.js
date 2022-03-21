// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const { defaults } = require('jest-config');

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    roots: ['./src'],
    testEnvironment: './custom-jest-environment.js',
};
