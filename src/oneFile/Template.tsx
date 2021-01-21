import React from "react";
import "./style.scss"

export const App = () => {
    return (
        <div className="base">
            <section className="sectionOne">
                <div className="tabGroup">
                    <div className="tab">
                        ALL
                    </div>
                    <div className="tab">
                        15 MIN
                    </div>
                    <div className="tab">
                        1 HOUR
                    </div>
                    <div className="tab">
                        1 DAY
                    </div>
                </div>
                <div className="optionGroup">
                    <div className="view">
                        view
                    </div>
                    <div className="assetsSelector">
                        <div className="assetContent">
                            All Assets
                        </div>
                        <div className="downArrow" />
                    </div>
                    <div className="operator"></div>
                </div>
            </section>
            <section className="sectionTwo">
                <div className="arrow"></div>
                <div className="infoBlock">
                    <div className="currency"></div>
                    <div className="currencyNumber"></div>
                </div>
                <div className="infoBlock">
                    <div className="currency"></div>
                    <div className="currencyNumber"></div>
                </div>
                <div className="infoBlock">
                    <div className="currency"></div>
                    <div className="currencyNumber"></div>
                </div>
                <div className="infoBlock">
                    <div className="currency"></div>
                    <div className="currencyNumber"></div>
                </div>
                <div className="infoBlock">
                    <div className="currency"></div>
                    <div className="currencyNumber"></div>
                </div>
                <div className="arrow"></div>

            </section>
            <section className="sectionThree">
                <div className="main-title-leftSide">
                    <div className="main-title-currencyType"></div>
                    <div className="main-title-riseDeclineArrow"></div>
                    <div className="main-title-currencyNum"></div>
                </div>
                <div className="main-title-rightSide">
                    <div className="main-title-endTime">
                        <div className="main-title-banSign"></div>
                    </div>
                    <div className="main-title-restTime">
                        <div className="main-title-clockSign"></div>
                    </div>
                    <div className="main-title-oneClickTrading"></div>
                </div>
            </section>
            <section className="main-content-block"></section>
            <section className="sectionFive"></section>
            <section className="sectionSix"></section>
        </div>
    )
}