const TicketThreadAdminForm = ({
  ticketData,
  handleSubmit,
  handleChange,
  formData,
  isFormInvalid
}) => {
  return (
    <>
      {ticketData ? (
        <>
          <hr className="my-4" />
          <section>
            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <div className="notes">
                <h5>Notes</h5>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Add notes"
                    onChange={handleChange}
                    value={formData.description}
                  ></textarea>
                </div>
                <div className="form-floating mb-3">
                  <select
                    onChange={handleChange}
                    className="form-select"
                    id="ticketStatus"
                    name="ticketStatus"
                    defaultValue={formData.ticketStatus}
                  >
                    <option value="inProgress">In Progress</option>
                    <option value="suspended">Suspend</option>
                    <option value="closed">Close</option>
                  </select>
                  <label htmlFor="status">status</label>
                </div>
                <div className="form-floating mb-3">
                  <button
                    className="btn btn-primary mt-3"
                    disabled={isFormInvalid()}
                  >
                    Add Thread Notes
                  </button>
                </div>
              </div>
            </form>
          </section>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default TicketThreadAdminForm
