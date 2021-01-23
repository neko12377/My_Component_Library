import React, {useState} from "react";
import styled from "styled-components";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface StyledTabPropsInterface {
    tabWidth: string
}

const StyledTab = styled.div<StyledTabPropsInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.tabWidth};
  height: 30px;
  margin-right: 3px;
  background-color: rgb(38, 44, 57);
  border-radius: 16px 16px 0 0;
  border-right: black solid 1px;
  border-bottom: black solid 1px;

  &:hover {
    cursor: pointer;
`

const FocusedStyledTab = styled(StyledTab)`
  background-color: rgba(30, 30, 35, 0.86);
  box-shadow: -4px -2px 5px 1px rgba(205, 205, 205, 0.36);
`;

interface TabPropsInterface {
    tabWidth: string;
    children: any;
    identity: string;
    onClick: (identity: string) => void;
    currentFocusedTab: string;
}

const Tab = ({tabWidth, children, identity, onClick, currentFocusedTab}: TabPropsInterface) => {

    return (
        identity === currentFocusedTab
            ? (
                <FocusedStyledTab tabWidth={tabWidth}>
                    <div onClick={() => onClick && onClick(identity)}>
                        {children}
                    </div>
                </FocusedStyledTab>
            )
            : (
                <StyledTab tabWidth={tabWidth}>
                    <div onClick={() => onClick && onClick(identity)}>
                        {children}
                    </div>
                </StyledTab>
            )
    )
}

interface TabsPropsInterface {
    tabNumber: number;
    tabTitles: string[];
    onClick: (identity: string) => void;
}

const TabGroup = styled.div.attrs<{
    className: string;
}>({
    className: "tab-group"
})`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 70%;
  height: 100%;
  padding-left: 49px;
`;

export const Tabs = ({tabNumber, tabTitles, onClick}: TabsPropsInterface) => {
    const [currentFocusedTab, setCurrentFocusedTab] = useState<string>(tabTitles[0]);
    const onFocusAndExecuteOnclick = (identity: string) => {
        setCurrentFocusedTab(identity)
        onClick(identity);
    }
    const generateTabs = () => {
        const howMuchTabs = new Array(tabNumber);
        // const tabWidth = (100 / tabNumber) + "%";
        const tabWidth = "300px";

        return Array.from(howMuchTabs,(tab, index) => {
            const identity = tabTitles[index] ? tabTitles[index] : "nothing" + index;
            return (
                <Tab tabWidth={tabWidth} identity={identity} onClick={() => onFocusAndExecuteOnclick(identity)} currentFocusedTab={currentFocusedTab} >
                    <FontAwesomeIcon icon={faClock} />  {tabTitles[index] ? tabTitles[index] : ""}
                </Tab>
            )
        })
    }

    return (
        <TabGroup>
            {generateTabs()}
        </TabGroup>
    )
}