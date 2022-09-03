import React from 'react'

function WatchList() {
  return (
    <div className='d-flex flex-column box1 p-5 container bcbr mb-5' >
                <div>
                    <h1>Watch Lists</h1>
                </div>
                    <div className='d-flex flex-row container'>
                            <div class="dropdown">

                                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{"paddingRight":"394px"}}>
                                        Dropdown button
                                    </button>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a class="dropdown-item"  style={{"paddingRight":"460px"}} href="#">Investments to watch</a></li>
                                        <li><a class="dropdown-item"  style={{"paddingRight":"460px"}} href="#">Airline</a></li>
                                        <li><a class="dropdown-item"  style={{"paddingRight":"460px"}} href="#">Banks</a></li>
                                        <li><a class="dropdown-item"  style={{"paddingRight":"460px"}} href="#">DOW</a></li>
                                        <li><a class="dropdown-item"  style={{"paddingRight":"460px"}} href="#">ETF</a></li>
                                        <li><a class="dropdown-item"  style={{"paddingRight":"460px"}} href="#">Retails</a></li>
                                        <li><a class="dropdown-item"  style={{"paddingRight":"460px"}} href="#">Technology</a></li>
                                    </ul>

                            </div>
                            <div className='d-flex flex-row align-items-center '>
                                <a href='#'>Create Now</a>
                            </div>
                            <div  className='d-flex flex-row align-items-center '>
                                <a href='#'>Edit</a>
                            </div>
                    </div>
            
                    
                <div class="container">
                <div class="row bor">
                    <div class="col-md bor d-flex align-items-center justify-content-center" style={{"height":"72px","width":"auto"}}>
                    Symbol
                    </div>
                    <div class="col-md bor alm">
                    
                    </div>
                    <div class="col-md bor alm">
                    Last Price $
                    </div>
                    <div class="col-md bor alm">
                    Change $
                    </div>
                    <div class="col-md bor alm">
                    Change %
                    </div>
                    <div class="col-md bor alm">
                    Volume
                    </div>
                </div>
                <div class="row bor">
                    <div class="col-md bor alm">
                        MSFT
                    </div>
                    <div class="col-md bor alm">
                    One of three columns
                    </div>
                    <div class="col-md bor alm">
                    $282.30
                    </div>
                    <div class="col-md bor alm">
                    -$3.44
                    </div>
                    <div class="col-md bor alm">
                     0.00 %
                    </div>
                    <div class="col-md bor alm">
                    65.39k
                    </div>
                </div>
              
                <div class="row bor">
                    <div class="col-md bor alm">
                        MSFT
                    </div>
                    <div class="col-md bor alm">
                    One of three columns
                    </div>
                    <div class="col-md bor alm">
                    $282.30
                    </div>
                    <div class="col-md bor alm">
                    -$3.44
                    </div>
                    <div class="col-md bor alm">
                     0.00 %
                    </div>
                    <div class="col-md bor alm">
                    65.39k
                    </div>
                </div>
                
                </div>
                <a href='#'>View Full Watchlist</a>
    </div>
  )
}

export default WatchList