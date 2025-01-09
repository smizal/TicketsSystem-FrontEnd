const CompanyDetails = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Company Details</h1>
        <br />
        <div className="container table-container">
          <br />

          <table className="table table-bordered table-hover text-center">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="servicesTableBody">
              <tr>
                <th>#</th>
                <th>Test Photo</th>
                <th>Test Phone</th>
                <th>Test Email</th>
                <th>Test Address</th>
                <th>Test Status</th>
                <th>Test Notes</th>

                <td>
                  <button className="btn btn-primary btn-block btn-sm edit-button">
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-block btn-danger btn-sm ms-2"
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="btn btn-block btn-warning btn-sm ms-2"
                  >
                    Suspend
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CompanyDetails
