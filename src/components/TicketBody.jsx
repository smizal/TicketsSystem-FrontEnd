const TicketBody = ({ ticketData }) => {
  return (
    <>
      {ticketData ? (
        <>
          <section className="mb-5">
            <div className="bg-primary text-white p-2">
              <h5>
                {ticketData.ticket.issuerId.name} {ticketData.ticket.createdAt}
              </h5>
            </div>
            <div className="border p-2">{ticketData.ticket.description}</div>
          </section>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default TicketBody
