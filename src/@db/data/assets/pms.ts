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

  currency: Currency

  invested: number

  currentValue: number

  profit: number

  profitPercentage: number

  constructor(name: string,
      currency: Currency,
      assetManager: AssetManager,
      invested: number,
      currentValue?: number) {
      this.name = name;
      this.assetManager = assetManager;
      this.currency = currency;
      this.invested = invested;
      this.currentValue = currentValue || invested;

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

export const pmsHoldings: PMS[] = [
    new PMS('Banyan Tree - Invested', Currency.INR, AssetManager.BanyanTree, 2802090, 2805508),
    new PMS('Banyan Tree - Non Invested', Currency.INR, AssetManager.BanyanTree, 197909, 197909),
];

mock.default.onGet('/api/1/assets/pms').reply(() => [200, getResponse(pmsHoldings)]);
