import React from 'react'
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Footer from "../footer/Footer";
import './aprtment.css'
import { Link } from 'react-router-dom';
import useFetch from "../../hooks/useFetch.js";


function ApartmentList() {
  const {data, loading, error} = useFetch(`/hotels?type=aprtment`)
  

    return (
      <>
        <Navbar />
        <Header />
        <div className="hotelListContainer">
        {
          loading ? "loading please wait..." :
          data.length < 1 ? "sorry there is no items to display" :data && data.map((item) =>(
          <div key={item._id} className="searchItem">
            <img
              src={item.photos[0]}
              alt=""
              className="hotelListImg"
            />
            <div className="hotelListDesc">
              <Link to={`/hotels/${item._id}`}>
                <h1 className="hotelListTitle">{item.name}</h1>
              </Link>
              <span className="hotelListDistance">{item.city}</span>
            </div>
            <div className="hotelListDetails">
              <div className="hotelListRating">
              {item.rating &&   <button className="">{item.rating}</button>}
              </div>
              <div className="hotelListDetailTexts">
                <span className="hotelListPrice">From</span>
                <span className="hotelListTaxOp">₹ {item.cheapestPrice}</span>
                
                  <span className="hotelListCheckButton">For Tonight</span>
              </div>
            </div>
          </div>
          ))
        }
        </div>
        <Footer />
      </>
    );
}

export default ApartmentList;
