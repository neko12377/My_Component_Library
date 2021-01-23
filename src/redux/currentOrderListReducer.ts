export interface CurrentOrderItemInterface {
    type: "normal",
    assetName: string;
    strike: "up" | "down"
    strikeValue: number;
    startTime: Date;
    expiry: Date;
    status: "open",
    closingRate: any;
    investment: number;
    payout: 500,
}
export const currentOrderListReducer = (state: CurrentOrderItemInterface, action: any) => {
    return [
        {
            type: "normal",
            assetName: "USD/JPY",
            strike: "up", //up/down
            strikeValue: 118.622,
            startTime: new Date(),
            expiry: new Date(),
            status: "open",
            closingRate:"",
            investment: 500,
            payout: 500,
        },
        {
            type: "normal",
            assetName: "USD/JPY",
            strike: "down", //up/down
            strikeValue: 118.622,
            startTime: new Date(),
            expiry: new Date(),
            status: "open",
            closingRate:"",
            investment: 500,
            payout: 500,
        },
    ]
}