const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'your-mysql-host',
  user: 'your-mysql-username',
  password: 'your-mysql-password',
  database: 'your-database-name',
});

connection.connect();

app.post('/employee/add', (req, res) => {
  const { empName, empID, department, gender, maritalStatus, salary, address } = req.body;

  const sql = 'INSERT INTO employees (empName, empID, department, gender, maritalStatus, salary, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [empName, empID, department, gender, maritalStatus, salary, address];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving employee details.');
    } else {
      console.log('Employee details saved successfully.');
      res.status(200).send('Employee details saved successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
