import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
       const data = await fetch("");
       const json = await data.json();

       console.log(json);
       setResInfo(json);
    }
    if(resInfo === null){return <Shimmer/>}

    return(
        <div>
           <h1>Name of Restaurant</h1>
           <h2>Menu</h2>
           <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
           </ul>
        </div>
    )
}
export default RestaurantMenu;