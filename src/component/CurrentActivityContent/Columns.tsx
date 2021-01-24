import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faCoins, faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";

interface ColumnPropsInterface {
    activityData: {
        asset: string;
        strike: number;
        startTime: string;
        expiry: string;
        status: string;
        closingRate: string;
        investment: string;
        payOut: string;
        isUp: boolean;
        takePayout: string;
    };
    popUp: () => void;
}

const Column = ({activityData, popUp}: ColumnPropsInterface) => {
    return (
        <tr>
            <td className="coin">
                <FontAwesomeIcon icon={faCoins}/>
            </td>
            <td>{activityData.asset}</td>
            <td className="strike">
                {
                    activityData.isUp
                        ? (<FontAwesomeIcon icon={faAngleDoubleUp} color="red" />)
                        : (<FontAwesomeIcon icon={faAngleDoubleDown} color="lightgreen" />)
                }
                <span className="strike-money">{activityData.strike}</span>
            </td>
            <td>{activityData.startTime}</td>
            <td>{activityData.expiry}</td>
            <td>{activityData.status}</td>
            <td>{activityData.closingRate}</td>
            <td>{activityData.investment}</td>
            <td>{activityData.payOut}</td>
            <td>
                <button onClick={popUp}>{activityData.takePayout}</button>
            </td>
        </tr>
    )
}

interface ActivityDataInterface {
    activityData: {
        asset: string;
        strike: number;
        startTime: string;
        expiry: string;
        status: string;
        closingRate: string;
        investment: string;
        payOut: string;
        isUp: boolean;
        takePayout: string;
    }[];
    popUp: () => void;
}

export const Columns = ({activityData, popUp}: ActivityDataInterface) => {
    return activityData.map((activityData) => {
        return Column({activityData, popUp});
    })
}