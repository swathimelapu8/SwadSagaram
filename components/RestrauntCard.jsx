import { CLOUDINARY_BASE_URL } from "../utilities/constants";


export const RestrauntCard = ({ restrauntDetails }) => {
    const image_url = CLOUDINARY_BASE_URL + restrauntDetails.info.cloudinaryImageId;
    const { name, avgRating } = restrauntDetails?.info;
    const { slaString } = restrauntDetails?.info?.sla;
    const { cuisines } = restrauntDetails?.info;
    return (

        <div className="restro-card" >
            <div >
                <div>
                    <img src={image_url} alt="image here" className="restro-image" />
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


// Higher order component : Takes in Restraunt Card and gives a new enhanced Restraunt Card component with discount details on Image

export const withDiscount = (RestrauntCard) => {
    return (props) => {
        return (
            <div style={{position:'relative'}}>
                <label style={{position:"absolute",top: '50%',left:'10%',color:'white',fontWeight:'bolder',fontSize:'120%',textShadow:'1px 1px 2px black'}}>{props.discountText}</label>
                <RestrauntCard restrauntDetails={props.restrauntDetails}  />
            </div>
        )
    }
}