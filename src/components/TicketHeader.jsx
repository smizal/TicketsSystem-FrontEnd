const TicketHeader = ({ ticketData }) => {
  return (
    <>
      {ticketData ? (
        <>
          <section>
            <h5>Ticket #{ticketData.ticket._id}</h5>
            <h2>{ticketData.ticket.title}</h2>
          </section>
          <hr className="my-4" />
          <section className="row">
            <div className="col-md-12 col-lg-6">
              <h5 className="ticket-title">
                Status:{' '}
                <span className="ticket-data">{ticketData.ticket.status}</span>
              </h5>
              <h5 className="ticket-title">
                Company:{' '}
                <span className="ticket-data">
                  {ticketData.ticket.companyId.name}
                </span>
              </h5>
              <h5 className="ticket-title">
                Department:{' '}
                <span className="ticket-data">
                  {ticketData.ticket.departmentId.name}
                </span>
              </h5>
              <h5 className="ticket-title">
                Date created:{' '}
                <span className="ticket-data">
                  {ticketData.ticket.createdAt}
                </span>
              </h5>
              <h5 className="ticket-title">
                Last updated:{' '}
                <span className="ticket-data">
                  {ticketData.ticket.updatedAt}
                </span>
              </h5>
            </div>
            <div className="col-md-12 col-lg-6">
              <h5 className="ticket-title">
                Customer name:{' '}
                <span className="ticket-data">
                  {ticketData.ticket.customerId.name}
                </span>
              </h5>
              <h5 className="ticket-title">
                Phone:{' '}
                <span className="ticket-data">
                  {ticketData.ticket.customerId.phone}
                </span>
              </h5>
              <h5 className="ticket-title">
                Email:{' '}
                <span className="ticket-data">
                  {ticketData.ticket.customerId.email}
                </span>
              </h5>
              <h5 className="ticket-title">
                Source:{' '}
                <span className="ticket-data">{ticketData.ticket.source}</span>
              </h5>
              <h5 className="ticket-title">
                Type:{' '}
                <span className="ticket-data">{ticketData.ticket.type}</span>
              </h5>
            </div>
          </section>
          <hr className="my-4" />
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default TicketHeader
