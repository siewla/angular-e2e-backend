const bcrypt = require('bcrypt');
const Agents = require('../models/agents');

const agentsControllers = {
  registerNewAgent: async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    Agents.create({ email, password }, function (err, user) {
      if (err) {
        return res.json('existed');
      } else {
        return res.json('created');
      }
    });
  },

  authorizeAgent: async (req, res) => {
    Agents.findOne(
      { email: req.body.email },
      'email password',
      function (err, user) {
        if (err || !user) {
          return res.json("User doesn't exist, please sign up.");
        } else {
          if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.json('Email and password do not match');
          }
          return res.json('valid');
        }
      },
    );
  },
};

module.exports = {
  agentsControllers,
};
