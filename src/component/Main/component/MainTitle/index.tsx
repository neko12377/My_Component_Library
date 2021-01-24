import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleUp, faExchangeAlt, faHistory, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./style.scss";

interface MainTitlePropsInterface {
    switchHighLowMode: () => void;
}

export const MainTitle = ({switchHighLowMode}: MainTitlePropsInterface) => {
    return (
        <section className="main-title">
            <div className="main-title-leftSide">
                <div className="main-title-currencyType">
                    Gold
                </div>
                <div className="main-title-riseDeclineArrow">
                    <FontAwesomeIcon icon={faAngleDoubleUp}/>
                </div>
                <div className="main-title-currencyNum">
                    1234.72
                </div>
            </div>
            <div className="main-title-rightSide">
                <div className="main-title-endTime">
                    <div className="main-title-banSign">
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </div>
                    12:00
                </div>
                <div className="main-title-restTime">
                    <div className="main-title-clockSign">
                        <FontAwesomeIcon icon={faHistory}/>
                    </div>
                    7:25:42
                </div>
                <div className="main-title-oneClickTrading" onClick={() => switchHighLowMode()}>
                    <FontAwesomeIcon icon={faExchangeAlt} />
                </div>
            </div>
        </section>
    )
}