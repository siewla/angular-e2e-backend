const { customersControllers } = require('../controllers/customers');
const { agentsControllers } = require('../controllers/agents');

module.exports = (app) => {
  app.get('/customers/all', customersControllers.getAllCustomers);
  app.get('/customer/:id', customersControllers.getCustomerByID);
  app.post('/customer', customersControllers.registerNewCustomer);
  app.post('/agent', agentsControllers.registerNewAgent);
  app.put('/customer/:id', customersControllers.addNewInsurance);
  app.delete('/customer/:customerID', customersControllers.removeCustomer);
  app.delete(
    '/customer/:customerID/insurance/:insuranceID',
    customersControllers.removeInsurance,
  );
};
