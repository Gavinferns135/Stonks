import React, { useState } from 'react'
import News1 from './News1'
import Portfolio from './Portfolio'

function MainList() {

     
        return (
        <>

    
    
      <div className="box1 d-flex flex-column mb-4 mx-2 bcbr flex-wrap" style={{"borderRadius":"25px"}}>
            <div className='p-4'>
                <p className='Main-list-title'> Individual Brokerage -7974</p>
            </div>
            <div className='d-flex flex-row justify-content-center flex-wrap' aria-expanded="true">
                    <div className='d-flex flex-column align-items-end text-style' style={{"margin-right":"5vw"}}>
                            <div>Net Account Value</div>
                            <div>Day's Gain</div>
                            <div>Available for Withdrawal (Cash)</div>
                            <div>Available for Withdrawal (Margin + Cash)</div>
                            <div>Margin Purchasing Power</div>
                    </div>
                    <div className='d-flex flex-column align-items-center text-style'>
                            <div>$12,500.00</div>
                            <div>+$400.00 (3.5%)</div>
                            <div>$12,500.00</div>
                            <div>$12,500.00</div>
                            <div>$12,500.00</div>
                    </div>
            </div>

                <div >

                        <p>
                                <a className="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                         
                                        <span>PortFolio</span>
                                        
                                </a>
                                <a className="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" data-parent="#accordion">
                                                 News
                                </a>
                
                        </p>
                        
                              <div id='accordion1'>
                              
                                        <div className="collapse" id="collapseExample" data-bs-parent="#accordion1" style={{"transition":"0.0s" }}  >
                                                <div className="card card-body" style={{"background-color":"#e3e1e1"}}>
                                                <Portfolio/>
                                                </div>
                                        </div>
                                        

                                

                                        <div className="collapse" id="collapseExample1"  data-bs-parent="#accordion1" style={{"transition":"0.0s"}}>
                                               <News1/>
                                        </div>
                              </div>

                        
                        
                </div>
            
       </div> 
       
      


      
       <div className="box1 d-flex flex-column mb-4 mx-2 bcbr" style={{"borderRadius":"25px"}}>
            <div className='p-4'>
                <p className='Main-list-title'> Individual Brokerage -7974</p>
            </div>
            <div className='d-flex flex-row justify-content-center' aria-expanded="true">
                    <div className='d-flex flex-column align-items-end text-style' style={{"margin-right":"5vw"}}>
                            <div>Net Account Value</div>
                            <div>Day's Gain</div>
                            <div>Available for Withdrawal (Cash)</div>
                            <div>Available for Withdrawal (Margin + Cash)</div>
                            <div>Margin Purchasing Power</div>
                    </div>
                    <div className='d-flex flex-column align-items-center text-style'>
                            <div>$12,500.00</div>
                            <div>+$400.00 (3.5%)</div>
                            <div>$12,500.00</div>
                            <div>$12,500.00</div>
                            <div>$12,500.00</div>
                    </div>
            </div>

                <div >

                        <p>
                                <a className="" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                                         
                                        <span>PortFolio</span>
                                        
                                </a>
                                <a className="" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" data-parent="#accordion">
                                                 News
                                </a>
                
                        </p>
                        
                              <div id='accordion2'>
                              
                                        <div className="collapse" id="collapseExample2" data-bs-parent="#accordion2" style={{"transition":"0.0s" }}  >
                                                <div className="card card-body" style={{"background-color":"#e3e1e1"}}>
                                                <Portfolio/>
                                                </div>
                                        </div>
                                        

                                

                                        <div className="collapse" id="collapseExample3"  data-bs-parent="#accordion2" style={{"transition":"0.0s"}}>
                                                <News1/>
                                        </div>
                              </div>

                        
                        
                </div>
            
       </div> 

                

    </>

    
    
  )
}

export default MainList