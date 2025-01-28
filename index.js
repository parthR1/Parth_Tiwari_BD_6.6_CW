const express = require('express');
const cors = require('cors');
const { getAllEmployees, getEmployeeById } = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

// Get all employees
app.get('/employees', async (_req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});

// Get employee by targetID
app.get('/employees/details/:id', async (req, res) => {
  let employee = getEmployeeById(parseInt(req.params.id));

  res.json({
    employee,
  });
});

module.exports = { app };
