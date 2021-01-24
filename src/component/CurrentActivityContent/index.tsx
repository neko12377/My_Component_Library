import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import {activityData} from "./fakeData";
import {Columns} from "./Columns";

export const CurrentActivityContent = () => {
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
                    {Columns(activityData)}
                </tbody>
            </table>
        </section>
    )
}