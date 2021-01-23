
export interface CoinInterface {
    coinsName: string;
    payout: number;
    strikeValue: number;
    strike: boolean;
};

export interface CoinsBrandReducerInterface {
    timeRange: {
        fifteenMinutes: CoinInterface[];
        oneHour: CoinInterface[];
        oneDay: CoinInterface[];
    }
}

export const coinsBrandReducer = (state: CoinsBrandReducerInterface, action: any) => {
    return {
        timeRange: {
            fifteenMinutes: [
                {
                    coinsName: "USD/JPY",
                    payout: 2.00,
                    strikeValue: 112.368,
                    strike: true,
                },
                {
                    coinsName: "AUD/USD",
                    payout: 2.00,
                    strikeValue: 12.368,
                    strike: true,
                },
                {
                    coinsName: "USD/JPY",
                    payout: 2.00,
                    strikeValue: 112.368,
                    strike: true,
                },
                {
                    coinsName: "AUD/USD",
                    payout: 2.00,
                    strikeValue: 12.368,
                    strike: true,
                },
            ],
            oneHour: [
                {
                    coinsName: "USD/JPY",
                    payout: 1.00,
                    strikeValue: 112.368,
                    strike: true,
                },
            ],
            oneDay: [
                {
                    coinsName: "USD/JPY",
                    payout: 2.00,
                    strikeValue: 112.368,
                    strike: true,
                },
            ]
        }
    }
}
