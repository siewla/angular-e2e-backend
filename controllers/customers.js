const Customers = require('../models/customers');

const customersControllers = {
  registerNewCustomer: async (req, res) => {
    const { name, insurances } = req.body;
    try {
      const dbResult = Customers.create({
        name,
        insurances,
      });
      res.json('success');
    } catch (error) {
      res.json(error);
    }
  },

  getAllCustomers: async (req, res) => {
    Customers.find({})
      .then((customers) => {
        res.json(customers);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};

module.exports = {
  customersControllers,
};
