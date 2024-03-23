import React from "react";

const Resturantitems=({product})=>{
    return(<>
    {
        product.map(a=>{
            return(<div className="me-3">
              {console.log(a)}
              <div className="card"  style={{width: "20rem"}}>
            <img className="card-img-top" src={a.Foodimage} alt="image not found"/>
            <div className="card-body">
              <h5 className="card-title">{a.dishname}</h5>
              <p className="card-text"> price:{a.price}</p>
              <p className="card-text"> rating:{a.rating}</p>
              <a href="#" className="btn btn-danger">order now</a>
            </div>
          </div>
            </div>)
        })
}</>)
}
export default Resturantitems