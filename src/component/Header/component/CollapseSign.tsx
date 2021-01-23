import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

export const CollapseSign = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
    const extendOrCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <div className="header-utilityOptions-collapseSign" onClick={() => extendOrCollapse()}>
            {isCollapsed ? <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/>}
        </div>
    )
}