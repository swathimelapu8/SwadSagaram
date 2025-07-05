import {useEffect, useState} from "react";
import useRestrauntData from "../utilities/useRestrauntData";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./ShimmerUI";
import './Restraunts.css';
import ShimmerUI from "./ShimmerUI";
import {Link} from 'react-router';

const Restraunts = () => {

    const listdata = useRestrauntData();
    const [searchedText, setSearchedText] = useState("");
    const [listOfRestraunts, setListOfRestaurants] = useState(null);
    
    useEffect(()=>{
      setListOfRestaurants(listdata);
    },[listdata]);
`
    //debouncing the filtering logic`
    useEffect(()=> {
      console.log("getting restraunt with searched text"+searchedText);
      const timer = setTimeout(() => {
        console.log("in timer"+searchedText);
        setListOfRestaurants(listdata && listdata.filter(
            (restro)=>restro.info.name.toLowerCase().includes(searchedText.trim().toLowerCase())
        ))
      }, 300);

      return ()=> clearTimeout(timer);
    },[searchedText]);

    
    // const timer = setTimeout(()=>
    //   setListOfRestaurants(listdata && listdata.filter(
    //     (restro)=>restro.info.name.toLowerCase().includes(searchedText.trim().toLowerCase())
    //   )),300
    // ),[searchedText,listdata]

    if(listOfRestraunts === null) return <ShimmerUI/>;
    if(listdata.length === 0) return <h1>No restraunts found</h1>
    return (
      <>

       <div className='search-bar'>
        <input type="text" placeholder="Search..." value={searchedText} onChange={(e) => setSearchedText(e.target.value)} className='search-input' />
        </div>
        
       <div className="restro-container">
       {(listOfRestraunts.length ===0) ? (<h1>No restraunts found with {searchedText}</h1>) : listOfRestraunts.map((restrauntDetails) => (
        <Link to={"restraunts/"+restrauntDetails.info.id} key={restrauntDetails.info.id}> <RestrauntCard  restrauntDetails = {restrauntDetails}/> </Link>
       ))}
       </div>
       </>
    )

}

export default Restraunts;