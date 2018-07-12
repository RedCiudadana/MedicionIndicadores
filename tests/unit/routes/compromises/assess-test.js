import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | compromises/assess', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:compromises/assess');
    assert.ok(route);
  });
});
