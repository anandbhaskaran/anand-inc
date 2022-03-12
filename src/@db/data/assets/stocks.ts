import * as mock from '../../mock';
import {
    asset, AssetType, Currency,
// @ts-ignore
} from '../models/models.ts';

// @ts-ignore
import { roundToTwo } from '@/@db/data/util.ts';
// @ts-ignore
import StockAsset from '@/@db/data/models/stockAsset.ts';

class Stock implements asset {
  name: string

  stock: StockAsset

  type: AssetType = AssetType.Stock

  currency: Currency

  averagePrice: number

  quantity: number

  invested: number

  currentValue: number

  profit: number

  profitPercentage: number

  constructor(stock: StockAsset,
      quantity: number,
      averagePrice: number) {
      this.stock = stock;
      this.name = stock.name;
      this.currency = stock.currency;
      this.averagePrice = averagePrice;
      this.quantity = quantity;

      this.invested = roundToTwo(quantity * averagePrice);
      this.currentValue = roundToTwo(quantity * stock.lastClosingPrice);
      this.profit = roundToTwo(this.currentValue - this.invested);
      this.profitPercentage = roundToTwo(this.profit / this.invested);
  }
}

const stocks: Stock[] = [
    new Stock(StockAsset.SJVN, 500, 22.65),
    new Stock(StockAsset.HDFCBANK, 61, 784.0164),
    new Stock(StockAsset.SUNPHARMA, 30, 330),
    new Stock(StockAsset.UTIAMC, 60, 578.3333),
    new Stock(StockAsset.GRANULES, 460, 127.9168),
    new Stock(StockAsset.BAJAJHLDNG, 15, 2153.6),
    new Stock(StockAsset.HDFCAMC, 55, 2256.0536),
    new Stock(StockAsset.ITC, 995, 170.66),
    new Stock(StockAsset.PERSISTENT, 30, 507.0083),
    new Stock(StockAsset.NYKAA, 45, 1470.4356),
    new Stock(StockAsset.AUROPHARMA, 80, 467.4575),
    new Stock(StockAsset.KNRCON, 310, 108.9355),
    new Stock(StockAsset.INDIGO, 35, 1167.47),
    new Stock(StockAsset.TATAELXSI, 62, 4215.3435),
    new Stock(StockAsset.HDFCLIFE, 50, 541.8),
    new Stock(StockAsset.HCLTECH, 40, 1155.8375),
    new Stock(StockAsset.AMARAJABAT, 133, 596.6767),
    new Stock(StockAsset.NIFTYBEES, 550, 147.4337),
    new Stock(StockAsset.ALPHABET, 2, 1024.03),
    new Stock(StockAsset.AMAZON, 1, 1620),
    new Stock(StockAsset.BERKSHIRE, 16, 192.6212),
    new Stock(StockAsset.FAIRFAX_INDIA_HILDINGS_CORP, 200, 7.48),
    new Stock(StockAsset.INTEL, 3, 49.34),
    new Stock(StockAsset.NETFLIX, 6, 499.49),
    new Stock(StockAsset.NVDIA, 4, 187.79),
    new Stock(StockAsset.OKTA, 5, 224),
    new Stock(StockAsset.SPOTIFY, 2, 134.2275),
    new Stock(StockAsset.XIAOMI, 700, 2.5849),
    new Stock(StockAsset.META, 4, 304.82),
    new Stock(StockAsset.TESLA, 3, 861.39),
    new Stock(StockAsset.UBER, 33, 37.17),
];

mock.default.onGet('/api/1/assets/stocks').reply(() => [200, stocks]);
