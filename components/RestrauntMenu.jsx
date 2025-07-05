import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";

export default function RestrauntMenu() {

    const [resInfo, setResInfo] = useState(null);

    const resId = useParams().id;
    console.log("calling useparams")
    console.log(resId);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4435038&lng=78.3892501&catalog_qa=undefined&restaurantId=" + resId);
        const jsonData = await data.json();
        console.log(jsonData?.data);
        setResInfo(jsonData?.data);
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
    return <>
        <h1>{name}</h1>
        <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
        {cards.slice(1)?.map((menu, i) => (
            <div key={menu?.card?.card?.categoryId ?? `menu-${i}`}>
                {menu?.card?.card?.itemCards?.map((categoryItems, j) => (
                    <div key={categoryItems?.card?.info?.id ?? `item-${j}`}>
                        <h3>{categoryItems?.card?.info?.name}</h3>
                        <p>{categoryItems?.card?.info?.description}</p>
                    </div>
                ))}
            </div>
        ))}


    </>




}