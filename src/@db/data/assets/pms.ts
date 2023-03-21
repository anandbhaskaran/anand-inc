import * as mock from '../../mock';
import {
    asset, AssetManager, AssetType, Currency,
// @ts-ignore
} from '../models/models.ts';
// @ts-ignore
import { getResponse } from '@/@db/data/util.ts';

class PMS implements asset {
  name: string

  type: AssetType = AssetType.PMS

  assetManager: AssetManager

  localCurrency: Currency

  invested: number

  currentValue: number

  localValue: number

  profit: number

  profitPercentage: number

  constructor(name: string,
      currency: Currency,
      assetManager: AssetManager,
      invested: number,
      currentValue?: number) {
      this.name = name;
      this.assetManager = assetManager;
      this.localCurrency = currency;
      this.invested = invested;
      this.currentValue = currentValue || invested;
      this.localValue = this.currentValue;

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

export const pmsHoldings: PMS[] = [
    new PMS('Banyan Tree - Invested', Currency.INR, AssetManager.BanyanTree, 2703946, 2651563),
    new PMS('Banyan Tree - Non Invested', Currency.INR, AssetManager.BanyanTree, 296053, 296053),
];

mock.default.onGet('/api/1/assets/pms').reply(() => [200, getResponse(pmsHoldings)]);
