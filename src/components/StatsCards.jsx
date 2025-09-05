export default function StatsCards(){
  const items = [
    { title: 'Open Cases', value: 42, sub: '+3 this week' },
    { title: 'New Clients', value: 12, sub: 'last 7 days' },
    { title: 'Upcoming Appointments', value: 8, sub: 'next 7 days' },
    { title: 'Pending Tasks', value: 19, sub: 'across teams' },
  ]
  return (
    <div className="row g-3 g-lg-4">
      {items.map((c,i)=>(
        <div className="col-12 col-md-6 col-xl-3" key={i}>
          <div className="card card-soft">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="text-muted small">{c.title}</div>
                  <div className="display-6 fw-bold">{c.value}</div>
                </div>
                <span className="badge rounded-pill badge-soft">{c.sub}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
