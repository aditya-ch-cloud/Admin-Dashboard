import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
function CardMain({ imgSrc, title, hearts }) {
    return (
        <div className='cardMain'>
            <img src={imgSrc} alt='' />
            <div className='cardMainName'>
                <h2>{title}</h2>
                <div className="cardIcon">
                    <i><BsHeartFill /> <span>{hearts}</span></i>
                </div>
            </div>
            <div className="stats">
                <p>Current Bid <span>1.2 ETH</span></p>
                <p>Ending In <span>1d:12h:10m</span></p>
            </div>
            <div className="cardButton">
                <a href="localhost:3000" className="button1 btn">Place a Bid</a>
                <a href="localhost:3000" className="button2 btn">History</a>
            </div>
        </div>
    )
}

export default CardMain