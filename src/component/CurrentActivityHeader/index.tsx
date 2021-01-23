import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const CurrentActivityHeader = () => {
    return (
        <section className="currentActivity-header">
            <div className="currentActivity-header-title">
                CURRENT ACTIVITY
            </div>
            <div className="currentActivity-header-expandAssetPopUpLink">
                {/*<div className="currentActivity-header-expandAssetPopUpLink-description">*/}
                {/*    View all Trade Actions  <FontAwesomeIcon icon={faSearch}/>*/}
                {/*</div>*/}
                <div className="currentActivity-header-expandAssetPopUpLink-magnifierIcon"></div>
            </div>
        </section>
    )
}