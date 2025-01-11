const TicketThreadForm = ({
  ticketData,
  handleSubmit,
  handleChange,
  formData,
  isFormInvalid
}) => {
  return (
    <>
      {ticketData ? (
        ticketData.ticket.status !== 'closed' ? (
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
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Add notes"
                    onChange={handleChange}
                    value={formData.description}
                  ></textarea>
                  <input
                    type="hidden"
                    id="ticketStatus"
                    name="ticketStatus"
                    value={formData.ticketStatus}
                  />
                  <button
                    className="btn btn-primary mt-3"
                    disabled={isFormInvalid()}
                  >
                    Add Thread Notes
                  </button>
                </div>
              </form>
            </section>
          </>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </>
  )
}

export default TicketThreadForm
