import * as React from "react";
import { HighLow } from "./page/HIghlow/HIghlow"
import styled from "styled-components";

const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(35, 35, 45);
`
export const DemoApp = () => {
    return (
        <StyledBackground>
            <HighLow />
        </StyledBackground>
    )
}