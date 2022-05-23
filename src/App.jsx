import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Offers } from './components/Offers';
import { Filters } from './components/Filters';
import { Restarunts } from './components/Restarunts';

import userInfo from './data/userInfo.json';
import offers from './data/offers.json';
import restarunts from './data/restarunts.json';


const filters = {
  1:"Cost High to Lost",
  2:"Cost Low to High",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance"
}

function App() {
  const [filterBy, setFilterBy] = React.useState("");
  const [data, setData] = React.useState(restarunts);

  const updateFilter = (newFilter) =>{
    // TODO 
    // console.log(newFilter);
    switch(newFilter){
      case "1": {
        setFilterBy(1);
        data.sort((a,b)=>(b.costForTwo - a.costForTwo));
        setData([...data]);
        break;
      }
      case "2": {
        setFilterBy(2);
        data.sort((a,b)=>(a.costForTwo - b.costForTwo));
        setData([...data]);
        break;
      }
      case "3": {
        setFilterBy(3);
        data.sort((a,b)=>(b.rating - a.rating));
        setData([...data]);
        break;
      }
      case "4": {
        setFilterBy(4);
        data.sort((a,b)=>(a.deliveryTimings - b.deliveryTimings));
        setData([...data]);
        break;
      }
      case "5": {
        setFilterBy(5);
        break;
      }
      default : {
        setData(restarunts);
        break;
      }
    }
  }
  return (
    <div className="App">
      <Navbar {...userInfo.location}/>
      <Offers offers={offers} />
      <section className="near-you">
        <Filters filters={filters} currentFilterBy={filterBy} updateFilter={updateFilter}/>
        <Restarunts restarunts={data}/>
      </section>
    </div>
  );
}

export default App;
