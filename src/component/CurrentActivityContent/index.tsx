import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
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
                <tr>
                    <td className="coin">
                        <FontAwesomeIcon icon={faCoins}/>
                    </td>
                    <td>USD/JPY</td>
                    <td className="strike">
                        <FontAwesomeIcon icon={faAngleDoubleDown}/>  <span className="strike-money">118.629</span>
                    </td>
                    <td>20:47</td>
                    <td>21:00</td>
                    <td>Opened</td>
                    <td>-</td>
                    <td>$500</td>
                    <td>$500</td>
                    <td>
                        <button>Sell</button>
                    </td>
                </tr>
                <tr>
                    <td className="coin">
                        <FontAwesomeIcon icon={faCoins}/>
                    </td>
                    <td>USD/JPY</td>
                    <td className="strike">
                        <FontAwesomeIcon icon={faAngleDoubleDown}/>  <span className="strike-money">118.629</span>
                    </td>
                    <td>20:47</td>
                    <td>21:00</td>
                    <td>Opened</td>
                    <td>-</td>
                    <td>$500</td>
                    <td>$500</td>
                    <td>
                        <button>Sell</button>
                    </td>
                </tr>
                <tr>
                    <td className="coin">
                        <FontAwesomeIcon icon={faCoins}/>
                    </td>
                    <td>USD/JPY</td>
                    <td className="strike">
                        <FontAwesomeIcon icon={faAngleDoubleDown}/>  <span className="strike-money">118.629</span>
                    </td>
                    <td>20:47</td>
                    <td>21:00</td>
                    <td>Opened</td>
                    <td>-</td>
                    <td>$500</td>
                    <td>$500</td>
                    <td>
                        <button>Sell</button>
                    </td>
                </tr>
                <tr>
                    <td className="coin">
                        <FontAwesomeIcon icon={faCoins}/>
                    </td>
                    <td>USD/JPY</td>
                    <td className="strike">
                        <FontAwesomeIcon icon={faAngleDoubleDown}/>  <span className="strike-money">118.629</span>
                    </td>
                    <td>20:47</td>
                    <td>21:00</td>
                    <td>Opened</td>
                    <td>-</td>
                    <td>$500</td>
                    <td>$500</td>
                    <td>
                        <button>Sell</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    )
}