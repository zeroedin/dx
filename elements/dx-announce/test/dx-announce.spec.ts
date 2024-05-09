import { expect, html } from '@open-wc/testing';
import { createFixture } from '@patternfly/pfe-tools/test/create-fixture.js';
import { DxAnnounce } from '@rhdx/elements/dx-announce/dx-announce.js';

describe('<dx-announce>', function() {
  describe('simply instantiating', function() {
    let element: DxAnnounce;
    it('imperatively instantiates', function() {
      expect(document.createElement('dx-announce')).to.be.an.instanceof(DxAnnounce);
    });

    it('should upgrade', async function() {
      element = await createFixture<DxAnnounce>(html`<dx-announce></dx-announce>`);
      const klass = customElements.get('dx-announce');
      expect(element)
        .to.be.an.instanceOf(klass)
        .and
        .to.be.an.instanceOf(DxAnnounce);
    });
  })
});
