import js from '@eslint/js';
import globals from 'globals';

export default [
  // Reglas recomendadas de ESLint.
  js.configs.recommended,

  // No analizar artefactos ni dependencias.
  {
    ignores: ['dist/', 'node_modules/'],
  },

  // Código de la aplicación: entorno de navegador.
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },

  // Pruebas: entorno de Node.
  {
    files: ['test/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },

  // Archivos de configuración en la raíz: entorno de Node.
  {
    files: ['*.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },
];
