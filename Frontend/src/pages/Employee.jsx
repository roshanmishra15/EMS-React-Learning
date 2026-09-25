import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Table from '../component/Table'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import AddEmployeeModal from '../component/AddEmployeeModal';
function Employee() {
  const [employeeData, setEmployeeData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token")

  const loadEmployee = async () => {
    try {
      const empdata = await axios.get(`${import.meta.env.VITE_URI}/emp/getemployee`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setEmployeeData(empdata.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadEmployee();
  }, [])
  return (
    <div>
      <Navbar />
      <Header setIsModalOpen={setIsModalOpen} />
      <Table empData={employeeData} />
      {isModalOpen && (
        <AddEmployeeModal setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  )
}

export default Employee