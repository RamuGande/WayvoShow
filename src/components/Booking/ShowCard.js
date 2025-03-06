import React from 'react';
import './showcard.css';
const ShowCard = ({ show, onClick }) => {
    return (
        <div className="show-card" onClick={onClick}>
            <h3>{show.theatre}</h3>
            <p>Show Time: {show.showTime}</p>
            <p>Date: {show.date}</p>
        </div>
    );
};

export default ShowCard;
