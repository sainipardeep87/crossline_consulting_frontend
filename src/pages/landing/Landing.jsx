import passportImage from '../../images/passport.jpg'
function Landing(){
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">Crossline Consulting</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
        </div>
    </nav>

    <section className="hero">
        <div className="hero-overlay container">
        <h1 className="display-4 fw-bold">Your Journey Starts Here</h1>
        <p className="lead">Expert immigration guidance for a brighter future abroad.</p>
        <a href="#contact" className="btn btn-primary btn-lg mt-3">Get Free Consultation</a>
        </div>
    </section>

    <section id="services" className="py-5">
    <div className="container text-center">
      <h2 className="fw-bold mb-4">Our Services</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4">
            <div className="feature-icon mb-3">🌍</div>
            <h5 className="fw-bold">Visa Assistance</h5>
            <p>We help you with hassle-free visa application and documentation.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4">
            <div className="feature-icon mb-3">🏫</div>
            <h5 className="fw-bold">Study Abroad</h5>
            <p>Guidance for top universities worldwide with scholarship support.</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4">
            <div className="feature-icon mb-3">💼</div>
            <h5 className="fw-bold">Career Counseling</h5>
            <p>Personalized Counseling for a Successful Career</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-4">
            <div className="feature-icon mb-3">🎓</div>
            <h5 className="fw-bold">IELTS & PTE Training</h5>
            <p>Master English Proficiency for Global Opportunities</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section id="about" className="py-5 bg-light">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-md-6">
            <img src={passportImage} className="img-fluid rounded shadow" alt="Immigration"/>
            </div>
            <div className="col-md-6">
            <h2 className="fw-bold">About Us</h2>
            <p>We are a trusted immigration consultancy with years of experience helping clients move abroad for study, work, and permanent residency. Our dedicated experts ensure a smooth, transparent, and successful process for your new life overseas.</p>
            <ul>
                <li>10+ years of expertise</li>
                <li>Thousands of successful cases</li>
                <li>Trusted by families and professionals</li>
            </ul>
            </div>
        </div>
        </div>
    </section>
    <section id="contact" className="py-5">
    <div className="container">
      <h2 className="fw-bold text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <footer>
     <p>&copy; 2025 ImmigrateNow. All rights reserved.</p>
    </footer>
  </div>

)}

export default Landing