const { customersControllers } = require('../controllers/customers');

module.exports = (app) => {
  app.get('/customers/all', customersControllers.getAllCustomers);
  app.get('/customer/:id', customersControllers.getCustomerByID);
  app.post('/customer', customersControllers.registerNewCustomer);
  app.put('/customer/:id', customersControllers.addNewInsurance);
  app.delete('/customer/:customerID', customersControllers.removeCustomer);
  app.delete(
    '/customer/:customerID/insurance/:insuranceID',
    customersControllers.removeInsurance,
  );
};
