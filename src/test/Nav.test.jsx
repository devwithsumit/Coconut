import { fireEvent, getByText, render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar"
import { expect } from "vitest";
import { Provider } from "react-redux";
import store from '../redux/store';
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext";


it("Should render the img", () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <UserContextProvider>
                    <Navbar />
                </UserContextProvider>
            </BrowserRouter>
        </Provider>
    )

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
})
// it("Should toggle the login/logout Button", () => {
//     render(
//         <Provider store={store}>
//             <BrowserRouter>
//                 <UserContextProvider>
//                     <Navbar />
//                 </UserContextProvider>
//             </BrowserRouter>
//         </Provider>
//     )

//     //In regex -> Flexible matching & 'i' flag makes it case-insensitive.
//     const login = screen.getByRole('link', { name: /sign in/i });

//     // for firing the event
//     fireEvent.click(login);

//     // Check after the event is fired
//     const logout = screen.getByRole('link', { name: 'Logout' });

//     expect(logout).toBeInTheDocument();
// })