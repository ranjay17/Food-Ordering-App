import { CDN_URL } from "../common/constant";

const RestaurantCard = (props) =>{
    const{resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,slaString} = resData.info; 
    return(
        <div className="res-card m-4 p-4 w-[200px] h-[330px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="h-[100px] w-80 object-cover rounded-lg" alt="res1-logo" src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-serif font-bold text-center py-2">{name}</h3>
            <h4 className="text-xs break-words text-slate-600 font-medium">{cuisines.join(",")}</h4>
            <h4 className="flex font-bold text-xs">{avgRating}<img className="h-3 m-0.5" src="https://tse1.mm.bing.net/th?id=OIP.qHEGHhT0cMhgynh3hqa4kQHaFw&pid=Api&P=0&h=180"/></h4>
            <h4 className="text-xs font-medium">{costForTwo}</h4>
            <h4 className="text-xs font-medium">{resData.info.sla.slaString}&nbsp;minutes</h4>
        </div>
    )
}

export default RestaurantCard;