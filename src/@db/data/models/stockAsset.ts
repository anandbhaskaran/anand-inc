// @ts-ignore
import { Currency } from '@/@db/data/models/models.ts';

const yahooFinance = require('yahoo-finance');

export default class StockAsset {
  static lastUpdated: Date | undefined = undefined

  name:string

  logo: string

  symbol: string

  ISIN: string

  sector: string

  currency: Currency

  marketPrice: number
  static BERKSHIRE = new StockAsset('BERKSHIRE','','BRK-B','US-Berkshire','Diversified Financials',Currency.USD,24846.286111);
  static META = new StockAsset('META','','META','US-Meta','Information Technology',Currency.USD,16325.1307235);
  static AMAZON = new StockAsset('AMAZON','','AMZN','US-Amazon','Consumer',Currency.USD,8063.9427885);
  static ALPHABET = new StockAsset('ALPHABET','','GOOGL','US-Alphabet','Information Technology',Currency.USD,8353.620807);
  static ITC = new StockAsset('ITC','','ITC.NS','INE154A01025','Consumer Staples',Currency.INR,378.75);
  static MICROSOFT = new StockAsset('MICROSOFT','','MSFT','US-Microsoft','Information Technology',Currency.USD,22466.9649505);
  static TATAELXSI = new StockAsset('TATAELXSI','','TATAELXSI.NS','INE670A01012','Information Technology',Currency.INR,6043);
  static HDFC = new StockAsset('HDFC','','HDFC.NS','INE001A01036','Financials',Currency.INR,2558);
  static APPLE = new StockAsset('APPLE','','AAPL','US-Apple','Information Technology',Currency.USD,13926.9094);
  static NETFLIX = new StockAsset('NETFLIX','','NFLX','US-Netflix','Entertainment',Currency.USD,25182.1805655);
  static FAIRFAX_INDIA_HILDINGS_CORP = new StockAsset('FAIRFAX_INDIA_HILDINGS_CORP','','FFXDF','US-Fairfax India Holdings Corp','Diversified Financials',Currency.USD,1064.628615);
  static HDFCBANK = new StockAsset('HDFCBANK','','HDFCBANK.NS','INE040A01034','Financials',Currency.INR,1563);
  static UBER = new StockAsset('UBER','','UBER','US-Uber','Information Technology',Currency.USD,2635.1621455);
  static PERSISTENT = new StockAsset('PERSISTENT','','PERSISTENT.NS','INE262H01013','Information Technology',Currency.INR,4570);
  static LICI = new StockAsset('LICI','','LICI.NS','INE0J1Y01017','Financials',Currency.INR,575);
  static TESLA = new StockAsset('TESLA','','TSLA','US-Tesla','Auto Manufacturers',Currency.USD,15123.5033875);
  static HDFCAMC = new StockAsset('HDFCAMC','','HDFCAMC.NS','INE127D01025','Financials',Currency.INR,1681);
  static GRANULES = new StockAsset('GRANULES','','GRANULES.NS','INE101D01020','Health Care',Currency.INR,281);
  static INMODE = new StockAsset('INMODE','','INMD','US-Inmode','Electronics',Currency.USD,2452.772282);
  static NVDIA = new StockAsset('NVDIA','','NVDA','US-Nvdia','Electronics',Currency.USD,21375.10165);
  static NIFTYBEES = new StockAsset('NIFTYBEES','','NIFTYBEES.NS','INF204KB14I2','Debt',Currency.INR,186.44);
  static XIAOMI = new StockAsset('XIAOMI','','3CP.F','US-Xiaomi','Consumer',Currency.EUR,115.91011);
  static KNRCON = new StockAsset('KNRCON','','KNRCON.NS','INE634I01029','Industrials',Currency.INR,255.1);
  static INDIGO = new StockAsset('INDIGO','','INDIGO.NS','INE646L01027','Industrials',Currency.INR,1863);
  static AMARAJABAT = new StockAsset('AMARAJABAT','','AMARAJABAT.NS','INE885A01032','Industrials',Currency.INR,569.95);
  static HDFCLIFE = new StockAsset('HDFCLIFE','','HDFCLIFE.NS','INE795G01014','Financials',Currency.INR,465.5);
  static UTIAMC = new StockAsset('UTIAMC','','UTIAMC.NS','INE094J01016','Financials',Currency.INR,639);
  static OKTA = new StockAsset('OKTA','','OKTA','US-Okta','Information Technology',Currency.USD,6952.272444);
  static SIS = new StockAsset('SIS','','SIS.NS','INE285J01028','Industrials',Currency.INR,341.9);
  static SUNPHARMA = new StockAsset('SUNPHARMA','','SUNPHARMA.NS','INE044A01036','Health Care',Currency.INR,961.25);
  static HCLTECH = new StockAsset('HCLTECH','','HCLTECH.NS','INE860A01027','Information Technology',Currency.INR,1094);
  static SPOTIFY = new StockAsset('SPOTIFY','','SPOT','US-Spotify','Information Technology',Currency.USD,10432.5351335);
  static AUROPHARMA = new StockAsset('AUROPHARMA','','AUROPHARMA.NS','INE406A01037','Health Care',Currency.INR,475.75);

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
      if (this.lastUpdated != undefined) {
        console.log("Already updated stocks values at " + this.lastUpdated.toString())
          return;
      }
      await Promise.all([
        this.BERKSHIRE.getLatestValueOfStock(),
        this.META.getLatestValueOfStock(),
        this.AMAZON.getLatestValueOfStock(),
        this.ALPHABET.getLatestValueOfStock(),
        this.ITC.getLatestValueOfStock(),
        this.MICROSOFT.getLatestValueOfStock(),
        this.TATAELXSI.getLatestValueOfStock(),
        this.HDFC.getLatestValueOfStock(),
        this.APPLE.getLatestValueOfStock(),
        this.NETFLIX.getLatestValueOfStock(),
        this.FAIRFAX_INDIA_HILDINGS_CORP.getLatestValueOfStock(),
        this.HDFCBANK.getLatestValueOfStock(),
        this.UBER.getLatestValueOfStock(),
        this.PERSISTENT.getLatestValueOfStock(),
        this.LICI.getLatestValueOfStock(),
        this.TESLA.getLatestValueOfStock(),
        this.HDFCAMC.getLatestValueOfStock(),
        this.GRANULES.getLatestValueOfStock(),
        this.INMODE.getLatestValueOfStock(),
        this.NVDIA.getLatestValueOfStock(),
        this.NIFTYBEES.getLatestValueOfStock(),
        this.XIAOMI.getLatestValueOfStock(),
        this.KNRCON.getLatestValueOfStock(),
        this.INDIGO.getLatestValueOfStock(),
        this.HDFC.getLatestValueOfStock(),
        this.AMARAJABAT.getLatestValueOfStock(),
        this.HDFCBANK.getLatestValueOfStock(),
        this.HDFCLIFE.getLatestValueOfStock(),
        this.TATAELXSI.getLatestValueOfStock(),
        this.UTIAMC.getLatestValueOfStock(),
        this.OKTA.getLatestValueOfStock(),
        this.SIS.getLatestValueOfStock(),
        this.SUNPHARMA.getLatestValueOfStock(),
        this.HCLTECH.getLatestValueOfStock(),
        this.SPOTIFY.getLatestValueOfStock(),
        this.AUROPHARMA.getLatestValueOfStock(),
      ])
          .catch(() => console.error('Fetching Failed'))
          .finally(() => {
            this.lastUpdated = new Date;
            console.log('Completed Execution')
          });
  }



  async getLatestValueOfStock() {
      const yahooResponse = await yahooFinance.quote({
          symbol: this.symbol,
          modules: ['price'], // optional; default modules.
      }).catch(() => console.error(`Fetching Failed for ${this.symbol}`));
      if (yahooResponse) {
          this.marketPrice = yahooResponse.price.regularMarketPrice;
          this.name = yahooResponse.price.shortName;
          console.log(`Updated ${this.symbol}: ${this.marketPrice}`);
      } else {
          console.log(`No match found for  ${this.symbol}`);
      }
  }
}
