import React from "react";
import "../../style.scss"
import {Header} from "../../component/Header";
import {Carousel} from "../../component/Carousel";
import {Main} from "../../component/Main";
import {CurrentActivityHeader} from "../../component/CurrentActivityHeader";
import {CurrentActivityContent} from "../../component/CurrentActivityContent";

export const HighLow = () => {
    return (
        <div className="base">
            <Header/>
            <Carousel/>
            <Main/>
            <CurrentActivityHeader/>
            <CurrentActivityContent/>
        </div>
    )
}