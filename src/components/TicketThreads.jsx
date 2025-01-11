const TicketThreads = ({ ticketData }) => {
  return (
    <>
      {ticketData
        ? ticketData.threads.map((thread, index) => (
            <section className="mb-3">
              <div className="bg-secondary text-white p-2">
                <h5>
                  {thread.issuerId.name} {thread.createdAt}
                </h5>
              </div>
              <div className="border p-2">{thread.description}</div>
            </section>
          ))
        : ''}
    </>
  )
}

export default TicketThreads
