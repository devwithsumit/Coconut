import axios from "axios";
import { useEffect } from "react"

const useRestaurantInfo = (setData, setResList) =>{
    useEffect(() => {
        // fetching restaurants data
        axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            .then((res) => {
                // console.log(res.data);
                const mainData = res.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                console.log(mainData);
                if (mainData){
                    setData(mainData);
                    setResList(mainData);
                }
            })
            .catch((err) => {
                console.log("Error: ", err.message);
            })
    }, [])
}
export default useRestaurantInfo;