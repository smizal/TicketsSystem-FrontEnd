import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ticketsService from '../../services/ticketsService'
import TicketHeader from '../../components/TicketHeader'
import TicketBody from '../../components/TicketBody'
import TicketThreads from '../../components/TicketThreads'
import TicketThreadAdminForm from './TicketThreadAdminForm'

const TicketDetails = () => {
  const navigate = useNavigate()
  const initialFormData = { description: '', ticketStatus: 'inProgress' }
  const { id } = useParams()
  const [formData, setFormData] = useState(initialFormData)
  const [ticketData, setTicketData] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const ticketShow = async () => {
      const data = await ticketsService.show(id)
      setTicketData(data)
      formData.ticketStatus =
        data.ticket.status === 'new' ? 'inProgress' : data.ticket.status
      setFormData(formData)
    }
    ticketShow()
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setMessage('')
      const data = await ticketsService.addThread(id, formData)

      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          ticketData.threads.push(data)
          setTicketData(ticketData)
          setMessage({
            msg: 'Thread added Successfully',
            type: 'alert alert-success'
          })
          setFormData({
            description: '',
            ticketStatus: ticketData.ticket.status
          })
          navigate(`/tickets`)
        }
      }
    } catch (error) {
      console.log(error)
      setMessage({
        msg: 'There is an error, please contact the administrator',
        type: 'alert alert-danger'
      })
    }
  }

  const isFormInvalid = () => {
    return !formData.description
  }

  return (
    <>
      <div className="container mt-5 text-start">
        {message ? <div className={message.type}>{message.msg}</div> : null}
        <TicketHeader ticketData={ticketData} />
        <TicketBody ticketData={ticketData} />
        <TicketThreads ticketData={ticketData} />
        <TicketThreadAdminForm
          ticketData={ticketData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          isFormInvalid={isFormInvalid}
        />
      </div>
    </>
  )
}

export default TicketDetails
