import { useEffect, useState } from "react";
import useRestrauntData from "../utilities/useRestrauntData";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./ShimmerUI";
import './Restraunts.css';
import ShimmerUI from "./ShimmerUI";
import { Link } from 'react-router-dom';

const Restraunts = () => {


  const { listData, observerRef } = useRestrauntData();
  const [searchedText, setSearchedText] = useState("");
  const [listOfRestraunts, setListOfRestaurants] = useState(null);

  useEffect(() => {
    listData && setListOfRestaurants(listData);
  }, [listData]);

  // debouncing the filtering logic

  useEffect(() => {
    console.log("getting restraunt with searched text" + searchedText);
    const timer = setTimeout(() => {
      console.log("in timer" + searchedText);
      setListOfRestaurants(listData && listData.filter(
        (restro) => restro.info.name.toLowerCase().includes(searchedText.trim().toLowerCase())
      ))
    }, 300);

    return () => clearTimeout(timer);
  }, [searchedText]);




  return (
    <>
      {(listOfRestraunts === null) ? (
      <ShimmerUI />
      )
      :
      (
        <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="restro-container">
        {(listOfRestraunts.length === 0) ? (<h1>No restraunts found with {searchedText}</h1>) : listOfRestraunts.map((restrauntDetails) => (
          <Link to={"restraunts/" + restrauntDetails.info.id} key={restrauntDetails.info.id}> <RestrauntCard restrauntDetails={restrauntDetails} /> </Link>
        ))}
      </div>
      
      </>
      )
    }
      <div ref={observerRef} style={{ height: '50px', textAlign: 'center' , background:'grey'}}></div>
    </>
  )


}

export default Restraunts;