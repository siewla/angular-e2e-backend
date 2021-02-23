const { customersControllers } = require('../controllers/customers');
const { agentsControllers } = require('../controllers/agents');

module.exports = (app) => {
  app.get('/agent/:agentID', agentsControllers.getAgentByAgentID);
  app.get('/customers/all', customersControllers.getAllCustomers);
  app.get(
    '/agent/:agentID/customers',
    customersControllers.getCustomersByAgentID,
  );
  app.get('/customer/:id', customersControllers.getCustomerByID);
  app.post('/customer', customersControllers.registerNewCustomer);
  app.post('/agent/login', agentsControllers.authorizeAgent);
  app.post('/agent', agentsControllers.registerNewAgent);
  app.put('/customer/:customerID', customersControllers.addNewInsurance);
  app.delete('/customer/:customerID', customersControllers.removeCustomer);
  app.delete(
    '/customer/:customerID/insurance/:insuranceID',
    customersControllers.removeInsurance,
  );
};
