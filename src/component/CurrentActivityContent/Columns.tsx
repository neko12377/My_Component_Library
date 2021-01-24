import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faCoins, faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";

interface ColumnPropsInterface {
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
}

const Column = ({asset, strike, startTime, expiry, status, closingRate, investment, payOut, isUp, takePayout}: ColumnPropsInterface) => {
    return (
        <tr>
            <td className="coin">
                <FontAwesomeIcon icon={faCoins}/>
            </td>
            <td>{asset}</td>
            <td className="strike">
                {
                    isUp
                        ? (<FontAwesomeIcon icon={faAngleDoubleUp} color="red" />)
                        : (<FontAwesomeIcon icon={faAngleDoubleDown} color="lightgreen" />)
                }
                <span className="strike-money">{strike}</span>
            </td>
            <td>{startTime}</td>
            <td>{expiry}</td>
            <td>{status}</td>
            <td>{closingRate}</td>
            <td>{investment}</td>
            <td>{payOut}</td>
            <td>
                <button>{takePayout}</button>
            </td>
        </tr>
    )
}

interface ActivityDataInterface {
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
}

export const Columns = (activityData: ActivityDataInterface[]) => {
    return activityData.map((datum) => {
        return Column(datum);
    })
}