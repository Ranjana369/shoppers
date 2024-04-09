import React from 'react'
import { Carddata } from '../../data/Data';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
  return (
    <div className='Cards'>
      {Carddata.map((card, id)=>{
        return(
          <div className="parentContainer">
            <Card
            title = {card.title}
            color={card.color}
            barValue={card.barValue}
            value = {card.value}
            png = {card.png}
            series = {card.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards;
