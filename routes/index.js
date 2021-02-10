const { customersControllers } = require('../controllers/customers');

module.exports = (app) => {
  app.get('/customers/all', customersControllers.getAllCustomers);

  app.post('/customer', customersControllers.registerNewCustomer);
};
