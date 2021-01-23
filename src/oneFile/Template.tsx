import React from "react";
import {Tabs} from "./view/Tabs";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const App = () => {
    return (
        <div className="base">
            <section className="header">
                <div className="header-tabGroup">
                    <Tabs
                        tabNumber={5}
                        tabTitles={["ALL", "15 MIN", "1 HOUR", "1 DAY", "FAVORITE"]}
                        onClick={(hello) => {}}
                    />
                </div>
                <div className="header-utilityOptions">
                    <div className="header-utilityOptions-dropDownListLabel">
                        view
                    </div>
                    <div className="header-utilityOptions-dropDownList">
                        <div className="header-utilityOptions-dropDownBar-content">
                            All Assets
                        </div>
                        <div className="header-utilityOptions-dropDownList-arrowToExpand" />
                    </div>
                    <div className="header-utilityOptions-collapseSign"></div>
                </div>
            </section>
            <section className="carousel">
                <div className="carousel-arrow"></div>
                <div className="carousel-infoBlock">
                    <div className="carousel-infoBlock-title">
                        AUD/USD <FontAwesomeIcon icon={faClock} />23h
                    </div>
                    <div className="carousel-infoBlock-info">
                        <div className="carousel-infoBlock-info-mainContent">
                            Trading is closed
                        </div>
                        <div className="carousel-infoBlock-info-subContent">
                            Opening: Monday 06:00 AM
                        </div>
                    </div>
                </div>
                <div className="carousel-infoBlock">
                    <div className="carousel-infoBlock-title">
                        AUD/USD <FontAwesomeIcon icon={faClock} />15m
                    </div>
                    <div className="carousel-infoBlock-info">
                        <div className="carousel-infoBlock-info-mainContent">
                            Trading is closed
                        </div>
                        <div className="carousel-infoBlock-info-subContent">
                            Opening: Monday 06:00 AM
                        </div>
                    </div>
                </div>
                <div className="carousel-infoBlock">
                    <div className="carousel-infoBlock-title">
                        AUD/USD <FontAwesomeIcon icon={faClock} />1h
                    </div>
                    <div className="carousel-infoBlock-info">
                        <div className="carousel-infoBlock-info-mainContent">
                            Trading is closed
                        </div>
                        <div className="carousel-infoBlock-info-subContent">
                            Opening: Monday 06:00 AM
                        </div>
                    </div>
                </div>
                <div className="carousel-infoBlock">
                    <div className="carousel-infoBlock-title">
                        AUD/USD <FontAwesomeIcon icon={faClock} />15m
                    </div>
                    <div className="carousel-infoBlock-info">
                        <div className="carousel-infoBlock-info-mainContent">
                            Trading is closed
                        </div>
                        <div className="carousel-infoBlock-info-subContent">
                            Opening: Monday 06:00 AM
                        </div>
                    </div>
                </div>
                <div className="carousel-infoBlock">
                    <div className="carousel-infoBlock-title">
                        AUD/USD <FontAwesomeIcon icon={faClock} />15m
                    </div>
                    <div className="carousel-infoBlock-info">
                        <div className="carousel-infoBlock-info-mainContent">
                            Trading is closed
                        </div>
                        <div className="carousel-infoBlock-info-subContent">
                            Opening: Monday 06:00 AM
                        </div>
                    </div>
                </div>
                <div className="carousel-arrow"></div>

            </section>
            <section className="main-title">
                <div className="main-title-leftSide">
                    <div className="main-title-currencyType">
                        Gold
                    </div>
                    <div className="main-title-riseDeclineArrow"></div>
                    <div className="main-title-currencyNum">
                        1234.72
                    </div>
                </div>
                <div className="main-title-rightSide">
                    <div className="main-title-endTime">
                        <div className="main-title-banSign"></div>
                        12:00
                    </div>
                    <div className="main-title-restTime">
                        <div className="main-title-clockSign"></div>
                        7:25:42
                    </div>
                    <div className="main-title-oneClickTrading"></div>
                </div>
            </section>
            <section className="main-content-block">
                <div className="main-content-tradeBar"></div>
                <div className="main-content-canvas"></div>
                <div className="main-content-tradeInfo">
                    <div className="main-content-tradeInfo-title">
                        GOLD
                    </div>
                    <div className="main-content-tradeInfo-investAmountBar">
                        $500
                    </div>
                    <div className="main-content-tradeInfo-investAmountOption">
                        <div className="main-content-tradeInfo-investAmountOption-Button">
                            $50
                        </div>
                        <div className="main-content-tradeInfo-investAmountOption-Button">
                            $100
                        </div>
                        <div className="main-content-tradeInfo-investAmountOption-Button-Focused">
                            $500
                        </div>
                    </div>
                    <div className="main-content-tradeInfo-utility">
                        <div className="main-content-tradeInfo-utility-highLowButton">
                            <div className="main-content-tradeInfo-utility-highLowButton-high">
                                HIGH
                            </div>
                            <div className="main-content-tradeInfo-utility-highLowButton-low">
                                LOW
                            </div>
                        </div>
                        <div className="main-content-tradeInfo-utility-investButton">
                            Invest
                        </div>
                    </div>
                    <div className="main-content-tradeInfo-payout">
                        <div>Payout</div>
                        <div>$1.85</div>
                    </div>
                    <div className="main-content-tradeInfo-return">
                        <div>Return</div>
                        <div>$925.00</div>
                    </div>
                </div>
            </section>
            <section className="currentActivity-header">
                <div className="currentActivity-header-title">
                    CURRENT ACTIVITY
                </div>
                <div className="currentActivity-header-expandAssetPopUpLink">
                    <div className="currentActivity-header-expandAssetPopUpLink-description">
                        View all Trade Actions
                    </div>
                    <div className="currentActivity-header-expandAssetPopUpLink-magnifierIcon"></div>
                </div>
            </section>
            <section className="currentActivity-content"></section>
        </div>
    )
}