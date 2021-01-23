import * as React from "react";
import { HighLowPage } from "./page/HighLowPage"
import styled from "styled-components";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import "./global.scss";
const StyledBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(35, 35, 45);
`
export const DemoApp = () => {
    return (
        <Provider
            store={store}
        >
            <StyledBackground>
                <HighLowPage />
            </StyledBackground>
        </Provider>
    )
}