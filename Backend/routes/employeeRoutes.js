const {addEmployee,getEmployee} = require("../controller/employee.controller")
const authmiddleware = require("../middleware/auth.middleware")
const express = require("express");
const router = express.Router();

router.post("/add",authmiddleware, addEmployee);
router.get("/getemployee",authmiddleware, getEmployee);

module.exports = router;