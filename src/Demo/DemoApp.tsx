import * as React from "react";
import { Background } from "./Background";
import { App } from "../oneFile/Template"
import "./GlobalStyle.scss";


export const DemoApp = () => {
    return (
        <Background>
            <App />
        </Background>
    )
}