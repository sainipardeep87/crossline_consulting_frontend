import { Routes, Route, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Cases from './pages/Cases'
import Tasks from './pages/Tasks'
import Appointments from './pages/Appointments'
import Documents from './pages/Documents'
import Settings from './pages/Settings'

export default function App(){
  return (
    <div>
      <Navbar />
      <div className="app-shell">
        <Sidebar />
        <main className="p-3 p-lg-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <footer className="text-muted small pt-4">
            <hr/>
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <span>© {new Date().getFullYear()} Immigration Work Portal</span>
              <NavLink to="/settings" className="link-secondary">Settings</NavLink>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

function NotFound(){
  return (
    <div className="container">
      <div className="alert alert-warning mt-3">Page not found.</div>
    </div>
  )
}
