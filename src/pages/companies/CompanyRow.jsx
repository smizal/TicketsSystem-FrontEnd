import { Link } from "react-router-dom"
import companiesService from "../../services/companiesService"

const CompanyRow = ({
  company,
  index,
  getList,
  handleDelete,
  handleStatus,
}) => {
  return (
    <tr key={company._id}>
      <td>{index + 1}</td>
      <td>{company.name}</td>
      <td>{company.phone}</td>
      <td>{company.email}</td>
      <td>{company.address}</td>
      <td>{company.cr}</td>
      <td>{company.photo}</td>
      <td>
        <span
          className={
            company.status === "active"
              ? "badge text-bg-success"
              : "badge text-bg-warning"
          }
        >
          {company.status}
        </span>
      </td>
      <td>{company.address}</td>
      <td>
        <Link
          to={`/companies/${company._id}`} // Enable viewing company details
          className="btn btn-primary btn-sm me-2"
        >
          View
        </Link>
        <button
          className="btn btn-danger btn-sm me-2"
          id={company._id}
          onClick={() => handleDelete(company._id)} // Ensure we're passing the ID
        >
          Delete
        </button>
        <button
          className={
            company.status === "active"
              ? "btn btn-warning btn-sm"
              : "btn btn-success btn-sm"
          }
          id={company._id}
          name={company.status === "active" ? "suspended" : "active"}
          onClick={() => handleStatus(company._id, company.status)} // Ensure we're passing the ID and status
        >
          {company.status === "active" ? "Suspend" : "Activate"}
        </button>
      </td>
    </tr>
  )
}

export default CompanyRow
