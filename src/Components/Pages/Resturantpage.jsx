import React from "react";
import Data from "../../Resturants.json"
import Resturantitems from "./Resturantitems";
const Resturantpage=()=>{
    console.log(Data)
    return(<div>
      { Data.map(a=>{
        return(<>
        <h1>{a.resturants}</h1>
        <div key={a.id} className="cont" style={{overflow:"scroll"}}>
        <Resturantitems product={a.availableDishes}/>
        </div></>)

       })}

    </div>)

}
export default Resturantpage