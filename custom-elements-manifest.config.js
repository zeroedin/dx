import { pfeCustomElementsManifestConfig } from '@patternfly/pfe-tools/custom-elements-manifest/config.js';

export default pfeCustomElementsManifestConfig({
  globs: ['elements/*/dx-*.ts', 'elements/*/Dx*.ts'],
  exclude: ['*.css.js'],
});

