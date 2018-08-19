const assert = require('assert');
const app = require('../../src/app');

describe('\'tag\' service', () => {
  it('registered the service', () => {
    const service = app.service('tag');

    assert.ok(service, 'Registered the service');
  });
});
