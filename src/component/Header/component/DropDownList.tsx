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

const StyledDropDownListContentBlock = styled.div`
  display: flex;
  position: absolute;
  top: 37px;
  right: -25px;
  width: 600px;
  height: 580px;
  background-color: coral;
`;

const DropDownListMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: crimson;
  width: 45%;
  height: 100%;
`;

const DropDownListContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
  width: 55%;
  height: 100%;
`;

const ListMenuTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: saddlebrown 2px solid;
  width: 100%;
  height: 100px;
  padding-left: 5px; 
`;

const ListMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 70px;
  border: 1px solid black;
  cursor: pointer;
`;

const ListContentTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: saddlebrown 2px solid;
  width: 100%;
  height: 100px;
  padding-left: 5px;
`;

const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  height: 70px;
  border: 2px solid saddlebrown;
  cursor: pointer;
  
`;

interface DropDownListContentBlockPropsInterface {
    currentPickedContent: string;
    menuItems: { title: string, catalogue: string, contentItems: string[]}[];
    onSelected: (selectedContent: string) => void;
}

const DropDownListContentBlock = ({currentPickedContent, menuItems, onSelected}: DropDownListContentBlockPropsInterface) => {
    const [currentCatalogue, setCurrentCatalogue] = useState<string>(menuItems[0] ? menuItems[0].catalogue : "");
    const [currentTitle, setCurrentTitle] = useState<string>(menuItems[0] ? menuItems[0].title : "")
    const selectCatalogue= (currentCatalogue: string, currentTitle: string) => {
       setCurrentCatalogue(currentCatalogue);
       setCurrentTitle(currentTitle);
    }
    const menu = menuItems.map((item) => {
        return (
                <ListMenuItem onClick={() => selectCatalogue(item.catalogue, item.title)}>
                    {item.catalogue}
                </ListMenuItem>
        )
    })

    const contentList = menuItems.map((item) => {
        if (item.catalogue === currentCatalogue) {
            return item.contentItems.map((item) => {
                return currentPickedContent === item
                    ? (
                        <ListContent onClick={() => onSelected(item)}>
                            {item + "SELECTED"}
                        </ListContent>
                    )
                    : (
                        <ListContent onClick={() => onSelected(item)}>
                            {item}
                        </ListContent>
                    )
            })
        }

    })

    return (
        <StyledDropDownListContentBlock>
            <DropDownListMenu>
                <ListMenuTitle>
                    {currentTitle}
                </ListMenuTitle>
                {menu}
            </DropDownListMenu>
            <DropDownListContent>
                <ListContentTitle>
                    999xiA
                </ListContentTitle>
                {contentList}
            </DropDownListContent>
        </StyledDropDownListContentBlock>
    )
}

interface DropDownListProsInterface {
    onSelected: (selectedContent: string) => void;
    menuItems: { title: string, catalogue: string, contentItems: string[]}[];
}

export const DropDownList = ({onSelected, menuItems}: DropDownListProsInterface) => {
    const [currentPickedContent, setCurrentPickedContent] = useState<string>("");
    const [showDropDownList, setShowDropDownList] = useState<boolean>(true)
    const setContentAndOnClick = (selectedContent: string) => {
        setCurrentPickedContent(selectedContent);
        onSelected(selectedContent);
    }
    return (
        <StyledDropDownListBar>
            <DropDownListBarContent content={currentPickedContent} />
            {
                showDropDownList
                    && <DropDownListContentBlock
                            currentPickedContent={currentPickedContent}
                            onSelected={setContentAndOnClick}
                            menuItems={menuItems}
                        />
            }
        </StyledDropDownListBar>
    )
}