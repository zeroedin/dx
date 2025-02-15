import globals from 'globals';
import tseslint from 'typescript-eslint';
import pfe from '@patternfly/eslint-config-elements';

export default tseslint.config(
  ...pfe,
  {
    name: 'local/ignores',
    ignores: [
      'custom-elements.json',
      'package-lock.json',
      'node_modules',
      'node_modules/**/*',
      '_site',
      'rhdx.min.js',

      '**/*.d.ts',
      '**/*.(spec|e2e).js',
      'react',
      'elements/**/*.js',
      'lib/**/*.js',

      'docs/_data/todos.json',
      'docs/demo.js',
      'docs/pfe.min.js',
      'docs/bundle.js',
      'docs/core',
      'docs/components',
      'docs/assets/playgrounds',
      'node_modules',

      '!core/*/demo/*.js',
      '!elements/*/demo/*.js',

      '.cache/*',

    ],
  },
  {
    name: 'local/scripts',
    files: ['scripts/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);


