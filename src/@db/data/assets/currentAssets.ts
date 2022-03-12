import * as mock from '../../mock';
import {
    asset, AssetType, Bank, Currency,
// @ts-ignore
} from '../models/models.ts';

import {
    getResponse,
    // @ts-ignore
} from '@/@db/data/util.ts';

class CurrentAsset implements asset {
  name: string

  type: AssetType = AssetType.CurrentAsset

  currency: Currency

  invested: number

  currentValue: number

  bank: Bank

  profit: number

  profitPercentage: number

  constructor(name: string,
      bank: Bank,
      currency: Currency,
      invested: number,
      currentValue?: number) {
      this.name = name;
      this.bank = bank;
      this.currency = currency;
      this.invested = invested;
      this.currentValue = currentValue || invested;

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

const currentAssetHoldings: CurrentAsset[] = [
    new CurrentAsset('Open Balance', Bank.HDFCBankAishu, Currency.INR, 868370),
    new CurrentAsset('Open Balance', Bank.IndianBank, Currency.INR, 303369),
];
mock.default.onGet('/api/1/assets/currentAssets').reply(() => [200, getResponse(currentAssetHoldings)]);
