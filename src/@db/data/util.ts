// @ts-ignore
import { asset } from '@/@db/data/models/models.ts';

export function roundToTwo(value: number) {
    return Math.round(value * 100) / 100;
}

export function getTotalInvested(mfHoldingsArray: asset[]) {
    return roundToTwo(mfHoldingsArray.map((holding) => holding.invested)
        .reduce((prev, next) => prev + next));
}

export function getcurrentProfit(mfHoldingsArray: asset[]) {
    return roundToTwo(mfHoldingsArray.map((holding) => holding.profit)
        .reduce((prev, next) => prev + next));
}

export function getTotalValue(mfHoldingsArray: asset[]) {
    return roundToTwo(mfHoldingsArray.map((holding) => holding.currentValue)
        .reduce((prev, next) => prev + next));
}
