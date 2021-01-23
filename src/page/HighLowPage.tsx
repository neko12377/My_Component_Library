import React from "react";
import "../global.scss"
import {Header} from "../component/Header";
import {Carousel} from "../component/Carousel";
import {Main} from "../component/Main";
import {CurrentActivityHeader} from "../component/CurrentActivityHeader";
import {CurrentActivityContent} from "../component/CurrentActivityContent";
import {infoArray} from "../component/Carousel/fakeData";

export const HighLowPage = () => {
    return (
        <div className="base">
            <Header/>
            <Carousel infoArray={infoArray}/>
            <Main/>
            <CurrentActivityHeader/>
            <CurrentActivityContent/>
        </div>
    )
}