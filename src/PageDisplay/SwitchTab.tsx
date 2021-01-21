import React from "react";
import styled from "styled-components";

interface StyledTabPropsInterface {
    backgroundColor: string;
    color: string;
    tabWidth: number;
}

const StyledTab = styled.div<StyledTabPropsInterface>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    width: ${props => props.tabWidth}px;
    height: 100%;
    border-radius: 20px 20px 0 0 ;
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.86);
    margin-right: 3px;
    &:hover {
      cursor: pointer;
      color: white;
    } 
`;

const Favicon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;
`;

interface TabPropsInterface {
    backgroundColor: string;
    color: string;
    tabContents: string[];
    favicon?: boolean;
    tabWidth: number;
}

const Tab = (tabProps: TabPropsInterface) => {
    return tabProps.tabContents.map((tabContent) => {
        return (
            <StyledTab
                backgroundColor={tabProps.backgroundColor}
                color={tabProps.color}
                tabWidth={tabProps.tabWidth}
            >
                {tabProps.favicon && <Favicon />}
                {tabContent}
            </StyledTab>
        )
    })
}


export interface StyledSwitchTabPropsInterface {
    width: number;
    height: number;
    tabNumber: number;
    theme: "light" | "dark";
}

const StyledSwitchTap = styled.div<StyledSwitchTabPropsInterface>`
    display: flex;
    justify-content: flex-start;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

export interface SwitchTabPropsInterface {
    tabProps: {
        width?: number;
        height?: number;
        tabNumber?: number;
        theme?: "light" | "dark";
        backgroundColor?: string;
        color?: string;
        tabContents?: string[];
        favicon?: boolean;
    }
}


export const SwitchTab = ({tabProps}: SwitchTabPropsInterface) => {
    const width = tabProps.width ? tabProps.width : 564;
    const height = tabProps.height ? tabProps.height : 31;
    const tabNumber = tabProps.tabNumber ? tabProps.tabNumber : 4;
    const tabWidth = width / tabNumber;
    const theme = tabProps.theme ? tabProps.theme : "light";
    const backgroundColor = tabProps.backgroundColor ? tabProps.backgroundColor : "rgba(209, 209, 209, 0.1)";
    const color = tabProps.color ? tabProps.color : "#d1d1d1";
    const tabContents = tabProps.tabContents ? tabProps.tabContents : ["ALL", "15MIN", '1HOUR', "1DAY"];
    const favicon = tabProps.favicon ? tabProps.favicon : false;

    return (
        <StyledSwitchTap
            width={width}
            height={height}
            theme={theme}
            tabNumber={tabNumber}
        >
            {Tab ({
                backgroundColor,
                color,
                tabWidth,
                tabContents,
                favicon,
            })}
        </StyledSwitchTap>
    )
}