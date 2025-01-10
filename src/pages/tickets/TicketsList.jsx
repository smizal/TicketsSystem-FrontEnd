const TicketsList = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Department Details</h1>
        <br />
        <div className="container table-container">
          <br />

          <table className="table table-bordered table-hover text-center">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Source</th>
                <th>Type</th>
                <th>Company ID</th>
                <th>Department ID</th>
                <th>Customer ID</th>
                <th>Issuer ID</th>
                <th>Description</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="servicesTableBody">
              <tr>
                <td>ID Test</td>
                <td>Title Test</td>
                <td>Source Test</td>
                <td>Type Test</td>
                <td>Company ID Test</td>
                <td>Department ID Test</td>
                <td>Customer ID Test</td>
                <td>Issuer ID Test</td>
                <td>Description Test</td>
                <td>Status Test</td>
                <td>Notes Test</td>
                <td>
                  <button className="btn btn-primary btn-block edit-button">
                    Edit
                  </button>

                  <button
                    type="submit"
                    className="btn btn-block btn-danger ms-2"
                  >
                    Delete
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

export default TicketsList
