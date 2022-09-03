import React from "react";
import data from "./HistoricalData.json"
import {
   AreaChart,
   Area,
   YAxis,
   XAxis,
   CartesianGrid,
   Tooltip,
   Legend
   } from "recharts";
//    console.log(data);
//    let data1 = []
//    Object.keys(data).forEach(function(key) {
//     data1.push(data[key]);
//     // console.log(data[key].Date)
//     data1 = [
//         {
//            name: (data[key].Date).toString(),
//            "Product A": (data[key].Close).toString()
           
//         }]
//     });
// //     console.log(data1);
//    console.log(data[0].Close);

   
   class AreaRechartComponent extends React.Component {
    
    data1 = [
        
     ];
     
    
     

      render() {
        for(let i = 0 ; i < data.length ; i++)
        {
            this.data1.push({"Close" : data[i].Close,"Open": data[i].Open , "Date": data[i].Date ,"Day Low":data[i]["Day Low"],"Day High":data[i]["Day High"]})
        }
          console.log(this.data1);
         return (

           

            
          
    <div className='m-0' style={{"font-size":"15px"}}>
        <div className='m-2 d-flex-column bcbr' style={{"width":"auto","height":"auto"}}>

                  <div className='d-flex justify-content-evenly pt-2'>
                          <div className='' style={{"color":"#36A5F4"}} >DOW</div>
                          <div className='' >NASDAQ</div>
                          <div className=''>S&P500</div>
                  </div>
                  
                  <div className='d-flex justify-content-center'>
                          <div>$33,309.51</div>
                  </div>

                  <div className='d-flex justify-content-center'>
                          <div className='' style={{"color":"rgb(75, 180, 12)"}}>+535.10 (+1.63%)</div>
                  </div>

                  <div className='d-flex justify-content-center mt-2 m-0' style={{"width":"auto","height":"auto","backgroundColor":"white"}}>
                    <AreaChart
                    style={{"margin":"0px"}}
                    width={430}
                    height={250}
                    data={this.data1}
                    margin={{ top: 0 ,right: 0, left: 0, bottom: 0 }}>
                    <defs>
                    <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
            
                    </defs>
                    <XAxis dataKey="Date"  ticks={false}
                           style={{"font-size":"12px"}}  />
                    <YAxis type="number" domain={[10000, 20000]} className="axis"
                           style={{"font-size":"12px"}} 
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area
                    type="monotone"
                    dataKey="Close"
                    stroke="#000000"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    activeDot={{r:5}}
                    />
                    <Area 
                    className="hide"
                    type="monotone"
                    dataKey="Day Low"
                    stroke="#c2172b"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    activeDot={{r:5}}
                    />
                    <Area 
                    className="hide"
                    type="monotone"
                    dataKey="Day High"
                    stroke="#027a18"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    activeDot={{r:5}}
                    />
                    <Area
                    className="hide"
                    type="monotone"
                    dataKey="Open"
                    stroke="#3f60cc"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    activeDot={{r:5}}
                    />
                    </AreaChart>
                  </div>
        </div>  
    </div>
   
      );
   }
}
export default AreaRechartComponent;