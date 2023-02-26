import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ApartmentList from "./components/aprtment/Aprtment";
import CabinList from "./components/cabin/Cabin";
import Checkout from "./components/checkout/Checkout";
import HotelList from "./components/hotel/Hotel";
import ResortList from "./components/resort/resort";
import VillaList from "./components/villa/Villa";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "@stripe/stripe-js";
import Cancel from "./components/checkout/Cancel";
import Success from "./components/checkout/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/hotel/list" element={<HotelList />} />
        <Route path="/villa/list" element={<VillaList />} />
        <Route path="/aprtment/list" element={<ApartmentList />} />
        <Route path="/resort/list" element={<ResortList />} />
        <Route path="/cabin/list" element={<CabinList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
