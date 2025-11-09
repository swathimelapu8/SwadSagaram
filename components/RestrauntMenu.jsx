import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import  {CLOUDINARY_BASE_URL} from "../utilities/constants";
import { MenuItem } from "./MenuItem";

export default function RestrauntMenu() {

    const [resInfo, setResInfo] = useState(null);
    const [open, setOpen] = useState(null);

    const resId = useParams().id;
    console.log("calling useparams")
    console.log(resId);
    const fetchMenu = async () => {
        try{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4435038&lng=78.3892501&catalog_qa=undefined&restaurantId=" + resId);
        const jsonData =  JSON.parse(data) ;
        console.log(jsonData?.data);
        setResInfo(jsonData?.data);
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchMenu()
    }, []);

    if (resInfo === null) return <ShimmerUI />;

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card.card.info;
    const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // const {itemCards} = cards?.menuItem?.card?.card?.itemCards;
    console.log("The below are menu items cards ");
    console.log(cards);
    console.log("open is", open);
    return <div >
        <div style={{ textAlign: 'center' }}>
            <h1>{name}</h1>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
        </div>
        {cards && cards.slice(1)?.map((menu) => (
            (!menu?.card?.card?.carousel) && (menu?.card?.card?.title) && <div key={menu?.card?.card?.categoryId} style={{ width: "80%",padding:"8px", margin: "1% 10%",backgroundColor:"#4682B4",borderRadius:"5px" }}>
                {(menu?.card?.card?.title) && <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
                    <div><h2>{menu?.card?.card?.title}</h2></div>
                    <div>
                        <button onClick={() => {
                            return (open === menu?.card?.card?.categoryId) ? setOpen(null) : setOpen(menu?.card?.card?.categoryId)
                        }}>{(open === menu?.card?.card?.categoryId) ? "↑" : "↓"}</button>
                    </div>
                </div>}

                
                {(open === menu?.card?.card?.categoryId) &&

                    ((menu?.card?.card?.categories) ? (menu?.card?.card?.categories?.map((categoryItems) => (
                        <div key={categoryItems?.categoryId} >
                            <h3>{categoryItems?.title}</h3>
                            {categoryItems.itemCards.map((subCategory) => (
                                <MenuItem itemCard={categoryItems} key={subCategory?.card?.info?.id}/>
                            ))}
                        </div>
                    ))) :
                        (menu?.card?.card?.itemCards?.map((itemCard) => (
                            <MenuItem itemCard={itemCard} key={itemCard?.card?.info?.id}/>
                        ))))
                }

                <div>

                </div>
            </div>
        ))}


    </div>




}