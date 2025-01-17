import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import usersService from '../../services/usersService'
import UserRaw from './UserRaw'

const UsersList = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [users, setUsers] = useState(null)

  const getList = async () => {
    const data = await usersService.index()
    setUsers(data ? (data.length > 0 ? data : null) : null)
  }

  const handleDelete = async (e) => {
    const data = await usersService.deleting(e.target.id)
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({
          msg: data.message ? data.message : 'User Deleted Successfully',
          type: 'alert alert-info'
        })
      }
      getList()
    }
  }

  const handleStatus = async (e) => {
    const data = await usersService.update(e.target.id, {
      status: e.target.name
    })
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({
          msg: data.message ? data.message : 'User status changed successfully',
          type: 'alert alert-info'
        })
      }
      getList()
    }
  }

  useEffect(() => {
    const fetchDefaultList = async () => {
      const data = await usersService.index()
      setUsers(data)
    }
    fetchDefaultList()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h1>Users List</h1>
        <div className="container table-container">
          <div className="text-end">
            <Link to={`/users/new`} className="btn btn-primary btn-sm mb-4">
              New User
            </Link>
          </div>
          {message ? <div className={message.type}>{message.msg}</div> : null}
          {users ? (
            <table className="table table-bordered table-hover text-center">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Department</th>
                  <th>Role</th>
                  <th>phone</th>
                  <th>CPR</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="servicesTableBody">
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <UserRaw
                      key={user._id}
                      user={user}
                      index={index}
                      getList={getList}
                      handleDelete={handleDelete}
                      handleStatus={handleStatus}
                    />
                  ))
                ) : (
                  <tr>
                    <td colspan="10">No User found</td>
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

export default UsersList
