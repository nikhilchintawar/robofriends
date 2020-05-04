import React from 'react';
import "./card.css";

const Card = ({name, email, id}) => {
        return(
            <div className="card">
                <img src={`https://robohash.org/${id}?200×200`} alt="test" width="250px" height="250px"/>
                <div className="info">
                    <h2>{name}</h2>
                    <p className="email">{email}</p>
                </div>
            </div>
        )
    }

export default Card;