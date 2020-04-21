import React from "react";
import Card from '../card/Card';
import './CardList.css';

const CardList = ({ robots })=> {
//   if (true) {
//       throw new Error("hahaha")
//   }
    return (
        <div className="cardList">
        {
        robots.map((users, i) => {
        return (<Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} />)
    })
        }
        </div>
    )
}


export default CardList;