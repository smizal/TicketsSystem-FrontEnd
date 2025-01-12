import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import frontService from '../services/frontService'
import TicketHeader from '../components/TicketHeader'
import TicketBody from '../components/TicketBody'
import TicketThreads from '../components/TicketThreads'
import TicketThreadForm from '../components/TicketThreadForm'

const TicketStatus = () => {
  const navigate = useNavigate()
  const initialFormData = { description: '', ticketStatus: '' }
  const { id } = useParams()
  const [formData, setFormData] = useState(initialFormData)
  const [ticketData, setTicketData] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const ticketShow = async () => {
      const data = await frontService.show(id)
      setTicketData(data)
      formData.ticketStatus = data.ticket.status
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
      const data = await frontService.addThread(id, formData)

      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          ticketData.threads.push(data)
          setTicketData(ticketData)
          setMessage({
            msg: data.message ? data.message : 'Thread added Successfully',
            type: 'alert alert-success'
          })
          setFormData({
            description: '',
            ticketStatus: ticketData.ticket.status
          })
          navigate(`/status`)
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
        <TicketThreadForm
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

export default TicketStatus
