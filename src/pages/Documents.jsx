import { useState } from 'react'

export default function Documents(){
  const [files, setFiles] = useState([
    { name:'Passport.pdf', client:'Maria Gomez', caseId:'CS-902', uploaded:'2025-09-03' },
    { name:'I-129F_Draft.docx', client:'Aarav Sharma', caseId:'CS-901', uploaded:'2025-09-04' },
  ])

  function onUpload(e){
    const f = e.target.files?.[0]
    if(!f) return
    setFiles([{name:f.name, client:'Unknown', caseId:'—', uploaded:new Date().toISOString().slice(0,10)}, ...files])
    e.target.value = ''
  }

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 mb-1">Documents</h1>
          <div className="text-muted">Secure uploads and case files.</div>
        </div>
        <label className="btn btn-primary">
          Upload <input type="file" hidden onChange={onUpload} />
        </label>
      </div>
      <div className="card card-soft">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>File</th><th>Client</th><th>Case</th><th>Uploaded</th><th></th>
                </tr>
              </thead>
              <tbody>
                {files.map((f,i)=>(
                  <tr key={i}>
                    <td>{f.name}</td>
                    <td>{f.client}</td>
                    <td>{f.caseId}</td>
                    <td>{f.uploaded}</td>
                    <td className="text-end">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">Download</button>
                        <button className="btn btn-sm btn-outline-danger">Delete</button>
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
