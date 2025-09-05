export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="/">
          <span className="text-primary">Immigration</span> Portal
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topnav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="topnav">
          <form className="ms-auto d-flex" role="search" onSubmit={(e)=>e.preventDefault()}>
            <input className="form-control me-2" type="search" placeholder="Search clients, cases..." aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
