/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Esto asegura que busque los tests en tu carpeta de tests
  testMatch: ['**/tests/**/*.test.ts'],
  // Ayuda a limpiar la consola entre tests
  clearMocks: true,
};