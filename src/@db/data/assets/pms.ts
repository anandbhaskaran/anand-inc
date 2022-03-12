import * as mock from '../../mock';
import {
    asset, AssetType, Currency,
// @ts-ignore
} from '../models/models.ts';
// @ts-ignore
import { getcurrentProfit, getTotalInvested, getTotalValue } from '@/@db/data/util.ts';

class PMS implements asset {
  name: string

  type: AssetType = AssetType.PMS

  currency: Currency

  invested: number

  currentValue: number

  profit: number

  profitPercentage: number

  constructor(name: string,
      currency: Currency,
      invested: number,
      currentValue?: number) {
      this.name = name;
      this.currency = currency;
      this.invested = invested;
      this.currentValue = currentValue || invested;

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

const pmsHoldings: PMS[] = [
    new PMS('Banyan Tree - Invested', Currency.INR, 2767717.80, 2531806.65),
    new PMS('Banyan Tree - Non Invested', Currency.INR, 232282.2, 232282.2),
];

const res = {
    holdings: pmsHoldings,
    analytics: {
        totalInvested: getTotalInvested(pmsHoldings),
        totalValue: getTotalValue(pmsHoldings),
        currentProfit: getcurrentProfit(pmsHoldings),
    },
};

mock.default.onGet('/api/1/assets/pms').reply(() => [200, res]);
