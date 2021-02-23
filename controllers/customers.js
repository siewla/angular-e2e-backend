const Customers = require('../models/customers');

const customersControllers = {
  registerNewCustomer: async (req, res) => {
    // console.log(req.body);
    const { name, agentID, insurances } = req.body;
    Customers.create({ name, agentID, insurances }, function (err, user) {
      if (err) {
        return res.json('existed');
      } else {
        return res.json('success');
      }
    });
  },

  getAllCustomers: async (req, res) => {
    Customers.find({})
      .then((customers) => {
        return res.json(customers);
      })
      .catch((error) => {
        return res.json(error);
      });
  },

  getCustomersByAgentID: async (req, res) => {
    Customers.find({ agentID: req.params.agentID })
      .then((customers) => {
        return res.json(customers);
      })
      .catch((error) => {
        return res.json(error);
      });
  },

  getCustomerByID: async (req, res) => {
    Customers.findById(req.params.id)
      .then((customer) => {
        return res.json(customer);
      })
      .catch((error) => {
        return res.json(error);
      });
  },

  addNewInsurance: async (req, res) => {
    Customers.findByIdAndUpdate(
      req.params.customerID,
      {
        $push: { insurances: req.body },
      },
      { safe: true, upsert: true, new: true },
      function (error, model) {
        if (error) {
          return res.json(error);
        } else {
          return res.json('success');
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
          return res.json(error);
        } else {
          return res.json('success');
        }
      },
    );
  },

  removeCustomer: async (req, res) => {
    Customers.findByIdAndRemove(req.params.customerID, function (error, model) {
      if (error) {
        return res.json(error);
      } else {
        return res.json('success');
      }
    });
  },
};

module.exports = {
  customersControllers,
};
