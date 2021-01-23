import {MainTitle} from "../MainTitle";
import {MainContent} from "../MainContent";
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