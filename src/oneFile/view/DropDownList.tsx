import React, {useState} from "react";
import styled from "styled-components";

const StyledDropDownBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 176px;
  height: 36px;
  padding: 8px 13px;
  background-color: #1355d6;
  position: relative;
`;

const StyledDropDownBarContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: burlywood;
  width: 85%;
  height: 100%;
`;

interface DropDownBarContentPropsInterface {
    content: string;
}

const DropDownBarContent = ({content}: DropDownBarContentPropsInterface) => {
    return (
        <StyledDropDownBarContent>
            {content}
        </StyledDropDownBarContent>
    )
}

const StyledDropDownListContent = styled.div`
  display: flex;
  position: absolute;
  width: 600px;
  height: 580px;
  background-color: coral;
`;

interface DropDownListProsInterface {
    onClick: (content: string) => void;
}

export const DropDownList = ({onClick}: DropDownListProsInterface) => {
    const [content, setContent] = useState<string>("");
    const setContentAndOnClick = (content: string) => {
        setContent(content);
        onClick(content);
    }
    return (
        <StyledDropDownBar>
            <DropDownBarContent content={content} />
            <StyledDropDownListContent/>
        </StyledDropDownBar>
    )
}