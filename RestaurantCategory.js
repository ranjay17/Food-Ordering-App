import ItemList from "./ItemsList";
import { useState } from "react";

const RestaurantCategory = ({data}) =>{
  const[showItems, setShowItems] = useState()
  const handleClick = () =>{
     setShowItems(!showItems)
   }
    console.log("data:", data)
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
              <div className="flex justify-between" onClick={handleClick}>
            
                <span className="font-bold cursor-pointer">
                  {data.title}({data.itemCards.length})
                </span>
                <span>⬇️</span>
               </div>
            {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;