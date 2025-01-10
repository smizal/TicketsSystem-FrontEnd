import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
const BASE_URL = import.meta.env.VITE_BACKEND

//import MainNavOrg from './components/navs/MainNavOrg'
import Footer from "./components/nav/Footer"
import MainNav from "./components/nav/MainNav"
import HomeCover from "./pages/HomeCover"
import Login from "./pages/login"
import DashBoard from "./pages/Dashboard"
import Register from "./pages/Register"
import NewTicket from "./pages/NewTicket"
import TicketStatus from "./pages/TicketStatus"
import UsersList from "./pages/users/UsersList"
import DepartmentDetails from "./pages/departments/DepartmentDetails"
import DepartmentsList from "./pages/departments/DepartmentsList"
import NewDepartment from "./pages/departments/NewDepartment"
import CompanyDetails from "./pages/companies/CompanyDetails"
import CompaniesList from "./pages/departments/CompaniesList"
import NewCompany from "./pages/companies/NewCompany"

function App() {
  return (
    <>
      <MainNav />

      <main>
        <Routes>
          <Route path="/create" element={<NewTicket />} />
          <Route path="/open" element={<NewTicket />} />
          <Route path="/view" element={<TicketStatus />} />
          <Route path="/view/:id" element={<TicketStatus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<TicketStatus />} />
          <Route path="/profile/edit" element={<TicketStatus />} />
          <Route path="/tickets" element={<TicketStatus />} />
          <Route path="/tickets/new" element={<TicketStatus />} />
          <Route path="/tickets/:id" element={<TicketStatus />} />
          <Route path="/tickets/edit/:id" element={<TicketStatus />} />
          <Route path="/tickets/:id/:thread" element={<TicketStatus />} />
          <Route path="/companies" element={<CompanyDetails />} />
          <Route path="/companies/new" element={<NewCompany />} />
          <Route path="/companies/:id" element={<TicketStatus />} />
          <Route path="/companies/edit/:id" element={<TicketStatus />} />
          <Route path="/departments" element={<DepartmentDetails />} />
          <Route path="/departments/new" element={<NewDepartment />} />
          <Route path="/departments/:id" element={<oneDepartment />} />
          {/* <Route path="/departments/edit/:id" element={<editDepartment />} /> */}
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/new" element={<TicketStatus />} />
          <Route path="/users/:id" element={<TicketStatus />} />
          <Route path="/users/edit/:id" element={<TicketStatus />} />
          <Route path="*" element={<HomeCover />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
