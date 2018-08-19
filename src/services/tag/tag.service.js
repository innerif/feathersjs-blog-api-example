// Initializes the `tag` service on path `/tag`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tag.model');
const hooks = require('./tag.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tag', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tag');

  service.hooks(hooks);
};
