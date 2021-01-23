import {Tabs} from "./component/Tabs";
import {DropDownList} from "./component/DropDownList";
import {CollapseSign} from "./component/CollapseSign";
import React from "react";

import "./style.scss";
import {CarouselItems} from "../Carousel/CarouselItems";

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
                    <DropDownList
                        onSelected={(content: string) => {}}
                        menuItems={[
                            {title: "E", catalogue: "8", contentItems: ["fdjlk", "sijfla", "jfaij"]},
                            {title: "F", catalogue: "9", contentItems: ["))))", "*****", "%%%%%"]},
                            {title: "G", catalogue: "10", contentItems: ["$$$$", "####", "@@@@"]}
                        ]}
                    />
                    {/*<div className="header-utilityOptions-dropDownList-arrowToExpand" />*/}
                </div>
               <CollapseSign />
            </div>
        </section>
    )
}