import * as React from "react";
import styled from "styled-components";

interface StyledBackgroundPropsInterface {
    theme: "light" | "dark";
}

const StyledBackground = styled.div<StyledBackgroundPropsInterface>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(35, 35, 45);
  // test
`

interface BackgroundPropsInterface {
    children: React.ReactNode;
}

export const Background = ({children}: BackgroundPropsInterface) => {
    return (
        <StyledBackground>
            {children}
        </StyledBackground>
    )
}