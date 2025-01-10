import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import departmentsService from '../../services/departmentsService'
import DepartmentRow from './DepartmentRow'

const DepartmentsList = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [departments, setDepartments] = useState(null)

  const getList = async (ship) => {
    const data = await departmentsService.index()
    setDepartments(data)
  }

  const handleDelete = async (e) => {
    const data = await departmentsService.deleting(e.target.id)
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({ msg: data.message, type: 'alert alert-info' })
      }
      getList()
    }
  }

  useEffect(() => {
    const fetchDefaultList = async () => {
      const data = await departmentsService.index()
      setDepartments(data)
    }
    fetchDefaultList()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h1>Department List</h1>
        <div className="container table-container">
          {message ? <div className={message.type}>{message.msg}</div> : null}
          {departments ? (
            <table className="table table-bordered table-hover text-center">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="servicesTableBody">
                {departments.length > 0 ? (
                  departments.map((department, index) => (
                    <DepartmentRow
                      key={department._id}
                      department={department}
                      index={index}
                      getList={getList}
                      handleDelete={handleDelete}
                    />
                  ))
                ) : (
                  <tr>
                    <td colspan="6">No departments found</td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </>
  )
}

export default DepartmentsList
