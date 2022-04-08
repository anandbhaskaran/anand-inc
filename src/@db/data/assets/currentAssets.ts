import * as mock from '../../mock';
import {
    asset, AssetType, AssetManager, Currency, CurrencyConvertor,
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

  assetManager: AssetManager

  profit: number

  profitPercentage: number

  constructor(name: string,
      bank: AssetManager,
      currency: Currency,
      invested: number,
      currentValue?: number) {
      this.name = name;
      this.assetManager = bank;
      this.currency = currency;
      this.invested = CurrencyConvertor.getInstance().getInBaseCurrency(invested, this.currency);
      this.currentValue = currentValue
          ? CurrencyConvertor.getInstance().getInBaseCurrency(currentValue, this.currency)
          : this.invested;

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

export async function getCurrentAssetHoldings() {
    await CurrencyConvertor.getInstance().populateCurrencies();
    return [
        new CurrentAsset('Open Balance', AssetManager.Tradecred, Currency.INR, 80125),
        new CurrentAsset('Open Balance', AssetManager.HDFCBankAishu, Currency.INR, 452997),
        new CurrentAsset('Open Balance', AssetManager.IndianBank, Currency.INR, 303369),
        new CurrentAsset('Open Balance', AssetManager.YesBankNRE, Currency.INR, 4873),
        new CurrentAsset('Open Balance', AssetManager.YesBankNRO, Currency.INR, 8790),
        new CurrentAsset('Open Balance', AssetManager.Zerodha, Currency.INR, 1),
        new CurrentAsset('Open Balance', AssetManager.ZerodhaAishu, Currency.INR, 120261),
        new CurrentAsset('Open Balance', AssetManager.PostFinance, Currency.CHF, 31821),
        new CurrentAsset('Open Balance', AssetManager.WiseEUR, Currency.EUR, 790.73),
        new CurrentAsset('Open Balance', AssetManager.WiseOther, Currency.INR, 1931),
        new CurrentAsset('Open Balance', AssetManager.Degiro, Currency.CHF, 1054),
    ];
}

mock.default.onGet('/api/1/assets/currentAssets').reply(async () => [200, getResponse(await getCurrentAssetHoldings())]);
