import { Link, useNavigate } from 'react-router-dom'

const UserRaw = ({ user, index, getList, handleDelete, handleStatus }) => {
  return (
    <tr key={ticket._id}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.companyId ? user.companyId.name : '-'}</td>
      <td>{user.departmentId ? user.departmentId.name : '-'}</td>
      <td>{user.role}</td>
      <td>{user.phone}</td>
      <td>{user.cpr}</td>
      <td>{user.email}</td>
      <td>
        <span
          className={
            user.status === 'active'
              ? 'badge text-bg-success'
              : 'badge text-bg-danger'
          }
        >
          {ticket.status}
        </span>
      </td>
      <td>
        <Link to={`/users/${user._id}`} className="btn btn-primary btn-sm me-2">
          View
        </Link>
        <button
          className="btn btn-danger btn-sm me-2"
          id={user._id}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className={
            user.status === 'active'
              ? 'btn btn-warning btn-sm'
              : user.status === 'suspended'
              ? 'btn btn-success btn-sm'
              : 'btn btn-primary btn-sm'
          }
          id={user._id}
          name={user.status === 'active' ? 'suspended' : 'active'}
          onClick={handleStatus}
        >
          {user.status === 'active' ? 'Suspend' : 'Activate'}
        </button>
      </td>
    </tr>
  )
}

export default UserRaw
