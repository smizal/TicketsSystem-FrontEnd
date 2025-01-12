import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
const BASE_URL = import.meta.env.VITE_BACKEND

import Footer from './components/Footer'
import MainNav from './components/MainNav'
import HomeCover from './pages/HomeCover'
import Login from './pages/Login'
import DashBoard from './pages/Dashboard'
import Register from './pages/Register'
import NewTicket from './pages/NewTicket'
import TicketStatus from './pages/TicketStatus'
import UsersList from './pages/users/UsersList'
import DepartmentsList from './pages/departments/DepartmentsList'
import NewDepartment from './pages/departments/NewDepartment'
import CompanyDetails from './pages/companies/CompanyDetails'
import NewCompany from './pages/companies/NewCompany'
import Profile from './pages/Profile'
import TicketsList from './pages/tickets/TicketsList'
import TicketsCreated from './pages/TicketsCreated'
import TicketDetails from './pages/tickets/TicketDetails'
import TicketForm from './pages/tickets/TicketForm'
import NewUser from './pages/users/NewUser'
import UserDetails from './pages/users/UserDetails'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const logOut = () => {
    localStorage.removeItem('authToken')
    setUser(null)
    navigate('/')
  }

  return (
    <>
      <MainNav user={user} logOut={logOut} />

      <main>
        <Routes>
          <Route path="/create" element={<NewTicket />} />
          <Route path="/status" element={<TicketsCreated />} />
          <Route path="/view/:id" element={<TicketStatus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<TicketStatus />} />
          <Route path="/tickets" element={<TicketsList />} />
          <Route path="/tickets/new" element={<TicketForm />} />
          <Route path="/tickets/:id" element={<TicketDetails />} />
          <Route path="/tickets/edit/:id" element={<TicketStatus />} />
          <Route path="/tickets/:id/:thread" element={<TicketStatus />} />
          <Route path="/companies" element={<CompanyDetails />} />
          <Route path="/companies/new" element={<NewCompany />} />
          <Route path="/companies/:id" element={<TicketStatus />} />
          <Route path="/companies/edit/:id" element={<TicketStatus />} />
          <Route path="/departments" element={<DepartmentsList />} />
          <Route
            path="/departments/new"
            element={<NewDepartment user={user} />}
          />
          <Route path="/departments/:id" element={<oneDepartment />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/new" element={<NewUser />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/users/edit/:id" element={<TicketStatus />} />
          <Route path="*" element={<HomeCover />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
