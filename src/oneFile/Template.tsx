import React from "react";
import {Tabs} from "./view/Tabs";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faAngleDoubleUp, faAngleDoubleDown, faChevronLeft, faChevronRight, faTimesCircle, faHistory, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

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
                <div className="carousel-arrow">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                <div className="carousel-infoBlock">
                    <div className="carousel-infoBlock-title">
                        AUD/USD <FontAwesomeIcon icon={faClock} />23h
                    </div>
                    <div className="carousel-infoBlock-info">
                        {true ? (
                            <div className="carousel-infoBlock-info-container">
                                <div className="carousel-infoBlock-info-header">
                                    <div className="left-section">
                                        <div className="left-title">Payout</div>
                                        <div className="left-money">$2.00</div>
                                    </div>
                                    <div className="right-section">
                                        <div className="right-title">Market</div>
                                        <div className="right-number">
                                            <FontAwesomeIcon icon={faAngleDoubleDown}/> 112.368
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-infoBlock-info-footer">
                                    <div className="close">Closing: 18:10</div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="carousel-infoBlock-info-mainContent">
                                    Trading is closed
                                </div>
                                <div className="carousel-infoBlock-info-subContent">
                                    Opening: Monday 06:00 AM
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="carousel-infoBlock">
                    <div className="carousel-infoBlock-title">
                        AUD/USD <FontAwesomeIcon icon={faClock} />15m
                    </div>
                    <div className="carousel-infoBlock-info">
                        {true ? (
                            <div className="carousel-infoBlock-info-container">
                                <div className="carousel-infoBlock-info-header">
                                    <div className="left-section">
                                        <div className="left-title">Payout</div>
                                        <div className="left-money">$2.00</div>
                                    </div>
                                    <div className="right-section">
                                        <div className="right-title">Market</div>
                                        <div className="right-number">
                                            <FontAwesomeIcon icon={faAngleDoubleUp}/> 112.368
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-infoBlock-info-footer">
                                    <div className="close">Closing: 18:10</div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="carousel-infoBlock-info-mainContent">
                                    Trading is closed
                                </div>
                                <div className="carousel-infoBlock-info-subContent">
                                    Opening: Monday 06:00 AM
                                </div>
                            </>
                        )}
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
                <div className="carousel-arrow">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>

            </section>
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
                    <div className="main-title-oneClickTrading">
                        <FontAwesomeIcon icon={faExchangeAlt}/>
                    </div>
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