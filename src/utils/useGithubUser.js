import axios from "axios";
import { useEffect, useState } from "react"

const useGithubUser = (username) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.github.com/users/" + username);
                setUser(response.data);
            } catch (error) {
                console.log("Error: " + error.message);
            }
        })()
    }, [])
    return user;
    // axios.get("https://api.github.com/users/" + username)
    // .then((response)=>{
    //     return response.data;
    // })
    // .catch((error)=>{
    //     console.log("Error: " + error.message);
    // })
}
export default useGithubUser;