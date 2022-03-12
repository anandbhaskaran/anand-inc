// @ts-ignore
import { Currency } from '@/@db/data/models/models.ts';

const yahooFinance = require('yahoo-finance');

export default class StockAsset {
  name:string

  logo: string

  symbol: string

  ISIN: string

  sector: string

  currency: Currency

  marketPrice: number

  static SJVN = new StockAsset('SJVN', '', 'SJVN.NS', 'INE002L01015', 'Utilities', Currency.INR, 28.7);

  static HDFCBANK = new StockAsset('HDFCBANK', '', 'HDFCBANK.NS', 'INE040A01034', 'Financials', Currency.INR, 1396);

  static SUNPHARMA = new StockAsset('SUNPHARMA', '', 'SUNPHARMA.NS', 'INE044A01036', 'Health Care', Currency.INR, 901.45);

  static UTIAMC = new StockAsset('UTIAMC', '', 'UTIAMC.NS', 'INE094J01016', 'Financials', Currency.INR, 934.45);

  static GRANULES = new StockAsset('GRANULES', '', 'GRANULES.NS', 'INE101D01020', 'Health Care', Currency.INR, 309);

  static BAJAJHLDNG = new StockAsset('BAJAJHLDNG', '', 'BAJAJHLDNG.NS', 'INE118A01012', 'Financials', Currency.INR, 4918);

  static HDFCAMC = new StockAsset('HDFCAMC', '', 'HDFCAMC.NS', 'INE127D01025', 'Financials', Currency.INR, 2160);

  static ITC = new StockAsset('ITC', '', 'ITC.NS', 'INE154A01025', 'Consumer Staples', Currency.INR, 234.95);

  static PERSISTENT = new StockAsset('PERSISTENT', '', 'PERSISTENT.NS', 'INE262H01013', 'Information Technology', Currency.INR, 4350);

  static NYKAA = new StockAsset('NYKAA', '', 'NYKAA.NS', 'INE388Y01029', 'Industrials', Currency.INR, 1385);

  static AUROPHARMA = new StockAsset('AUROPHARMA', '', 'AUROPHARMA.NS', 'INE406A01037', 'Health Care', Currency.INR, 642.2);

  static KNRCON = new StockAsset('KNRCON', '', 'KNRCON.NS', 'INE634I01029', 'Industrials', Currency.INR, 307.25);

  static INDIGO = new StockAsset('INDIGO', '', 'INDIGO.NS', 'INE646L01027', 'Industrials', Currency.INR, 1817);

  static TATAELXSI = new StockAsset('TATAELXSI', '', 'TATAELXSI.NS', 'INE670A01012', 'Information Technology', Currency.INR, 7120.05);

  static HDFCLIFE = new StockAsset('HDFCLIFE', '', 'HDFCLIFE.NS', 'INE795G01014', 'Financials', Currency.INR, 518.5);

  static HCLTECH = new StockAsset('HCLTECH', '', 'HCLTECH.NS', 'INE860A01027', 'Information Technology', Currency.INR, 1193.95);

  static AMARAJABAT = new StockAsset('AMARAJABAT', '', 'AMARAJABAT.NS', 'INE885A01032', 'Industrials', Currency.INR, 575);

  static NIFTYBEES = new StockAsset('NIFTYBEES', '', 'NIFTYBEES.NS', 'INF204KB14I2', 'Debt', Currency.INR, 179.91);

  static ALPHABET = new StockAsset('ALPHABET', '', 'GOOGL', 'US-Alphabet', 'Information Technology', Currency.USD, 199375.113672);

  static AMAZON = new StockAsset('AMAZON', '', 'AMZN', 'US-Amazon', 'Consumer', Currency.USD, 223406.884008);

  static BERKSHIRE = new StockAsset('BERKSHIRE', '', 'BRK-B', 'US-Berkshire', 'Diversified Financials', Currency.USD, 25069.55472);

  static FAIRFAX_INDIA_HILDINGS_CORP = new StockAsset('FAIRFAX_INDIA_HILDINGS_CORP', '', 'FFXDF', 'US-Fairfax India Holdings Corp', 'Diversified Financials', Currency.USD, 912.666888);

  static INTEL = new StockAsset('INTEL', '', 'INTC', 'US-Intel', 'Electronics', Currency.USD, 3517.874136);

  static NETFLIX = new StockAsset('NETFLIX', '', 'NFLX', 'US-Netflix', 'Entertainment', Currency.USD, 26122.690944);

  static NVDIA = new StockAsset('NVDIA', '', 'NVDA', 'US-Nvdia', 'Electronics', Currency.USD, 16963.7832);

  static OKTA = new StockAsset('OKTA', '', 'OKTA', 'US-Okta', 'Information Technology', Currency.USD, 11825.522352);

  static SPOTIFY = new StockAsset('SPOTIFY', '', 'SPOT', 'US-Spotify', 'Information Technology', Currency.USD, 9540.400968);

  static XIAOMI = new StockAsset('XIAOMI', '', '3CPA.F', 'US-Xiaomi', 'Consumer', Currency.EUR, 129.0134859552);

  static META = new StockAsset('META', '', 'FB', 'US-Meta', 'Information Technology', Currency.USD, 14400.793512);

  static TESLA = new StockAsset('TESLA', '', 'TSLA', 'US-Tesla', 'Auto Manufacturers', Currency.USD, 61050.42972);

  static UBER = new StockAsset('UBER', '', 'UBER', 'US-Uber', 'Information Technology', Currency.USD, 2361.112992);

  constructor(
      name: string,
      logo: string,
      symbol: string,
      ISIN: string,
      sector: string,
      currency: Currency,
      marketPrice: number,
  ) {
      this.name = name;
      this.logo = logo;
      this.symbol = symbol;
      this.ISIN = ISIN;
      this.sector = sector;
      this.currency = currency;
      this.marketPrice = marketPrice;
  }

  static async updateLatestValue() {
      await Promise.all([this.SJVN.getLatestValueOfStock(),
          this.HDFCBANK.getLatestValueOfStock(),
          this.SUNPHARMA.getLatestValueOfStock(),
          this.UTIAMC.getLatestValueOfStock(),
          this.GRANULES.getLatestValueOfStock(),
          this.BAJAJHLDNG.getLatestValueOfStock(),
          this.HDFCAMC.getLatestValueOfStock(),
          this.ITC.getLatestValueOfStock(),
          this.PERSISTENT.getLatestValueOfStock(),
          this.NYKAA.getLatestValueOfStock(),
          this.AUROPHARMA.getLatestValueOfStock(),
          this.KNRCON.getLatestValueOfStock(),
          this.INDIGO.getLatestValueOfStock(),
          this.TATAELXSI.getLatestValueOfStock(),
          this.HDFCLIFE.getLatestValueOfStock(),
          this.HCLTECH.getLatestValueOfStock(),
          this.AMARAJABAT.getLatestValueOfStock(),
          this.NIFTYBEES.getLatestValueOfStock(),
          this.ALPHABET.getLatestValueOfStock(),
          this.AMAZON.getLatestValueOfStock(),
          this.BERKSHIRE.getLatestValueOfStock(),
          this.FAIRFAX_INDIA_HILDINGS_CORP.getLatestValueOfStock(),
          this.INTEL.getLatestValueOfStock(),
          this.NETFLIX.getLatestValueOfStock(),
          this.NVDIA.getLatestValueOfStock(),
          this.OKTA.getLatestValueOfStock(),
          this.SPOTIFY.getLatestValueOfStock(),
          this.XIAOMI.getLatestValueOfStock(),
          this.META.getLatestValueOfStock(),
          this.TESLA.getLatestValueOfStock(),
          this.UBER.getLatestValueOfStock()])
          .catch(() => console.error('Fetching Failed'))
          .finally(() => console.log('Completed Execution'));
  }

  async getLatestValueOfStock() {
      const yahooResponse = await yahooFinance.quote({
          symbol: this.symbol,
          modules: ['price'], // optional; default modules.
      });
      if (yahooResponse) {
          this.marketPrice = yahooResponse.price.regularMarketPrice;
          this.name = yahooResponse.price.shortName;
          console.log(`Updated ${this.symbol}`);
      } else {
          console.log(`No match found for  ${this.symbol}`);
      }
  }
}
