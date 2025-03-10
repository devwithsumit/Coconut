import { createContext, useContext, useState } from "react";


const ProfileContext = createContext(null);

export const ProfileProvider = ({children})=>{

    const [profile, setProfile] = useState(null)
    
    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = ()=>{
    return useContext(ProfileContext);
}