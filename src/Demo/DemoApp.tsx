import * as React from "react";
import { Background } from "./Background";
// According the path of App to switch different demo page
import { App } from "../oneFile/Template"
import "./GlobalStyle.scss";


export const DemoApp = () => {
    return (
        <Background>
            <App />
        </Background>
    )
}