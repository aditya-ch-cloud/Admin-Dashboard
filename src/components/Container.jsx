import MainContainer from "./MainContainer";
import TopContainer from "./TopContainer";
import "./container.css";

import React from 'react'

function Container() {
    return (
        <div className="container">
            <TopContainer />
            <MainContainer />
        </div>
    )
}

export default Container