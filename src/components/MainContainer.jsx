import './mainContainer.css';
import React from 'react'
import Banner from '../img/1.jpg'
import CardMain from './CardMain';
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
import card4 from '../img/card4.jpg'
import card5 from '../img/card5.jpg'
import card6 from '../img/card6.jpg'
import MainRightTop from './MainRightTop';
import MainRightBottom from './MainRightBottom';

function MainContainer() {
    return (
        <div className='mainContainer'>
            <div className="left">
                <div className="banner" style={{
                    background: `url(${Banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"

                }}>
                    <div className="textContainer">
                        <h1>Round Hall</h1>
                        <h2>1.5 ETH</h2>
                        <p>Uploaded By Alexender Vernof</p>
                        <div className='bid'>
                            <a href="localhost:3000" className="button1">
                                Bid Now
                            </a>
                            <p>
                                Ending In <span>2d:15h:20m</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="filters">
                        <div className="popular">
                            <h2>Feed</h2>
                            <a href="localhost:3000" className='button2'>Popular</a>
                        </div>
                        <div className="filter_buttons">
                            <a href="localhost:3000" className="button1">All</a>
                            <a href="localhost:3000" className="button2">Illutrations</a>
                            <a href="localhost:3000" className="button2">Games</a>
                            <a href="localhost:3000" className="button2">Art</a>
                        </div>
                    </div>

                    <main>
                        <CardMain imgSrc={card1} title={"Cubic Thunder"} hearts={"65"}/>
                        <CardMain imgSrc={card2} title={"Pokemon Ball"} hearts={"45"}/>
                        <CardMain imgSrc={card3} title={"Pyramid God"} hearts={"55"}/>
                        <CardMain imgSrc={card4} title={"Stunning Cube"} hearts={"75"}/>
                        <CardMain imgSrc={card5} title={"Star Crystal"} hearts={"35"}/>
                        <CardMain imgSrc={card6} title={"Crystal Bird"} hearts={"85"}/>
                    </main>
                </div>
            </div>
            <div className="right">
                <MainRightTop />
                <MainRightBottom />
            </div>
        </div>
    )
}

export default MainContainer