import "./index.css"
import Navbar from './Navbar';
import Navbar_bottom from './Navbar_bottom';
import MainSection1 from './MainSection1';
import MainList from "./MainList";
import Graph1 from "./Graph1";
import Graph from "./Graph";
import News from "./News";
import WatchList from "./WatchList";
import Footer from "./Footer";
import data from "./data.json"

function App() {
  return (
    <>
   <Navbar/>
   <Navbar_bottom/>
   <MainSection1
     name={data.AccountListResponse.Accounts.Account[0].name}
     login={"Aug 11, 2022, 5:00 AM ET"}
     assests={"12000"}
     daygain={"+400"}
   />
   <div className="d-flex">

      <div className="d-flex flex-column m-0">
      <MainList/>
      <WatchList/>
      </div>


      <div className="d-flex flex-column m-0">
        <div> <Graph1/> </div>
        <div> <News/> </div>
      </div>

   </div>

      <Footer/>
   
   </>
  );
}

export default App;
