import React from "react";
import "./style.scss";
import {TradeInfo} from "./TradeInfo";

interface MainContentPropsInterface {
    highLowMode: boolean;
}

export const MainContent = ({highLowMode}: MainContentPropsInterface) => {
    return (
        <section className="main-content-block">
            <div className="main-content-tradeBar"></div>
            <div className="main-content-canvas"></div>
            <TradeInfo investOptions={["50", "100", "500"]} highLowMode={highLowMode} />
        </section>
    )
}