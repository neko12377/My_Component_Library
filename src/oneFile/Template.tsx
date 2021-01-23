import React from "react";
import {Tabs} from "./view/Tabs";
import "./style.scss"

export const App = () => {
    return (
        <div className="base">
            <section className="header">
                <div className="header-tabGroup">
                    <Tabs
                        tabNumber={4}
                        tabTitles={["ALL", "15 MIN", "1 HOUR", "1 DAY"]}
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
                        AUD/USD 23h
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
                        AUD/USD 15m
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
                        AUD/USD 1h
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
                        AUD/USD 15m
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
                        AUD/USD 15m
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
                    <div className="main-content-tradeInfo-title"></div>
                    <div className="main-content-tradeInfo-investAmountBar"></div>
                    <div className="main-content-tradeInfo-investAmountOption"></div>
                    <div className="main-content-tradeInfo-utility">
                        <div className="main-content-tradeInfo-utility-highLowButton"></div>
                        <div className="main-content-tradeInfo-utility-investButton"></div>
                    </div>
                    <div className="main-content-tradeInfo-payout"></div>
                    <div className="main-content-tradeInfo-return"></div>
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