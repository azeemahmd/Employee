CREATE DATABASE Employeedetails;
USE Employeedetails;


CREATE TABLE Employee (
EmployeeId INT PRIMARY KEY auto_increment,
EmployeeName varchar(225),
Departname varchar(225),
Sex varchar(10),
Maritalstatus varchar(20),
Address varchar(255));

CREATE TABLE Salarydetails (
SalaryId INT PRIMARY KEY AUTO_INCREMENT,
EmployeeId INT,
Salary DECIMAL(10,2),
FOREIGN KEY (EmployeeId) REFERENCES Employee(EmployeeId)
);

DESCRIBE Employee;
DESCRIBE Salarydetails;


