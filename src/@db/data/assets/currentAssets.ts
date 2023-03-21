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

  localCurrency: Currency

  invested: number

  currentValue: number

  localValue: number

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
      this.localCurrency = currency;
      this.invested = CurrencyConvertor.getInstance()
          .getInBaseCurrency(invested, this.localCurrency);
      this.localValue = currentValue || invested;
      this.currentValue = currentValue
          ? CurrencyConvertor.getInstance().getInBaseCurrency(currentValue, this.localCurrency)
          : this.invested;

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

export async function getCurrentAssetHoldings() {
    await CurrencyConvertor.getInstance().populateCurrencies();
    return [
        new CurrentAsset('Open Balance', AssetManager.Tradecred, Currency.INR, 173334),
        new CurrentAsset('Open Balance', AssetManager.HDFCBankAishu, Currency.INR, 48082),
        new CurrentAsset('Open Balance', AssetManager.IndianBank, Currency.INR, 195778),
        new CurrentAsset('Open Balance', AssetManager.YesBankNRE, Currency.INR, 192618),
        new CurrentAsset('Open Balance', AssetManager.YesBankNRO, Currency.INR, 261514),
        new CurrentAsset('Open Balance', AssetManager.Zerodha, Currency.INR, 1),
        new CurrentAsset('Open Balance', AssetManager.ZerodhaAishu, Currency.INR, 1),
        new CurrentAsset('Open Balance', AssetManager.PostFinance, Currency.CHF, 8363.39),
        new CurrentAsset('Open Balance', AssetManager.Neon, Currency.CHF, 364.15),
        new CurrentAsset('Open Balance', AssetManager.WiseEUR, Currency.EUR, 286.42),
        new CurrentAsset('Open Balance', AssetManager.WiseOther, Currency.INR, 19777.7184336),
        new CurrentAsset('Open Balance', AssetManager.Degiro, Currency.CHF, 16.29),
        new CurrentAsset('Open Balance', AssetManager.BanyanTree, Currency.INR, 296053.2),
        new CurrentAsset('Open Balance', AssetManager.Swissquote, Currency.CHF, 48.82),
    ];
}

mock.default.onGet('/api/1/assets/currentAssets').reply(async () => [200, getResponse(await getCurrentAssetHoldings())]);
