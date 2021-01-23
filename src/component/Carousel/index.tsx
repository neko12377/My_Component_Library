import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleDown,
    faAngleDoubleUp,
    faChevronLeft,
    faChevronRight,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./style.scss";

export const Carousel = () => {
    return (
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
    )
}