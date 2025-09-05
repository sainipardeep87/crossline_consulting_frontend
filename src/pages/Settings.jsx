export default function Settings(){
  return (
    <div className="container-fluid">
      <div className="mb-3">
        <h1 className="h3 mb-1">Settings</h1>
        <div className="text-muted">Configure firm profile, billing, and templates.</div>
      </div>
      <div className="row g-3">
        <div className="col-12 col-xl-6">
          <div className="card card-soft">
            <div className="card-body">
              <h2 className="h6">Firm Profile</h2>
              <div className="row g-2">
                <div className="col-12 col-md-6">
                  <label className="form-label">Firm Name</label>
                  <input className="form-control" defaultValue="Acme Immigration LLP"/>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Time Zone</label>
                  <select className="form-select" defaultValue="Asia/Kolkata">
                    <option>Asia/Kolkata</option>
                    <option>America/Los_Angeles</option>
                    <option>Europe/London</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input className="form-control" placeholder="Street, City, Country" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="card card-soft">
            <div className="card-body">
              <h2 className="h6">Document Templates</h2>
              <div className="mb-2 small text-muted">Starter templates for letters and forms.</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Employment Verification Letter
                  <button className="btn btn-sm btn-outline-secondary">Download</button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Invitation Letter
                  <button className="btn btn-sm btn-outline-secondary">Download</button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Cover Letter (RFE)
                  <button className="btn btn-sm btn-outline-secondary">Download</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
