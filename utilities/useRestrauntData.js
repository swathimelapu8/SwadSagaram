import { useEffect, useState, useRef } from "react";
import infiniteScrollDemoData from '../infiniteScrollDemoData';

const useRestrauntData = () => {
    const [listData, setListData] = useState(null);
    const [nextOffset, setNextOffset] = useState(null);
    const lastFetchedOffsetRef = useRef(null);
    const observerRef = useRef();
    useEffect(() => {
        fetchJSONData();
    }, [])
    useEffect(() => {
        if (!observerRef.current) return;
        debugger;
        const observer = new IntersectionObserver(

            entries => {
                if (entries[0].isIntersecting && nextOffset && nextOffset !== lastFetchedOffsetRef.current) {
                    debugger;
                    fetchNextPageRestaurants(nextOffset);
                }
            },
            { threshold: 1.0 }
        )
        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => observer.disconnect();
    }, [nextOffset])
    // }, [])

    const fetchJSONData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4435038&lng=78.3892501&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").catch((err) => console.log(err));
        const jsonData = await data.json();
        setListData(jsonData?.data?.cards[4].card?.card.gridElements.infoWithStyle.restaurants);
        // setNextOffset(jsonData?.data?pageOffset?.nextOffset);
        setNextOffset(jsonData?.data?.pageOffset?.nextOffset);
        // console.log(jsonData?.data?.pageOffset?.nextOffset);
        // console.log(jsonData?.data?.cards[4].card?.card.gridElements.infoWithStyle.restaurants);
    }

    const fetchNextPageRestaurants = async (offsetValue) => {
        // console.log(nextOffset);
        // const updateURL = "https://www.swiggy.com/dapi/restaurants/list/update";
        // const payload = {
        //     lat: 17.4435038,
        //     lng: 78.3892501,
        //     nextOffset: nextOffset,
        //     page_type: "DESKTOP_WEB_LISTING"
        // };
        // const data = await fetch(updateURL, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(payload)
        // });
        // const jsonData = await data.json();
        const existingIds = new Set(listData.map(restro => restro.info.id));

        // Filter infiniteScrollDemoData to remove duplicates
        const filteredNewData = infiniteScrollDemoData.filter(
            restro => !existingIds.has(restro.info.id)
        );
        setListData((prev) => {
            const updated = [...prev, ...filteredNewData];
            return updated;
        });
        lastFetchedOffsetRef.current = offsetValue;
    }

    return { listData, observerRef };
}

export default useRestrauntData;