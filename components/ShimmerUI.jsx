const ShimmerUI = () => {
    
    return (
        <div className="shimmer-restro-container">
           { Array(8).fill("").map((_,i)=>
          <div className="shimmer-restro-card" key={i} >
                        <div >
                            <div>
                                <img className="shimmer-restro-image"/>
                            </div>
                        </div>
                        <div className="shimmer-restro-details">
                            
                        </div>
            </div>
         )}
        
        </div>
        
    )
        
                   
}
export default ShimmerUI;
