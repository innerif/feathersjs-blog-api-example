// Initializes the `articleStatus` service on path `/article-status`
const createService = require('feathers-sequelize');
const createModel = require('../../models/article-status.model');
const hooks = require('./article-status.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/article-status', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('article-status');

  service.hooks(hooks);
};
