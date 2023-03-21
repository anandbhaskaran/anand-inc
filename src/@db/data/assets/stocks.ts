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

  localCurrency: Currency

  averagePrice: number

  quantity: number

  invested: number

  currentValue: number

  localValue: number

  profit: number

  profitPercentage: number

  constructor(stock: StockAsset,
      assetManager: AssetManager,
      quantity: number,
      averagePrice: number) {
      this.stock = stock;
      this.name = stock.name;
      this.assetManager = assetManager;

      this.localCurrency = CurrencyConvertor.getInstance().getBaseCurrency();
      this.averagePrice = CurrencyConvertor.getInstance()
          .getInBaseCurrency(averagePrice, stock.currency);
      this.quantity = quantity;

      this.invested = (quantity * this.averagePrice);
      this.currentValue = (quantity * CurrencyConvertor.getInstance()
          .getInBaseCurrency(stock.marketPrice, stock.currency));
      this.localValue = quantity * stock.marketPrice;
      this.profit = (this.currentValue - this.invested);
      this.profitPercentage = (this.profit / this.invested);
  }
}

export async function getStockHoldings() {
    await CurrencyConvertor.getInstance().populateCurrencies();
    await StockAsset.updateLatestValue();
    return [
        new Stock(StockAsset.BERKSHIRE, AssetManager.Degiro, 26, 237.4207),
        new Stock(StockAsset.META, AssetManager.Degiro, 27, 179.6229),
        new Stock(StockAsset.AMAZON, AssetManager.Degiro, 53, 93.0027),
        new Stock(StockAsset.ALPHABET, AssetManager.Degiro, 51, 58.4705),
        new Stock(StockAsset.ITC, AssetManager.ZerodhaAishu, 1095, 181.4399),
        new Stock(StockAsset.MICROSOFT, AssetManager.Degiro, 15, 271.65),
        new Stock(StockAsset.TATAELXSI, AssetManager.ZerodhaAishu, 50, 5991.632),
        new Stock(StockAsset.HDFC, AssetManager.ZerodhaAishu, 114, 2251.8377),
        new Stock(StockAsset.APPLE, AssetManager.Degiro, 20, 142.4355),
        new Stock(StockAsset.NETFLIX, AssetManager.Degiro, 11, 499.49),
        new Stock(StockAsset.FAIRFAX_INDIA_HILDINGS_CORP, AssetManager.Degiro, 200, 7.48),
        new Stock(StockAsset.HDFCBANK, AssetManager.ZerodhaAishu, 123, 1074.8715),
        new Stock(StockAsset.UBER, AssetManager.Degiro, 66, 33.58),
        new Stock(StockAsset.PERSISTENT, AssetManager.ZerodhaAishu, 32, 739.7297),
        new Stock(StockAsset.LICI, AssetManager.ZerodhaAishu, 250, 864.0902),
        new Stock(StockAsset.TESLA, AssetManager.Degiro, 9, 287.1332),
        new Stock(StockAsset.HDFCAMC, AssetManager.ZerodhaAishu, 78, 2210.5186),
        new Stock(StockAsset.GRANULES, AssetManager.ZerodhaAishu, 460, 127.9168),
        new Stock(StockAsset.INMODE, AssetManager.Degiro, 45, 33.0944),
        new Stock(StockAsset.NVDIA, AssetManager.Degiro, 4, 41.25),
        new Stock(StockAsset.NIFTYBEES, AssetManager.ZerodhaAishu, 450, 179.1901),
        new Stock(StockAsset.XIAOMI, AssetManager.Degiro, 700, 2.5849),
        new Stock(StockAsset.KNRCON, AssetManager.ZerodhaAishu, 310, 108.9355),
        new Stock(StockAsset.INDIGO, AssetManager.ZerodhaAishu, 35, 1167.47),
        new Stock(StockAsset.HDFC, AssetManager.ZerodhaAnand, 23, 2312.9717),
        new Stock(StockAsset.AMARAJABAT, AssetManager.ZerodhaAishu, 100, 598.1705),
        new Stock(StockAsset.HDFCBANK, AssetManager.ZerodhaAnand, 35, 1626.97),
        new Stock(StockAsset.HDFCLIFE, AssetManager.ZerodhaAishu, 95, 530.6711),
        new Stock(StockAsset.TATAELXSI, AssetManager.ZerodhaAnand, 7, 7484.3143),
        new Stock(StockAsset.UTIAMC, AssetManager.ZerodhaAishu, 60, 578.3333),
        new Stock(StockAsset.OKTA, AssetManager.Degiro, 5, 224),
        new Stock(StockAsset.SIS, AssetManager.ZerodhaAnand, 95, 391.5326),
        new Stock(StockAsset.SUNPHARMA, AssetManager.ZerodhaAishu, 30, 330),
        new Stock(StockAsset.HCLTECH, AssetManager.ZerodhaAishu, 25, 1097.44),
        new Stock(StockAsset.SPOTIFY, AssetManager.Degiro, 2, 134.2275),
        new Stock(StockAsset.AUROPHARMA, AssetManager.ZerodhaAishu, 40, 461.99),
    ];
}

// const res = getRes(stockHoldings);

mock.default.onGet('/api/1/assets/stocks').reply(async () => [200, getResponse(await getStockHoldings())]);
