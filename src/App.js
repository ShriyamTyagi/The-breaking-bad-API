import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import Header from "./components/UI/Header";
import Chargrid from "./components/characters/Chargrid";
import Search from "./components/UI/Search";

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query,setQuery] = useState('');

 useEffect(() => {
   const fetchdata = async () => {
     const resp = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
     console.log(resp.data);

     setItems(resp.data);
     setIsLoading(false);
   }
   fetchdata();
 }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => {setQuery(q)}}/>
      <Chargrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
