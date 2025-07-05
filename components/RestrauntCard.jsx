import { CLOUDINARY_BASE_URL } from "../utilities/constants";


const RestrauntCard = ({restrauntDetails}) => {
    const image_url = CLOUDINARY_BASE_URL+restrauntDetails.info.cloudinaryImageId;
    const {name, avgRating} = restrauntDetails?.info;
    const {slaString} = restrauntDetails?.info?.sla;
    const {cuisines} = restrauntDetails?.info;
    // console.log(image_url);
    // console.log(slaString)
    // console.log(cuisines);
    return (
        
        <div className="restro-card">
            <div >
                <div>
                    <img src={image_url} alt="image here" className="restro-image"/>
                </div>
            </div>
            <div className="restro-details">
                <h3 className="restro-name">{name}</h3>
                <p>{avgRating}</p>
                <div className="cuisine"> {cuisines.join(",")}</div>
                <p>{slaString}</p>
            </div>
        </div>
        
    )
}
export default RestrauntCard;