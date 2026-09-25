import React from 'react';
import './css/Header.css';

function Header({setIsModalOpen}) {
  return (
    <div className="header-section">

      {/* Left Side - Search & Filters */}
      <div className="header-left">

        <div className="search-wrapper">
          <span className="search-icon">⌕</span>

          <input
            type="search"
            placeholder="Search by Name, Mobile, Department"
          />
        </div>

        <select name="state" className="header-select">
          <option value="delhi">Delhi</option>
          <option value="punjab">Punjab</option>
          <option value="haryana">Haryana</option>
          <option value="himachal">Himachal</option>
        </select>

        <select name="Dept" className="header-select">
          <option value="it">IT</option>
          <option value="management">Management</option>
          <option value="cyber">Cyber</option>
          <option value="development">Development</option>
        </select>

      </div>


      {/* Right Side - Actions */}
      <div className="header-right">

        <button className="export-btn pdf-btn">
          <span>PDF</span>
          Export PDF
        </button>

        <button className="export-btn excel-btn">
          <span>XLS</span>
          Export Excel
        </button>

        <button className="add-employee-btn" onClick={()=> setIsModalOpen(true)}>
          <span>+</span>
          Add Employee
        </button>

      </div>

    </div>
  );
}

export default Header;