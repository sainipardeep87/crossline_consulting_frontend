import StatsCards from '../components/StatsCards'

export default function Dashboard(){
  const alerts = [
    { type: 'warning', text: '2 visa renewals due in 7 days.' },
    { type: 'info', text: 'USCIS fee schedule updated — review templates.' },
  ]
  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h1 className="h3 mb-1">Dashboard</h1>
        <div className="text-muted">Overview of your practice: cases, clients, deadlines, and documents.</div>
      </div>
      <StatsCards />
      <div className="row g-3 g-lg-4 mt-1">
        <div className="col-12 col-lg-7">
          <div className="card card-soft h-100">
            <div className="card-body">
              <h2 className="h5 mb-3">Recent Activity</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Case #A-1023 moved to "Evidence Review"</li>
                <li className="list-group-item">Client Maria Gomez uploaded "Passport.pdf"</li>
                <li className="list-group-item">Task "Draft LCA" assigned to Priya</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div className="card card-soft mb-3">
            <div className="card-body">
              <h2 className="h6 mb-3">Alerts</h2>
              {alerts.map((a,i)=>(
                <div key={i} className={'alert alert-' + a.type + ' mb-2'}>{a.text}</div>
              ))}
            </div>
          </div>
          <div className="card card-soft">
            <div className="card-body">
              <h2 className="h6 mb-3">Quick Actions</h2>
              <div className="d-flex flex-wrap gap-2">
                <a className="btn btn-primary" href="/clients">Add Client</a>
                <a className="btn btn-outline-primary" href="/cases">Create Case</a>
                <a className="btn btn-outline-secondary" href="/documents">Upload Document</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
