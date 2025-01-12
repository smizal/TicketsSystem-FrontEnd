import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import departmentsService from '../../services/departmentsService'
import DepartmentRow from './DepartmentRow'

const DepartmentsList = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [loading, setLoading] = useState(true)

  const getList = async () => {
    setLoading(true)
    const data = await departmentsService.index()
    setDepartments(data ? (data.length > 0 ? data : null) : null)
    setLoading(false)
  }

  const handleDelete = async (e) => {
    setLoading(true)
    const data = await departmentsService.deleting(e.target.id)
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({
          msg: data.message ? data.message : 'Department Deleted Successfully',
          type: 'alert alert-info'
        })
      }
      getList()
      setLoading(false)
    }
  }

  const handleStatus = async (e) => {
    setLoading(true)
    const data = await departmentsService.update(e.target.id, {
      status: e.target.name
    })
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({
          msg: data.message
            ? data.message
            : 'Department status updated successfully',
          type: 'alert alert-info'
        })
      }
      getList()
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    const fetchDefaultList = async () => {
      const data = await departmentsService.index()
      setDepartments(data)
      setLoading(false)
    }
    fetchDefaultList()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h1>Department List</h1>
        <div className="container table-container">
          <div className="text-end">
            <Link
              to={`/departments/new`}
              className="btn btn-primary btn-sm mb-4"
            >
              New Department
            </Link>
          </div>
          {message ? <div className={message.type}>{message.msg}</div> : null}
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : departments ? (
            <table className="table table-bordered table-hover text-center">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Company</th>
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
                      handleStatus={handleStatus}
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
            'No departments found'
          )}
        </div>
      </div>
    </>
  )
}

export default DepartmentsList
