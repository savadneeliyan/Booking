import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext.js";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../loading/Loading.js";
import "./featured.css";

const Featured = () => {

  const [destination, setDestination] = useState("");
  var day = new Date();
  var nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);

  const dates =[{
      startDate: new Date(day),
      endDate: nextDay,
      key: "selection",
    }];
  const options={
    adult: 1,
    children: 0,
    room: 1,
  };
  const navigate = useNavigate();
  const {data , loading , error} = useFetch("/hotels/region/hotel")
  
  const {dispatch} = useContext(SearchContext)
  
  
  const handlePlace =(e) => {
    setDestination(e.target.dataset.destination)
    // console.log(destination);
    handleSearch()
    };

    const handleSearch = () => {
      if(destination){
        dispatch({type:"NEW_STATE",payload:{destination, dates, options}})
        navigate("/hotels", { state: { destination, dates, options } });
      }else{
        // console.log("error")
      }
    };
      

  return (
    <div className="featured">
      {loading ? <Loading/> :
        Object.keys(data).map((item,i) => {
          if(i<3){
              return(
              <div key={i}  className="featuredItem" data-destination={item}  onClick={handlePlace}>
                <img data-destination={item}
                  src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1 data-destination={item}>{item}</h1>
                  <h2 data-destination={item}>{data[item]} properties</h2>
                </div>
              </div>
            )
          }
        })
      }   
    </div>
  );
};

export default Featured;
