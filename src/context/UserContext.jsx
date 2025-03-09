import { createContext, useContext, useState } from "react";

// Main context which is used and modified further
const UserContext = createContext(null)

export const UserContextProvider = ({children}) => {
    const userObj = {
        name: 'No Name',
        location: 'Location',
        email: 'example@email.com',
    }
    const [user, setUser] = useState(null);

    const login = (userData) => setUser(userData);
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => {
    return useContext(UserContext);
};

// App.jsx:28 SerializableStateInvariantMiddleware took 60ms, which is more than the warning threshold of 32ms. 
// If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode.See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
// It is disabled in production builds, so you don't need to worry about that.