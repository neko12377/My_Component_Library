import {CoinInterface} from "./coinsBrandReducer";

export interface CurrentCoinBrand extends CoinInterface {
    payload: number;
    returnMoney: number;
}

export const currentCoinBrandReducer = (state: CurrentCoinBrand, action: any) => {
    return {
        payload: 1.85,
        returnMoney: 925,
    };
}
