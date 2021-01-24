import React from "react";

interface InvestOptionButton {
    investOptions: string[];
    amountReadyToInvest: string;
    chooseAmount: (option: string) => void;
}

export const InvestOptionButton = ({investOptions, amountReadyToInvest, chooseAmount}: InvestOptionButton) => {
    const buttonGroup = () => {
        return investOptions.map((option, index) => {
            if (amountReadyToInvest === option) {
                return (
                    <div
                        className="main-content-tradeInfo-investAmountOption-Button-Focused"
                        key={option + "_" + index}
                        onClick={() => {chooseAmount(option)}}
                    >
                        ${option}
                    </div>
                )
            }
            return (
                <div
                    className="main-content-tradeInfo-investAmountOption-Button"
                    key={option + "_" + index}
                    onClick={() => {chooseAmount(option)}}
                >
                    ${option}
                </div>
            )
        })
    }
    return (
        <>
            <div className="main-content-tradeInfo-investAmountBar">
                ${amountReadyToInvest}
            </div>
            <div className="main-content-tradeInfo-investAmountOption">
                {buttonGroup()}
            </div>
        </>
    )
}