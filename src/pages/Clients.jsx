import { useState } from 'react'

const seed = [
  { id: 'CL-1001', name: 'Aarav Sharma', email: 'aarav@example.com', status: 'Active', country: 'India' },
  { id: 'CL-1002', name: 'Maria Gomez', email: 'maria@example.com', status: 'Onboarding', country: 'Mexico' },
  { id: 'CL-1003', name: 'Li Wei', email: 'liwei@example.com', status: 'Active', country: 'China' },
]

export default function Clients(){
  const [q, setQ] = useState('')
  const list = seed.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.id.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 mb-1">Clients</h1>
          <div className="text-muted">Search and manage client records.</div>
        </div>
        <button className="btn btn-primary">New Client</button>
      </div>
      <div className="card card-soft">
        <div className="card-body">
          <div className="row g-2 align-items-center mb-3">
            <div className="col">
              <input value={q} onChange={e=>setQ(e.target.value)} className="form-control" placeholder="Search by name or ID" />
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary">Export</button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>Email</th><th>Country</th><th>Status</th><th></th>
                </tr>
              </thead>
              <tbody>
                {list.map(c=>(
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>{c.country}</td>
                    <td><span className="badge text-bg-light">{c.status}</span></td>
                    <td className="text-end">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
