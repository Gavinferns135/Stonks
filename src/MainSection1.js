import React from 'react'
import data from "./data.json"

function MainSection1(props) {
    const ele = (data.AccountListResponse.Accounts.Account[0].accountName)
  return (
    <div className='d-flex p-2 bd-highlight mt-3 mb-4 bcbr py-4 alm flex-wrap' style={{"justify-content": "space-around","alignItems":"center"}}>
            <div >
                <p className='welcome-user'>{ele}</p>
                <p className='welcome-user-login'>Last login:{props.login}</p>
            </div>
            <div>
                <p className='text-style'>Total Assets </p> 
                <span className='text-style'>Day's Gain</span>
                
            </div>
                <div>
                    <p className='text-style'>{props.assests}</p> 
                    <span className='text-style'>{props.daygain}</span>
                </div>
            <div className='card1'>
                <div className='currency d-flex flex-row mt-3 mx-3 mb-0 justify-content-between'>
                    <div className='currency-symbol'>
                      <i class="bi bi-currency-dollar fa-2x"style={{"color":"white"}}></i>
                    </div>
                    <div className='currency-name' >
                            USD
                    </div>
                    <div className='currency-chip'>
                         <img className="currency-chip-logo" src={require('./images/chip.png')} />
                    </div>
                </div>

                <div className='currency-value mx-3 m-0'>
                        <div>
                        <p className='text-white m-0 card1-text '>$12,000</p> 
                        </div>
                        <div className='m-0'>
                              <p className='card1-text ' style={{"color":"#4BFF0C","font-size":"24px","padding-left":"9px"}}>$400<i class="fa fa-caret-up" aria-hidden="true" style={{"color":"#4BFF0C"}}></i></p>
                        </div>
                </div>
                <div className='currency-owner d-flex flex-row m-2 mt-0 pb-2 justify-content-between '>
                        <div className='d-flex card1-owner-text' style={{"margin-right":"103.5px"}}>
                            <p className='d-flex card1-owner-text text-white py-1'>Card Holder</p>
                            <p className='d-flex card1-owner-text-name text-white' style={{"padding-top":"1px"}}>Parth</p>
                        </div>
                        <div className='m-0'>
                            <i className="fa fa-cc-visa fa-2x" style={{"color":"white"}}></i>
                        </div>
                </div>
            </div>
            
           
    </div>
  )
}

export default MainSection1