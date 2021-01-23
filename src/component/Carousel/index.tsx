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
import {connect} from "react-redux";
import {CarouselItems} from "./CarouselItems";

export const Carousel = () => {
    return (
        <section className="carousel">
            <div className="carousel-arrow">
                <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
            <div className="carousel-demonstrateBlock">
                {
                    CarouselItems({
                        infoArray: [
                            {
                                currency: "AUD/USD",
                                timeInterval: "23h",
                                payout: "Payout",
                                payoutMoney: "$2.00",
                                market: "Market",
                                marketMoney: "112.368",
                                isOpen: true,
                            },
                            {
                                currency: "AUD/USD",
                                timeInterval: "15m",
                                payout: "Payout",
                                payoutMoney: "$3.00",
                                market: "Market",
                                marketMoney: "112.368",
                                isOpen: true,
                            },
                            {
                                currency: "AUD/USD",
                                timeInterval: "1h",
                                payout: "Payout",
                                payoutMoney: "$9.00",
                                market: "Market",
                                marketMoney: "112.368",
                                isOpen: true,
                            },
                            {
                                currency: "AUD/USD",
                                timeInterval: "3h",
                                payout: "Payout",
                                payoutMoney: "$8.00",
                                market: "Market",
                                marketMoney: "112.368",
                                isOpen: true,
                            },
                            {
                                currency: "BBD/USD",
                                timeInterval: "3h",
                                payout: "Payout",
                                payoutMoney: "$90.00",
                                market: "Market",
                                marketMoney: "192.888",
                                isOpen: false,
                            },
                        ],
                    })
                }
            </div>
            <div className="carousel-arrow">
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>

        </section>
    )
}

// const mapStateToProps = (state: any) => {
//     return {
//
//     }
// }
//
// export connect(mapStateToProps)(Carousel);