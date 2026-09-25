const Employee = require("../models/Employee");
const addEmployee = async (req, res) => {
    try {
        const empData = req.body;
        if (empData.employeeId == "" || empData.employeeName == "" || empData.mobile == "" || empData.state == "" || empData.department == "" || empData.salary == "" || empData.status == "") {
            return res.status(400).json({
                status: false,
                message: "All Fields Are Required"
            })
        }
        const isEmpCreated = await Employee.create({
            employeeId: empData.employeeId,
            employeeName: empData.employeeName,
            mobile: empData.mobile,
            state: empData.state,
            department: empData.department,
            salary: empData.salary,
            status: empData.status
        });
        if (isEmpCreated) {
            return res.status(201).json({
                status: true,
                message: "Employee Added Successfully"
            })
        }

    }
    catch (error) {
        console.log(error);
    }
}
const getEmployee = async (req, res) => {
    try {
        const empp = await Employee.find();
        res.status(200).json({
            status: true,
            data: empp
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Failed to get employees"
        });
    }
}

module.exports =
    {addEmployee,getEmployee}
