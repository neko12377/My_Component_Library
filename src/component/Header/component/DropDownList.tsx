import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import * as styleC from "./DropDownListStyledComponent"

interface DropDownBarContentPropsInterface {
    content: string;
}

const DropDownListBarContent = ({content}: DropDownBarContentPropsInterface) => {
    const contentToDisplay = content ? content : "ALL Assets";
    return (
        <styleC.StyledDropDownBarContent>
            {contentToDisplay}
        </styleC.StyledDropDownBarContent>
    )
}

interface DropDownListContentBlockPropsInterface {
    currentPickedContent: string;
    menuItems: { title: string, catalogue: string, contentItems: string[] }[];
    onSelected: (selectedContent: string) => void;
    showDropDownList: () => void;
}
const DropDownListContentBlock = ({currentPickedContent, menuItems, onSelected, showDropDownList}: DropDownListContentBlockPropsInterface) => {
    const [currentCatalogue, setCurrentCatalogue] = useState<string>(menuItems[0] ? menuItems[0].catalogue : "");
    const [currentTitle, setCurrentTitle] = useState<string>(menuItems[0] ? menuItems[0].title : "");
    const selectCatalogue= (currentCatalogue: string, currentTitle: string) => {
       setCurrentCatalogue(currentCatalogue);
       setCurrentTitle(currentTitle);
    }
    const menu = menuItems.map((item) => {
        return (
                <styleC.ListMenuItem onClick={() => selectCatalogue(item.catalogue, item.title)}>
                    {item.catalogue}
                </styleC.ListMenuItem>
        )
    })

    const contentList = menuItems.map((item) => {
        if (item.catalogue === currentCatalogue) {
            return item.contentItems.map((item) => {
                return currentPickedContent === item
                    ? (
                        <styleC.ListContent onClick={() => onSelected(item)}>
                            {item + "_SELECTED"}
                        </styleC.ListContent>
                    )
                    : (
                        <styleC.ListContent onClick={() => onSelected(item)}>
                            {item}
                        </styleC.ListContent>
                    )
            })
        }

    })

    return (
        <>
            <styleC.Shelter onClick={showDropDownList} />
            <styleC.StyledDropDownListContentBlock>
                <styleC.DropDownListMenu>
                    <styleC.ListMenuTitle>
                        {currentTitle}
                    </styleC.ListMenuTitle>
                    {menu}
                </styleC.DropDownListMenu>
                <styleC.DropDownListContent>
                    <styleC.ListContentTitle>
                        999xiA
                    </styleC.ListContentTitle>
                    {contentList}
                </styleC.DropDownListContent>
            </styleC.StyledDropDownListContentBlock>
        </>

    )
}

interface DropDownListProsInterface {
    onSelected: (selectedContent: string) => void;
    menuItems: { title: string, catalogue: string, contentItems: string[]}[];
}

export const DropDownList = ({onSelected, menuItems}: DropDownListProsInterface) => {
    const [currentPickedContent, setCurrentPickedContent] = useState<string>("");
    const [isShowDropDownList, setIsShowDropDownList] = useState<boolean>(false);
    const setContentAndOnClick = (selectedContent: string) => {
        setCurrentPickedContent(selectedContent);
        onSelected(selectedContent);
    }

    const showDropDownList = () => {
        setIsShowDropDownList(!isShowDropDownList);
    }

    return (
        <styleC.StyledDropDownListBar>
            <DropDownListBarContent content={currentPickedContent} />
            {
                isShowDropDownList
                    && <DropDownListContentBlock
                            currentPickedContent={currentPickedContent}
                            onSelected={setContentAndOnClick}
                            menuItems={menuItems}
                            showDropDownList={showDropDownList}
                        />
            }
            <styleC.IconWrapper onClick={() => showDropDownList()}>
                <FontAwesomeIcon icon={faChevronDown} />
            </styleC.IconWrapper>
        </styleC.StyledDropDownListBar>
    )
}