import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data , loading , error} = useFetch("/hotels/?featured=true&limit=4")
  data.sort(() => Math.random() - 0.5)

  return (
    
    <div className="fp">
     {
      loading ? "loading please wait..." :
      data.map((item)=>(
        <Link to={`/hotels/${item._id}`} className="fpItem" key={item._id}>
          <img
            src={item.photos[0]}
            alt=""
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating && <div className="fpRating">
            <button>{item.rating}</button>
            <span>Excellent</span>
          </div>}
        </Link>
      ))
     } 
    </div>
  );
};

export default FeaturedProperties;
