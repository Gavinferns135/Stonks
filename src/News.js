import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
const News = () => {

    const [news,setNews] = useState([]);
    const arr = ["a","b","c"];
    useEffect(() => {
        axios.get('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology&apikey=L18NZ8RXVQ5410G5').then((res) => {
          const ResponseNews = res.data.feed;
          setNews(ResponseNews); 

      });
    
    },[]);


    
    
    return (
        <>
        
        <div className='d-flex flex-column bcbr mb-5' style={{"width":"auto"}}>
            <div className='mt-5 d-flex justify-content-center mb-4'><h1>News</h1></div>
            <hr></hr>
          
            <div className='news'>
                     
                          {
                            news && news.filter(item => item.banner_image!= "").slice(0, 7).map(new1=>{
                              const {title,url,time_published,summary,banner_image,topics} = new1 ;
                              
                              return(
                                <>
                                <div className='d-flex flex-row my-0 align-items-center'> 
                                    <div className='d-flex align-items-center'>
                                      <img src={banner_image} className='news-image' />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        {/* <p style={{"font-size":"10px"}}><b>{topics[0].topic}</b></p> */}
                                        <p style={{"font-size":"16px"}}><b className='m-0'>{title}</b></p>
                                        {/* <p style={{"font-size":"10px"}}>{time_published.slice(0,8)}</p> */}
                                    </div>
                                    <hr className='m-0'></hr>
                                </div>

                                <hr className='my-0'></hr>
                                </>
                              )
                            }
                          )}
                      
            </div>   
        </div>
    </>
    );
};


export default News





