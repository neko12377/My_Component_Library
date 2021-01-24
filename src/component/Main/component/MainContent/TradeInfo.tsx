import React, {useEffect, useState} from "react";
import {InvestOptionButton} from "./InvestOptionButton";
import {HighLowButton} from "./HighLowButton";

export interface TradeInfoPropsInterface {
    investOptions: string[];
    highLowMode?: boolean;
}

export const TradeInfo = ({investOptions, highLowMode}: TradeInfoPropsInterface) => {
    const [amountReadyToInvest, setAmountReadyToInvest] = useState<string>("0");
    const chooseAmount = (option: string) => {
        setAmountReadyToInvest(option);
    }

    return (
        <div className="main-content-tradeInfo">
            <div className="main-content-tradeInfo-title">
                GOLD
            </div>
            <InvestOptionButton investOptions={investOptions} amountReadyToInvest={amountReadyToInvest} chooseAmount={chooseAmount} />
            {
               highLowMode
                   ? (
                       <div className="main-content-tradeInfo-utility">
                           <HighLowButton highLowMode={highLowMode}/>
                       </div>
                   ) : (
                       <div className="main-content-tradeInfo-utility">
                           <HighLowButton/>
                           <div className="main-content-tradeInfo-utility-investButton">
                               Invest
                           </div>
                       </div>
                   )

            }
            <div className="main-content-tradeInfo-payout">
                <div>Payout</div>
                <div>$1.85</div>
            </div>
            <div className="main-content-tradeInfo-return">
                <div>Return</div>
                <div>$925.00</div>
            </div>
        </div>
    )
}