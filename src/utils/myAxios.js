import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=",
})

export default axiosInstance;