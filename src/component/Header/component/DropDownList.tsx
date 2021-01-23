import React, {useState} from "react";
import styled from "styled-components";

const StyledDropDownListBar = styled.div`
  display: flex;
  align-items: center;
  width: 176px;
  height: 36px;
  padding: 8px 0;
  position: relative;
`;

const StyledDropDownBarContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 85%;
  height: 100%;
`;

interface DropDownBarContentPropsInterface {
    content: string;
}

const DropDownListBarContent = ({content}: DropDownBarContentPropsInterface) => {
    const contentToDisplay = content ? content : "ALL Assets";
    return (
        <StyledDropDownBarContent>
            {contentToDisplay}
        </StyledDropDownBarContent>
    )
}

const StyledDropDownListContent = styled.div`
  display: flex;
  position: absolute;
  top: 37px;
  right: -25px;
  width: 600px;
  height: 580px;
  background-color: coral;
`;

interface DropDownListProsInterface {
    onClick: (content: string) => void;
}

export const DropDownList = ({onClick}: DropDownListProsInterface) => {
    const [content, setContent] = useState<string>("");
    const [showDropDownList, setShowDropDownList] = useState<boolean>(false)
    const setContentAndOnClick = (content: string) => {
        setContent(content);
        onClick(content);
    }
    return (
        <StyledDropDownBar>
            <DropDownBarContent content={content} />
            {showDropDownList && <StyledDropDownListContent/>}
        </StyledDropDownBar>
    )
}