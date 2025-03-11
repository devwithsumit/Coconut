import { createContext, useContext, useState } from "react";

const LocationContext = createContext({
    lat: '23.211165',
    lng: '77.4510741',
})

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState({
        lat: '23.211165',
        lng: '77.4510741',
    })

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            {children}
        </LocationContext.Provider>
    )
}
export const useLocationContext = () => {
    return useContext(LocationContext);
}