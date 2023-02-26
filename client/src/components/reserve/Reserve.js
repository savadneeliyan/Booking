import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import './reserve.css'

function Reserve({setOpen, HotelId}) {
  const [selectedRooms,setSelectedRooms] = useState([])
  const {data, loading, error } = useFetch(`/hotels/room/${HotelId}`);
  const {dates} = useContext(SearchContext)
  const navigate = useNavigate()
  
  const getDatesInRange = (startDate, endDate) =>{
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    let dates = [];

    while (date <= end) { 
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate()+1)
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate,dates[0].endDate);

  const isAvailable = (roomNum) => {
    const isFound = roomNum.unavailableDates.some(date => allDates.includes(new Date(date).getTime()) );

    return !isFound
  }

  const handleClick = async ()=>{
      try {
        await Promise.all(selectedRooms.map((roomId) => {
          const res =  axios.put(`/rooms/availablity/${roomId}`, {dates:allDates});
          return res.data;
        })
        );
        setOpen(false);
        navigate("/")
      } catch (err) {
        
      }
  }
  const handleSelect = (e)=>{
    const selected =e.target.checked;
    const value = e.target.value;
    setSelectedRooms(selected ? [...selectedRooms,value] : selectedRooms.filter( (item) => item !== value ))
  }

  return (
    <div className='reserve'>
        <div className="rcontainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rclose" onClick={()=>(setOpen(false))}/>
            <span>select your rooms</span>
            {data.map(item => (
              <div className="ritem" key={item._id}>
                <div className="ritemInfo">
                  <div className="rtitle">{item.title}</div>
                  <div className="rdiscription">{item.desc}</div>
                  <div className="rmaxPeople">max-people : {item.maxPeople}</div>
                  <div className="rprice">Price : {item.price}</div>
                </div>
                <div className="rselectRooms">
                  {item.roomNumbers.map((room )=> 
                    <div className="room" key={room._id}>
                      <label>{room.number}</label>
                      <input type="checkbox" disabled={!isAvailable(room)} value={room._id} onChange={handleSelect} />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button onClick={handleClick} className="Rbutton">Reserve Now</button>
        </div>
    </div>
  )
}

export default Reserve