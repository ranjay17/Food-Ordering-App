import RestaurantCard from "./components/RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./components/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./components/useOnlineStatus";

const Body = () =>{
    const [ListOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("");
    console.log("Body Renders",ListOfRestaurant)
    useEffect(()=>{
        fetchData();
    }, [])
    
    const fetchData = async() =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log(json);
        // optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // conditional rendring
    // if (ListOfRestaurant.length === 0){
    //     return <Shimmer />
    // }
    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return (
            <h1>Looks Like You Are Offline!! Please Check Your Internet Connection;</h1>
        )
    }
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 items-center">
                    <input placeholder="Search Restaurant" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />
                <button className="px-2 bg-green-100 m-4" onClick={()=>{

                    //filetr the restaurant card and update the UI
                    const filteredRest = ListOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRest);
                    console.log(searchText)
                }} >search</button>
                </div>
                <div className="m-4 p-4 items-center">
                    <button className="px-2 m-4 bg-zinc-300 rounded-lg" onClick={()=>{
                    const topRes = filteredRestaurant.filter(
                        (restaurant)=> restaurant.info.avgRating >= 4.2
                    )
                    setFilteredRestaurant(topRes)
}}>
                        Top Rated Restaurants
                        </button>
                </div>
            </div>
            <div className="flex flex-wrap m-6">
                {/* //Restaurant card */}
                {
                    filteredRestaurant.map((restaurant)=>(
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;