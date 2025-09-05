const appts = [
  { id:'A-301', person:'Aarav Sharma', type:'Consulate Interview', date:'2025-09-15', time:'10:00', location:'New Delhi' },
  { id:'A-302', person:'Maria Gomez', type:'Attorney Review', date:'2025-09-08', time:'15:30', location:'Remote' },
  { id:'A-303', person:'Li Wei', type:'USCIS Biometrics', date:'2025-09-18', time:'09:00', location:'San Jose' },
]

export default function Appointments(){
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 mb-1">Appointments</h1>
          <div className="text-muted">Interviews, biometrics, and consultations.</div>
        </div>
        <button className="btn btn-primary">New Appointment</button>
      </div>
      <div className="row g-3">
        {appts.map(a=>(
          <div className="col-12 col-lg-6" key={a.id}>
            <div className="card card-soft h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <div className="fw-semibold">{a.type}</div>
                    <div className="text-muted small">{a.person} • {a.location}</div>
                  </div>
                  <span className="badge text-bg-light">{a.date} @ {a.time}</span>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">Reschedule</button>
                  <button className="btn btn-sm btn-outline-secondary">Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
