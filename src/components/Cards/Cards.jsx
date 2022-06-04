

export const Cards = ({products})=>{
    return(

        <div>
       
          <div className="card__vertical card" key={products?._id}>
           
              <i
                className=
             
                     "fa fa-heart card__like"
                   
                
                role="button"
              ></i>
         
  
          
         
  
            <div className="card__vertical-maincontent">
              <div className="card__vertical-img">
                <img
                 src={products?.image}
                  alt={products?.title}
                
                 
                />
              </div>
              <div
                className="card__vertical-content"
                style={{ margin: "1px 1px" }}
              >
                <div>{products?.title?.toUpperCase()}</div>
                <div style={{fontSize:"1.2rem"}}>{products?.categoryName?.toUpperCase()}</div>
                
                <div style={{fontWeight:"bold"}}>
                  MRP :<i className="fas fa-rupee-sign"></i>
                  {products?.price}
                </div>
                
                <button
                  className="btn__pri btn"
                 
                  style={{ marginTop: "1.2rem" }}
                 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          </div>
    )
}