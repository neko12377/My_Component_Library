import {MainTitle} from "./component/MainTitle";
import {MainContent} from "./component/MainContent";
import React, {useState} from "react";
import "./style.scss";

export const Main = () => {
    const [highLowMode, setHighLowMode] = useState<boolean>(false);
    const switchHighLowMode = () => {
        setHighLowMode(!highLowMode)
    }
    return (
        <div className="main">
            <MainTitle switchHighLowMode={switchHighLowMode}/>
            <MainContent highLowMode={highLowMode}/>
        </div>
    )
}