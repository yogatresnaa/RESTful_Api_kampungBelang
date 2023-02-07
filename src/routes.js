/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
const { addCustomerHandler, getAllCustomerHandler, getCustomerByIdHandler, deleteCustomerByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/datacustomer',
    handler: addCustomerHandler,
  },
  {
    method: 'GET',
    path: '/datacustomer',
    handler: getAllCustomerHandler,
  },
  {
    method: 'GET',
    path: '/customers/{id}',
    handler: getCustomerByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteCustomerByIdHandler,
  },
];

module.exports = routes;
