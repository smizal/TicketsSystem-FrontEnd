import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import departmentsService from '../../services/departmentsService'
import DepartmentRow from './DepartmentRow'
import DepartmentRows from './DepartmentsRows'

const DepartmentsList = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [loading, setLoading] = useState(false);

  try {
    const getList = async () => {
      setLoading(true);
      const data = await departmentsService.index()
      console.log(data)
      setDepartments(setDepartments(data ? (data.length > 0 ? data : []) : []))
    }
  } catch (error) {
    setLoading(false);
    console.log(error)

  }

  try {
    setLoading(true)
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
  } catch (error) {
    setLoading(false)
    console.log(error)
  }

  try {
    setLoading(true)
    const handleStatus = async (e) => {
      const data = await departmentsService.update(e.target.id, {
        status: e.target.name
      })
      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          setMessage({ msg: data.message, type: 'alert alert-info' })
        }
        getList()
      }
    }
  } catch (error) {
    setLoading(false)
    console.log(error)
  }

  try {
    setLoading(true)
    useEffect(() => {
      const fetchDefaultList = async () => {
        const data = await departmentsService.index()
        console.log(data)
        setDepartments(setDepartments(data ? (data.length > 0 ? data : []) : []))
      }
      fetchDefaultList()
    }, [])
  } catch (error) {
    setLoading(false)
    console.log(error)
  }

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
          <DepartmentRows departments={DepartmentRows} getList={getList} handleDelete={handleDelete} handleStatus={handleStatus} />
        </div>
      </div>
    </>
  )
}

export default DepartmentsList
