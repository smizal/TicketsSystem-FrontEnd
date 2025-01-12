import { Link, useNavigate } from 'react-router-dom'

const UserRaw = ({ user, index, getList, handleDelete, handleStatus }) => {
  return (
    <tr key={user._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.companyId ? user.companyId.name : '-'}</td>
      <td>{user.departmentId ? user.departmentId.name : '-'}</td>
      <td
        className={
          user.role === 'super'
            ? 'text-success'
            : user.role === 'admin'
            ? 'text-warning'
            : 'text-primary'
        }
      >
        {user.role}
      </td>
      <td>{user.phone}</td>
      <td>{user.cpr}</td>
      <td>{user.email}</td>
      <td>
        <span
          className={
            user.status === 'active'
              ? 'btn btn-success btn-sm'
              : user.status === 'suspended'
              ? 'btn btn-warning btn-sm'
              : 'btn btn-primary btn-sm'
          }
        >
          {user.status}
        </span>
      </td>
      <td>
        {/* <Link to={`/users/${user._id}`} className="btn btn-primary btn-sm me-2">
          View
        </Link> */}
        <button
          className="btn btn-danger btn-sm me-2"
          id={user._id}
          onClick={handleDelete}
        >
          Delete
        </button>
        {user.status === 'pending' ? (
          <>
            <button
              className="btn btn-success btn-sm me-2"
              id={user._id}
              name="active"
              onClick={handleStatus}
            >
              Activate
            </button>
            <button
              className="btn btn-warning btn-sm"
              id={user._id}
              name="suspended"
              onClick={handleStatus}
            >
              Suspend
            </button>
          </>
        ) : (
          <button
            className={
              user.status === 'active'
                ? 'btn btn-warning btn-sm'
                : 'btn btn-success btn-sm'
            }
            id={user._id}
            name={user.status === 'active' ? 'suspended' : 'active'}
            onClick={handleStatus}
          >
            {user.status === 'active' ? 'Suspend' : 'Activate'}
          </button>
        )}
      </td>
    </tr>
  )
}

export default UserRaw
