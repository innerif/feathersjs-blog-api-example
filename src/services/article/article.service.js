// Initializes the `article` service on path `/article`
const createService = require('feathers-sequelize');
const createModel = require('../../models/article.model');
const hooks = require('./article.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/article', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('article');

  service.hooks(hooks);
};
