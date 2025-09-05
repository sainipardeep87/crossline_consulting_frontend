const rows = [
  { id: 'CS-901', type: 'H-1B', client: 'Aarav Sharma', stage: 'RFE Response', due: '2025-09-20' },
  { id: 'CS-902', type: 'L-1A', client: 'Maria Gomez', stage: 'Drafting', due: '2025-09-12' },
  { id: 'CS-903', type: 'EB-2', client: 'Li Wei', stage: 'Filed', due: '2025-10-01' },
]

export default function Cases(){
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 mb-1">Cases</h1>
          <div className="text-muted">Track visa and immigration matters.</div>
        </div>
        <button className="btn btn-primary">New Case</button>
      </div>
      <div className="row g-3">
        {rows.map(r=>(
          <div className="col-12 col-md-6 col-xl-4" key={r.id}>
            <div className="card card-soft h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-semibold">{r.type}</div>
                    <div className="text-muted small">{r.id} • {r.client}</div>
                  </div>
                  <span className="badge text-bg-light">{r.stage}</span>
                </div>
                <div className="mt-3">
                  <div className="small text-muted">Due</div>
                  <div className="fw-semibold">{r.due}</div>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">Open</button>
                  <button className="btn btn-sm btn-outline-secondary">Assign</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
