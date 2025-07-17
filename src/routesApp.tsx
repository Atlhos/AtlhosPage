import {Route,Routes} from "react-router-dom";
import Home from "./Pages/home";

export default function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}