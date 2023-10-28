import { Routes, BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
                <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/profile" element={<Profile></Profile>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
