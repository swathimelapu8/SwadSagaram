import { CLOUDINARY_BASE_URL } from "../utilities/constants";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export const MenuItem = ({itemCard}) => {
    const dispatch = useDispatch();

    const handleAddItem = (itemName) =>{
        dispatch(addItem(itemName))
    }
    return (
        <div  style={{ backgroundColor: "#ADD8E6", padding: "2px 5px", margin: "5px 0px", borderRadius: "5px", display: "flex", justifyContent: "space-between" }}>
            <div>
                <h4>{itemCard?.card?.info?.name}</h4>
                <p>{itemCard?.card?.info?.description}</p>
            </div>
            <div style={{ marginTop: "10px" }}>
                <img src={CLOUDINARY_BASE_URL + itemCard?.card?.info?.imageId} style={{ height: "120px", borderRadius: "10px", width: "120px" }} />
                <div style={{ textAlign: "center", position: "relative", bottom: "20px" }}>
                    <button style={{ backgroundColor: "#4682B4", borderRadius: "5px", color: "white", fontWeight: "bolder", width: "60px", height: "30px" }} onClick={()=>handleAddItem(itemCard?.card?.info?.name)}>Add+</button>
                </div>
            </div>
        </div>
    )
}