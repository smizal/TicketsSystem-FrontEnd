import React from "react"

function CompanyDetails({ companies }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover text-center">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          complength = companies.length
          {companies.length > 0 ? (
            companies.map((company) => (
              <tr key={company.id} className="hover-row">
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.description}</td>
                <td>{company.status}</td>
                <td>{company.notes}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Company Actions"
                  >
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => console.log(company)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-outline-danger btn-sm ms-2">
                      Delete
                    </button>
                    <button className="btn btn-outline-warning btn-sm ms-2">
                      Suspend
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                <em>No companies found</em>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CompanyDetails
