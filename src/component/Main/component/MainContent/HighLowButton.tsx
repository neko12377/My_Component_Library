import React, {useState} from "react";
import styled from "styled-components";

interface HighLowButtonBlockPropsInterface {
    highLowMode: boolean;
}

const HighLowButtonBlock = styled.div<HighLowButtonBlockPropsInterface>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.highLowMode ? 100 : 50}%;
  height: 68px;
  margin-right: ${props => props.highLowMode ? 0 : 10}px;
`

interface HighLowButtonPropsInterface {
    highLowMode?: boolean;
}

export const HighLowButton = ({highLowMode}: HighLowButtonPropsInterface) => {
    const [highLowState, setHighLowState] = useState<string>("");

    const switchToHigh = () => {
        if (highLowState === "high") return;
        setHighLowState("high");
    }

    const switchToLow = () => {
        if (highLowState === "low") return;
        setHighLowState("low");
    }

    return (
        // <div className="main-content-tradeInfo-utility-highLowButton">
        <HighLowButtonBlock highLowMode={highLowMode as boolean}>
            {highLowState === "high" || highLowState === ""
                ? (
                    <div className="main-content-tradeInfo-utility-highLowButton-high" onClick={() => switchToHigh()}>
                        HIGH
                    </div>
                ) : (
                    <div className="main-content-tradeInfo-utility-highLowButton-disabled" onClick={() => switchToHigh()}>
                        HIGH
                    </div>
                )
            }
            {highLowState === "low" || highLowState === ""
                ? (
                    < div className="main-content-tradeInfo-utility-highLowButton-low" onClick={() => switchToLow()}>
                        LOW
                    </div>
                ) : (
                    < div className="main-content-tradeInfo-utility-highLowButton-disabled" onClick={() => switchToLow()}>
                        LOW
                    </div>
                )
            }
        </HighLowButtonBlock>
    )
}