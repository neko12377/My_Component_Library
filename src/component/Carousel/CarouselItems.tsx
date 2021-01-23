import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faClock} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface CarouselItemHeaderPropsInterface {
    currency: string;
    timeInterval: string;
    payout: string;
    payoutMoney: string;
    market: string;
    marketMoney: string;
    isOpen: boolean;
}

interface InfoBlockBackgroundPropsInterfacd {
    isFocused: boolean;
}

const InfoBlockBackground = styled.div<InfoBlockBackgroundPropsInterfacd>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-width: 20%;
  height: 100%;
  background-color: ${ props => props.isFocused ?" rgb(250, 220, 88)" : "none"};
  border-radius: 4px;
  cursor: pointer;
`

const CarouselItem = ({currency, timeInterval, payout, payoutMoney, market, marketMoney, isOpen}: CarouselItemHeaderPropsInterface) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const switchFocusedStatus = () => {
        setIsFocused(!isFocused);
    }
    return (
        <InfoBlockBackground isFocused={isFocused} onClick={() => switchFocusedStatus()}>
            <div className="carousel-infoBlock">
            <div className="carousel-infoBlock-title">
                {currency} <FontAwesomeIcon icon={faClock} /> {timeInterval}
            </div>
            <div className="carousel-infoBlock-info">
                {isOpen ?
                    (
                        <div className="carousel-infoBlock-info-container">
                            <div className="carousel-infoBlock-info-header">
                                <div className="left-section">
                                    <div className="left-title">{payout}</div>
                                    <div className="left-money">{payoutMoney}</div>
                                </div>
                                <div className="right-section">
                                    <div className="right-title">{market}</div>
                                    <div className="right-number">
                                        <FontAwesomeIcon icon={faAngleDoubleDown}/> {marketMoney}
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-infoBlock-info-footer">
                                <div className="close">Closing: 18:10</div>
                            </div>
                        </div> ) : (
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
        </InfoBlockBackground>
    )
}

interface CarouselItemsPropsInterface {
    infoArray: {
        currency: string;
        timeInterval: string;
        payout: string;
        payoutMoney: string;
        market: string;
        marketMoney: string;
        isOpen: boolean;
    }[];
}

export const CarouselItems = ({infoArray}: CarouselItemsPropsInterface) => {
    return infoArray.map((info, index) => {
        return (
            <CarouselItem
                currency={info.currency}
                timeInterval={info.timeInterval}
                payout={info.payout}
                payoutMoney={info.payoutMoney}
                market={info.market}
                marketMoney={info.marketMoney}
                isOpen={info.isOpen}
                key={info.currency + "_" + index}
            />
        )
    })
}