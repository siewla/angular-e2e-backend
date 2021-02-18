const Customers = require('../models/customers');

const customersControllers = {
  registerNewCustomer: async (req, res) => {
    console.log(req.body);
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

  getCustomerByID: async (req, res) => {
    Customers.findById(req.params.id)
      .then((customer) => {
        res.json(customer);
      })
      .catch((error) => {
        res.json(error);
      });
  },

  addNewInsurance: async (req, res) => {
    Customers.findByIdAndUpdate(
      req.params.id,
      {
        $push: { insurances: req.body },
      },
      { safe: true, upsert: true, new: true },
      function (error, model) {
        if (error) {
          res.json(error);
        } else {
          res.json('success');
        }
      },
    );
  },

  removeInsurance: async (req, res) => {
    Customers.findByIdAndUpdate(
      req.params.customerID,
      {
        $pull: { insurances: { _id: req.params.insuranceID } },
      },
      { new: true },
      function (error, model) {
        if (error) {
          res.json(error);
        } else {
          res.json('success');
        }
      },
    );
  },

  removeCustomer: async (req, res) => {
    Customers.findByIdAndRemove(req.params.customerID, function (error, model) {
      if (error) {
        res.json(error);
      } else {
        res.json('success');
      }
    });
  },
};

module.exports = {
  customersControllers,
};
