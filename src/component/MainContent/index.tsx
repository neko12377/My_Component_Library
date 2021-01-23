import React from "react";
import "./style.scss";

export const MainContent = () => {
    return (
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
    )
}