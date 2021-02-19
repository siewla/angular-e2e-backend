const bcrypt = require('bcrypt');
const Agents = require('../models/agents');

const agentsControllers = {
  registerNewAgent: async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
      const dbResult = Agents.create({
        email,
        password,
      });
      res.json('success');
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = {
  agentsControllers,
};
