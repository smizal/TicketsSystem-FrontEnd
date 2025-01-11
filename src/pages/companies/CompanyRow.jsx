import { Link } from 'react-router-dom'
import companiesService from '../../services/companiesService'

const CompanyRow = ({
  company,
  index,
  getList,
  handleDelete,
  handleStatus
}) => {
  {
    /* <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>CR</th>
                  <th>Status</th>
                  <th>Action</th> */
  }

  return (
    <tr key={company._id}>
      <td>{index + 1}</td>
      <td>{company.name}</td>
      <td>{company.phone}</td>
      <td>{company.email}</td>
      <td>{company.address}</td>
      <td>{company.cr}</td>
      <td>
        <span
          className={
            company.status === 'active'
              ? 'badge text-bg-success'
              : company.status === 'pending'
              ? 'badge text-bg-warning'
              : 'badge text-bg-danger'
          }
        >
          {company.status}
        </span>
      </td>
      <td>
        {/* <Link
          to={`/companies/${company._id}`}
          className="btn btn-primary btn-sm me-2"
        >
          View
        </Link> */}
        <button
          className="btn btn-danger btn-sm me-2"
          id={company._id}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className={
            company.status === 'active'
              ? 'btn btn-warning btn-sm'
              : 'btn btn-success btn-sm'
          }
          id={company._id}
          name={company.status === 'active' ? 'suspended' : 'active'}
          onClick={handleStatus}
        >
          {company.status === 'active' ? 'Suspend' : 'Activate'}
        </button>
      </td>
    </tr>
  )
}

export default CompanyRow
