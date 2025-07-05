import { useEffect, useState } from "react";
const useRestrauntData = () =>{
    const [listOfRestraunts, setListOfRestraunts] = useState(null);
    useEffect(()=>{
        fetchJSONData();
    },[])
    const fetchJSONData = async() => {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4435038&lng=78.3892501&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").catch((err)=>console.log(err));
     const jsonData = await data.json();
     setListOfRestraunts(jsonData?.data?.cards[4].card?.card.gridElements.infoWithStyle.restaurants);
     console.log(jsonData?.data?.cards[4].card?.card.gridElements.infoWithStyle.restaurants);
    }
    return listOfRestraunts;
}

export default useRestrauntData;