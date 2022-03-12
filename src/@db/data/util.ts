// @ts-ignore
import { asset } from '@/@db/data/models/models.ts';

export function roundToTwo(value: number) {
    return Math.round(value * 100) / 100;
}

export function getTotalInvested(holdings: asset[]) {
    return roundToTwo(holdings.map((holding) => holding.invested)
        .reduce((prev, next) => prev + next));
}

export function getcurrentProfit(holdings: asset[]) {
    return roundToTwo(holdings.map((holding) => holding.profit)
        .reduce((prev, next) => prev + next));
}

export function getTotalValue(holdings: asset[]) {
    return roundToTwo(holdings.map((holding) => holding.currentValue)
        .reduce((prev, next) => prev + next));
}

export function getResponse(holdings: asset[]) {
    return {
        holdings: holdings,
        analytics: {
            totalInvested: getTotalInvested(holdings),
            totalValue: getTotalValue(holdings),
            currentProfit: getcurrentProfit(holdings),
        },
    };
}
