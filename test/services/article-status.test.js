const assert = require('assert');
const app = require('../../src/app');

describe('\'articleStatus\' service', () => {
  it('registered the service', () => {
    const service = app.service('article-status');

    assert.ok(service, 'Registered the service');
  });
});
