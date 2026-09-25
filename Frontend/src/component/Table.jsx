import React from 'react'
import './css/table.css'
function Table({ empData }) {
    return (
        <table>
            <tr>
                <th>EID</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>State</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            <tbody>
                {empData.map((val) => {
                    return ( <tr>
                        <td>{val.employeeId}</td>
                        <td>{val.employeeName}</td>
                        <td>{val.mobile}</td>
                        <td>{val.state}</td>
                        <td>{val.salary}</td>
                        <td>{val.department}</td>
                         <td>{val.status}</td>
                         <div className="btn">
                            <button>Edit</button>
                            <button>Delete</button>
                         </div>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default Table