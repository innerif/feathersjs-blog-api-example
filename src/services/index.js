const users = require('./users/users.service.js');
const userType = require('./user-type/user-type.service.js');
const article = require('./article/article.service.js');
const category = require('./category/category.service.js');
const tag = require('./tag/tag.service.js');
const articleStatus = require('./article-status/article-status.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(userType);
  app.configure(article);
  app.configure(category);
  app.configure(tag);
  app.configure(articleStatus);
};
