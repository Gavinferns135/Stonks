import React from 'react'

function Navbar() {
  return (
            
    
    <nav className="navbar navbar-expand-lg navbar-light container-fluid" style={{"background-color": "#1A496A","borderRadius":"20px","height":"8vh"}}>
    <div className="container-fluid">
        <a href="#" className="navbar-brand text-white me-5"><b>Cloudegic <span style={{"color": "#36A5F4"}}>Inc</span></b></a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
            
            <form className="d-flex me-5 ms-4 " style={{"width":"500px"}}>
                <div className="input-group">                    
                    <input type="text" className="form-control" placeholder="Search"/>
                    <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button>
                </div>
            </form>

            <div className="navbar-nav ms-5">
                <a href="#" className="nav-item nav-link active text-white me-4 ms-4">Home</a>
                <a href="#" className="nav-item nav-link text-white me-4 ms-4">About</a>
                <a href="#" className="nav-item nav-link active text-white me-4 ms-4">Services</a>
                <a href="#" className="nav-item nav-link text-white me-4 ms-4">Contact</a>
                <a href="#" className="nav-item nav-link text-white me-4 ms-4">Contact</a>
                
            </div>

            
        </div>
    </div>
</nav>

    
            
  )
}

export default Navbar