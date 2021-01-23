import React from "react";

export const CurrentActivityHeader = () => {
    return (
        <section className="currentActivity-header">
            <div className="currentActivity-header-title">
                CURRENT ACTIVITY
            </div>
            <div className="currentActivity-header-expandAssetPopUpLink">
                <div className="currentActivity-header-expandAssetPopUpLink-description">
                    View all Trade Actions
                </div>
                <div className="currentActivity-header-expandAssetPopUpLink-magnifierIcon"></div>
            </div>
        </section>
    )
}