
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userInfo from "./data/userInfo.json"
import offers from "./data/offers.json"
import restaurants from './data/restaurants.json'
import {useState} from "react";
const filters={
0:"Cost high to low",
1:"Cost low to high",
2:"Ratings",
3:"Delivery time",
4:"Relevance"

}

function App() {
  const [filterBy,setFilterBy]=useState("");
  const [data,setdata]=useState(restaurants);
  const updateFilter=(newFilter)=>{
switch(newFilter){
  case "0":{
    setFilterBy(2)
        data.sort((a,b)=>b.costForTwo-a.costForTwo);
        setdata([...data])
        break;
      }
  case "1":{
    setFilterBy(1)
    data.sort((a,b)=>a.costForTwo-b.costForTwo);
    setdata([...data])
    break;
  }
 
  default:{
    setdata(restaurants)
  break;
  }
}
  };
  return (
    <div>
      <Navbar {...userInfo.location}/> 
      <Offers offers={offers}/>
      <section class="near-you">
<Filters filters={filters}updateFilter={updateFilter} currentFilterBy={filterBy}/>
<Restaurants restaurants={data}/>
</section>
    </div>
  );
}

export default App;
