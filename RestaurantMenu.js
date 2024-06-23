import { useParams } from "react-router-dom";
//import { MENU_API } from "../common/constant";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(
    //         `${MENU_API}${resId}`
    //     );
    //     const json = await data.json();
    //     console.log("json:", json);
    //     setResInfo(json);
    // };

    if (resInfo === null) {
        return <Shimmer />
    };

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const{itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = 
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log("categories:" ,categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-xl">{cuisines.join(',')} - {costForTwoMessage}</p>
            {/* /* categories accordionce */}

            {
                categories.map((category)=>(
                <RestaurantCategory data={category?.card?.card}/>
            ))}
        </div>
    );
};

export default RestaurantMenu;
