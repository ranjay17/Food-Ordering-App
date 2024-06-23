import { CDN_URL } from "../common/constant";

const ItemList = ({ items }) => {
    console.log("items:", items);
    
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span className="font-bold"> - ₹{item.card.info.price 
                            ? item.card.info.price/ 100
                            : item.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="w-3/12 p-4">
                       <div>
                          <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                    </div>
                    <div className="absolute font-bold">
                        <button className="p-2 mx-10 -my-4 rounded-lg bg-white text-green-400 text-sm">ADD</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
