import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(""+ resId);
        const json = await data.json();

        console.log(json);
        setResInfo(json);
    }
    if (resInfo === null) { return <Shimmer /> }

    const {name, cuisines, costForTwoMessage} = resInfo; //destructure from original dataset

    const {itemCards} = resInfo //destructure from original dataset for menu cards

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h2>{costForTwoMessage}</h2>
            <h3>Menu</h3>
            <ul>
                {
                    itemCards.map(item =>
                        <li>
                            {item.card.info.name} - {"Rs. "}
                            {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>)
                }
            </ul>
        </div>
    )
}
export default RestaurantMenu;