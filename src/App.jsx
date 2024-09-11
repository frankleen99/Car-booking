import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from "./Pages/Home.jsx";
import Orders from "./Pages/Orders.jsx";
import Help from "./Pages/Help.jsx";
import Favorites from "./Pages/Favorites.jsx";
import BestOnes from "./Pages/BestOnes.jsx";
import Invite from "./Pages/Invite.jsx";
import BuyPage from "./Pages/BuyPage.jsx";
import RepairPage from "./Pages/RepairPage.jsx";
import RentPage from "./Pages/RentPage.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx"
import SearchView from "./Pages/SearchView.jsx";
import CarNews from "./Components/CarNews.jsx";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/bestones" element={<BestOnes/>}/>
        <Route path="/invite" element={<Invite/>}/>
        <Route path="/buyPage" element={<BuyPage/>}/>
        <Route path="/repairPage" element={<RepairPage/>}/>
        <Route path="/rentPage" element={<RentPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/search" element={<SearchView/>}/>
        <Route path="/carNews" element={<CarNews/>}/>
    </Route>
))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

return <RouterProvider router={router}/>
};


export default App
