import {Tabs} from "./component/Tabs";
import {DropDownList} from "./component/DropDownList";
import React from "react";

import "./style.scss";

export const Header = () => {
    return (
        <section className="header">
            <div className="header-tabGroup">
                <Tabs
                    tabNumber={4}
                    tabTitles={["ALL", "15 MIN", "1 HOUR", "1 DAY"]}
                    onClick={(hello) => {}}
                />
            </div>
            <div className="header-utilityOptions">
                <div className="header-utilityOptions-dropDownListLabel">
                    view
                </div>
                <div className="header-utilityOptions-dropDownList">
                    <DropDownList onClick={(content) => {console.log(content)}} />
                    {/*<div className="header-utilityOptions-dropDownBar-content">*/}
                    {/*    All Assets*/}
                    {/*</div>*/}
                    <div className="header-utilityOptions-dropDownList-arrowToExpand" />
                </div>
                <div className="header-utilityOptions-collapseSign"></div>
            </div>
        </section>
    )
}