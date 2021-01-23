import {MainTitle} from "./component/MainTitle";
import {MainContent} from "./component/MainContent";
import React from "react";
import "./style.scss";

export const Main = () => {
    return (
        <div className="main">
            <MainTitle/>
            <MainContent/>
        </div>
    )
}