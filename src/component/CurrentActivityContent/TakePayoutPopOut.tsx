import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Shelter = styled.div`
  width: 150%;
  height: 100%;
  position: fixed;
  top: 0;
  left: ${-window.innerWidth / 8}px;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 999;
`;

interface TakePayoutPopOutPropsInterface {
    payoutInfo: {
        currency: string;
        currencyAmount: number;
        isUp: boolean;
        strike: number;
        strikeIsUp: boolean;
        investment: string;
        returnRate: number;
        payout: string;
    };
    popUp: () => void;
}

export const TakePayoutPopOut = ({payoutInfo, popUp}: TakePayoutPopOutPropsInterface) => {
    return (
        <>
            <Shelter onClick={popUp}/>
            <div className="takePayoutPopOut">
                <div className="takePayoutPopOut-title">
                    TAKE PAYOUT
                    <div className="takePayoutPopOut-title-closeSign">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <div className="takePayoutPopOut-body">
                    <div className="takePayoutPopOut-body-title">
                        <div className="takePayoutPopOut-body-title-name">
                            {payoutInfo.currency}
                        </div>
                        <div className="takePayoutPopOut-body-title-number">
                            {
                                payoutInfo.isUp
                                    ? (<FontAwesomeIcon icon={faChevronUp} color="red" />)
                                    : (<FontAwesomeIcon icon={faChevronDown} color="lightgreen" />)
                            }
                            <div className="takePayoutPopOut-body-title-number-number">
                                {payoutInfo.currencyAmount}
                            </div>
                        </div>
                    </div>
                    <div className="takePayoutPopOut-body-body">
                        <div className="takePayoutPopOut-body-body-column">
                            Strike
                            <div>
                                {
                                    payoutInfo.strikeIsUp
                                        ? (
                                            <div className="takePayoutPopOut-body-body-strikeColumn-number">
                                                <FontAwesomeIcon icon={faChevronUp} color="red" />
                                                <div>
                                                    {payoutInfo.strike}
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div className="takePayoutPopOut-body-body-strikeColumn">
                                                <FontAwesomeIcon icon={faChevronDown} color="lightgreen" />
                                                <div className="takePayoutPopOut-body-body-strikeColumn-number">
                                                    {payoutInfo.strike}
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                        <div className="takePayoutPopOut-body-body-column">
                            Investment
                            <div>
                                {payoutInfo.investment}
                            </div>
                        </div>
                        <div className="takePayoutPopOut-body-body-column">
                            Return rate
                            <div>
                                {payoutInfo.returnRate}
                            </div>
                        </div>
                        <div className="takePayoutPopOut-body-body-column">
                            Payout
                            <div>
                                {payoutInfo.payout}
                            </div>
                        </div>
                    </div>
                    <div className="takPayOut-body-button">
                        SELL
                    </div>
                </div>
            </div>
        </>
    )
}