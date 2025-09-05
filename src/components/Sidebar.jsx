import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard', icon: 'speedometer2' },
  { to: '/clients', label: 'Clients', icon: 'people' },
  { to: '/cases', label: 'Cases', icon: 'folder2-open' },
  { to: '/tasks', label: 'Tasks', icon: 'check2-square' },
  { to: '/appointments', label: 'Appointments', icon: 'calendar3' },
  { to: '/documents', label: 'Documents', icon: 'file-earmark-text' },
  { to: '/settings', label: 'Settings', icon: 'gear' },
]

export default function Sidebar(){
  return (
    <aside className="sidebar bg-white border-end">
      <div className="p-3">
        <div className="text-uppercase text-muted small fw-semibold mb-2">Menu</div>
        <ul className="list-unstyled">
          {links.map(({to,label},i)=>(
            <li key={i}>
              <NavLink
                to={to}
                end={to==='/'}
                className={({isActive}) => 
                  'd-flex align-items-center gap-2 px-3 py-2 rounded text-decoration-none ' + 
                  (isActive ? 'bg-primary text-white' : 'text-body')}
              >
                <span className="bi"></span>
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-3 bg-light rounded">
          <div className="fw-semibold">Storage</div>
          <div className="progress my-2" role="progressbar" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{width:'35%'}}>35%</div>
          </div>
          <div className="small text-muted">3.5 GB of 10 GB used</div>
        </div>
      </div>
    </aside>
  )
}
