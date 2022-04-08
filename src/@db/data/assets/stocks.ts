import * as mock from '../../mock';
import {
    asset, AssetManager, AssetType, Currency, CurrencyConvertor,
// @ts-ignore
} from '../models/models.ts';

import {
    getResponse,
    // @ts-ignore
} from '@/@db/data/util.ts';
// @ts-ignore
import StockAsset from '@/@db/data/models/stockAsset.ts';

class Stock implements asset {
  name: string

  stock: StockAsset

  type: AssetType = AssetType.Stock

  assetManager: AssetManager

  currency: Currency

  averagePrice: number

  quantity: number

  invested: number

  currentValue: number

  profit: number

  profitPercentage: number

  constructor(stock: StockAsset,
      assetManager: AssetManager,
      quantity: number,
      averagePrice: number) {
      this.stock = stock;
      this.name = stock.name;
      this.assetManager = assetManager;

      this.currency = CurrencyConvertor.getInstance().getBaseCurrency();
      this.averagePrice = CurrencyConvertor.getInstance()
          .getInBaseCurrency(averagePrice, stock.currency);
      this.quantity = quantity;

      this.invested = (quantity * this.averagePrice);
      this.currentValue = (quantity * CurrencyConvertor.getInstance()
          .getInBaseCurrency(stock.marketPrice, stock.currency));
      this.profit = (this.currentValue - this.invested);
      this.profitPercentage = (this.profit / this.invested);
  }
}

export async function getStockHoldings() {
    await CurrencyConvertor.getInstance().populateCurrencies();
    await StockAsset.updateLatestValue();
    return [
        new Stock(StockAsset.SJVN, AssetManager.Zerodha, 500, 22.65),
        new Stock(StockAsset.HDFCBANK, AssetManager.Zerodha, 61, 784.0164),
        new Stock(StockAsset.SUNPHARMA, AssetManager.Zerodha, 30, 330),
        new Stock(StockAsset.UTIAMC, AssetManager.Zerodha, 60, 578.3333),
        new Stock(StockAsset.GRANULES, AssetManager.Zerodha, 460, 127.9168),
        new Stock(StockAsset.BAJAJHLDNG, AssetManager.Zerodha, 15, 2153.6),
        new Stock(StockAsset.HDFCAMC, AssetManager.Zerodha, 70, 2228.435),
        new Stock(StockAsset.ITC, AssetManager.Zerodha, 995, 170.66),
        new Stock(StockAsset.PERSISTENT, AssetManager.Zerodha, 30, 507.0083),
        new Stock(StockAsset.NYKAA, AssetManager.Zerodha, 45, 1470.4356),
        new Stock(StockAsset.AUROPHARMA, AssetManager.Zerodha, 80, 467.4575),
        new Stock(StockAsset.KNRCON, AssetManager.Zerodha, 310, 108.9355),
        new Stock(StockAsset.INDIGO, AssetManager.Zerodha, 35, 1167.47),
        new Stock(StockAsset.TATAELXSI, AssetManager.Zerodha, 62, 4215.3435),
        new Stock(StockAsset.HDFCLIFE, AssetManager.Zerodha, 95, 530.6711),
        new Stock(StockAsset.HCLTECH, AssetManager.Zerodha, 50, 1156.47),
        new Stock(StockAsset.AMARAJABAT, AssetManager.Zerodha, 133, 596.6767),
        new Stock(StockAsset.NIFTYBEES, AssetManager.Zerodha, 550, 147.4337),
        new Stock(StockAsset.ALPHABET, AssetManager.Degiro, 2, 1024.03),
        new Stock(StockAsset.AMAZON, AssetManager.Degiro, 1, 1620),
        new Stock(StockAsset.BERKSHIRE, AssetManager.Degiro, 16, 192.6212),
        new Stock(StockAsset.FAIRFAX_INDIA_HOLDINGS_CORP, AssetManager.Degiro, 200, 7.48),
        new Stock(StockAsset.INTEL, AssetManager.Degiro, 3, 49.34),
        new Stock(StockAsset.META, AssetManager.Degiro, 7, 223.61),
        new Stock(StockAsset.NETFLIX, AssetManager.Degiro, 6, 499.49),
        new Stock(StockAsset.NVDIA, AssetManager.Degiro, 4, 187.79),
        new Stock(StockAsset.OKTA, AssetManager.Degiro, 5, 224),
        new Stock(StockAsset.SPOTIFY, AssetManager.Degiro, 2, 134.2275),
        new Stock(StockAsset.TESLA, AssetManager.Degiro, 3, 861.39),
        new Stock(StockAsset.UBER, AssetManager.Degiro, 33, 37.17),
        new Stock(StockAsset.XIAOMI, AssetManager.Degiro, 700, 2.5849),
    ];
}

// const res = getRes(stockHoldings);

mock.default.onGet('/api/1/assets/stocks').reply(async () => [200, getResponse(await getStockHoldings())]);
