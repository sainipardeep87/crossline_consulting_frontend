const items = [
  { id: 'T-101', title: 'Collect pay stubs', assignee: 'Priya', due: '2025-09-09', status: 'Open' },
  { id: 'T-102', title: 'Schedule biometrics', assignee: 'Alex', due: '2025-09-13', status: 'Blocked' },
  { id: 'T-103', title: 'Draft client letter', assignee: 'Nina', due: '2025-09-07', status: 'In Progress' },
]

export default function Tasks(){
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 mb-1">Tasks</h1>
          <div className="text-muted">Team to‑dos across cases.</div>
        </div>
        <button className="btn btn-primary">New Task</button>
      </div>
      <div className="card card-soft">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ID</th><th>Title</th><th>Assignee</th><th>Due</th><th>Status</th><th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(t=>(
                  <tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.title}</td>
                    <td>{t.assignee}</td>
                    <td>{t.due}</td>
                    <td><span className="badge text-bg-light">{t.status}</span></td>
                    <td className="text-end"><button className="btn btn-sm btn-outline-secondary">Update</button></td>
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
