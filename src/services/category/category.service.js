// Initializes the `category` service on path `/category`
const createService = require('feathers-sequelize');
const createModel = require('../../models/category.model');
const hooks = require('./category.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/category', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('category');

  service.hooks(hooks);
};
