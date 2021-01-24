import React, {useState} from "react";
import "./style.scss";
import {activityData} from "./fakeData";
import {Columns} from "./Columns";
import {TakePayoutPopOut} from "./TakePayoutPopOut";

const payoutInfo = {
    currency: "USD/JPY",
    currencyAmount: 118.946,
    isUp: true,
    strike: 118.627,
    strikeIsUp: false,
    investment: "$500",
    returnRate: 0.065,
    payout: "$32.50",
}

export const CurrentActivityContent = () => {
    const [showPopUp, setShowPopUp] = useState<boolean>(false);
    const popUp = () => {
        setShowPopUp(!showPopUp);
    }
    return (
        <section className="currentActivity-content">
            <table>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Asset</th>
                    <th>Strike</th>
                    <th>Start time</th>
                    <th>Expiry</th>
                    <th>Status</th>
                    <th>Closing Rate</th>
                    <th>Investment</th>
                    <th>Payout</th>
                    <th>Take Payout</th>
                </tr>
                </thead>
                <tbody>
                    {Columns({activityData, popUp})}
                </tbody>
            </table>
            {showPopUp && TakePayoutPopOut({payoutInfo, popUp})}
        </section>
    )
}