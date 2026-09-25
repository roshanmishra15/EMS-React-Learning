import React, { useState } from 'react';
import './css/AddEmployeeModal.css';

function AddEmployeeModal({ setIsModalOpen }) {
    const [employeeData, setemployeeData] = useState({
        employeeId: "",
        employeeName: "",
        mobile: "",
        state: "",
        salary: "",
        department: "",
        status: "Active"
    });
    return (
        <div className="modal-overlay">

            <div className="employee-modal">

                {/* Header */}
                <div className="modal-header">
                    <div>
                        <h2>Add Employee</h2>
                        <p>Enter the employee details below.</p>
                    </div>

                    <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                        ×
                    </button>
                </div>


                {/* Form */}
                <div className="employee-form">

                    <div className="form-group">
                        <label>Employee ID</label>
                        <input
                            type="number"
                            placeholder="Enter employee ID"
                            onChange={handleChange}
                            value={employeeData.employeeId}
                            
                        />
                    </div>


                    <div className="form-group">
                        <label>Employee Name</label>
                        <input
                            type="text"
                            placeholder="Enter employee name"
                            name="employeeName"
                        />
                    </div>


                    <div className="form-row">

                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                                type="text"
                                placeholder="Enter mobile number"
                                name="mobile"
                            />
                        </div>

                        <div className="form-group">
                            <label>State</label>
                            <input
                                type="text"
                                placeholder="Enter state"
                                name="state"
                            />
                        </div>

                    </div>


                    <div className="form-row">

                        <div className="form-group">
                            <label>Salary</label>
                            <input
                                type="text"
                                placeholder="Enter salary"
                                name="salary"
                            />
                        </div>

                        <div className="form-group">
                            <label>Department</label>
                            <input
                                type="text"
                                placeholder="Enter department"
                                name="department"
                            />
                        </div>

                    </div>


                    {/* Status */}
                    <div className="status-section">

                        <div>
                            <label className="status-title">
                                Employee Status
                            </label>

                            <p>
                                Set whether this employee is currently active.
                            </p>
                        </div>

                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={employeeData.status === "Active"}
                                onChange={(e) =>
                                    setemployeeData((prev) => ({
                                        ...prev,
                                        status: e.target.checked ? "Active" : "Inactive"
                                    }))
                                }
                            />
                            <span className="slider round"></span>
                        </label>

                    </div>

                </div>


                {/* Footer */}
                <div className="modal-footer">

                    <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </button>

                    <button className="save-btn">
                        Add Employee
                    </button>

                </div>

            </div>

        </div>
    );
}

export default AddEmployeeModal;