// eslint-disable-next-line max-classes-per-file
import indianBank from '@/assets/images/logos/indian_bank.png';
import hdfcBank from '@/assets/images/logos/hdfc_bank.png';
import tradecred from '@/assets/images/logos/tradecred.png';
import yesBank from '@/assets/images/logos/yes_bank.png';
import zerodha from '@/assets/images/logos/zerodha.png';
import wise from '@/assets/images/logos/wise.png';
import postFinance from '@/assets/images/logos/postfinance.png';
import degiro from '@/assets/images/logos/degiro.png';
import banyanTree from '@/assets/images/logos/banyan_tree.png';
import exp from 'constants';
import webpack from 'webpack'

const yahooFinance = require('yahoo-finance');

export enum AssetType {
  CurrentAsset = 'Current Asset',
  FixedDeposit = 'Fixed Deposits',
  Stock = 'Stock',
  MUTUAL_FUND = 'Mutual Fund',
  PMS = 'PMS'
}

export enum AssetManagerType{
  Bank = 'Bank',
  NBFC = 'NBFC',
  PMS = 'PMS',
  StockBroker = 'Stock Broker'
}

export enum Currency{
  INR = 'INR',
  CHF = 'CHF',
  EUR = 'EUR',
  USD = 'USD'
}

// This is a singleton class
export class CurrencyConvertor {
    private static _instance: CurrencyConvertor = new CurrencyConvertor();

    private lastUpdated : Date| undefined = undefined;

    private constructor() {
      if(CurrencyConvertor._instance){
        throw new Error("Error: Instantiation failed: Use CurrencyConvertor.getInstance() instead of new.");
      }
      CurrencyConvertor._instance = this;
      this.populateCurrencies()
    }

  public static getInstance():CurrencyConvertor
  {
    return CurrencyConvertor._instance;
  }

  // eslint-disable-next-line no-undef
  exchangeRates: Record<Currency, Record<Currency, number>> = {
      INR: {
          INR: 1,
          CHF: 0.0121,
          EUR: 0.0199,
          USD: 0.0131,
      },
      CHF: {
          INR: 100,
          CHF: 1,
          EUR: 0.9806,
          USD: 1.0711,
      },
      EUR: {
          INR: 82,
          CHF: 1,
          EUR: 0.9806,
          USD: 1.0711,
      },
      USD: {
          INR: 82,
          CHF: 1,
          EUR: 0.9806,
          USD: 1.0711,
      },
  }

  getInBaseCurrency(amount: number, currency: Currency) {
      // eslint-disable-next-line no-use-before-define
      return amount * this.exchangeRates[currency][BASE_CURRENCY];
  }

  getBaseCurrency() : Currency {
      return BASE_CURRENCY;
  }

  async getQuote(symbol: string, currencyX: Currency, currencyY: Currency): Promise<number> {
      const yahooResponse = await yahooFinance.quote({
          symbol: symbol,
          modules: ['price'], // optional; default modules.
      });
      if (yahooResponse) {
          const marketPrice = yahooResponse.price.regularMarketPrice;
          this.exchangeRates[currencyX][currencyY] = marketPrice;
          return marketPrice;
      }
      console.log(`No match found for  ${symbol}`);
      return Promise.resolve(0);
  }

  async populateCurrencies() {
      if(this.lastUpdated != undefined){
        console.log("Already populated currencies on " + this.lastUpdated.toString()  )
        return;
      }
      const currencyList: Currency[] = [Currency.INR, Currency.CHF, Currency.EUR, Currency.USD];

      const exchangeList = [];
      let currencyX: Currency;
      let currencyY: Currency;

      // @ts-ignore
      // eslint-disable-next-line no-restricted-syntax
      for (currencyX of currencyList) {
          // @ts-ignore
          // eslint-disable-next-line no-restricted-syntax
          for (currencyY of currencyList) {
              if (currencyX === currencyY) {
                  this.exchangeRates[currencyX][currencyY] = 1;
              } else {
                  exchangeList.push(this.getQuote(`${currencyX + currencyY}=X`, currencyX, currencyY));
              }
          }
      }
      await Promise.all(exchangeList).then((value) => console.log('All Exchange Rates Obtained', value));
      this.lastUpdated = new Date();
  }
}

export const BASE_CURRENCY = Currency.INR;

export class AssetManager {
  name:string

  assetManagerType: AssetManagerType

  notes: string

  logo:string

  static IndianBank: AssetManager = new AssetManager('Indian Bank', AssetManagerType.Bank, 'NRE Account', indianBank);

  static HDFCBankAishu: AssetManager = new AssetManager('HDFC Bank', AssetManagerType.Bank, 'Aishu Account', hdfcBank);

  static Tradecred: AssetManager = new AssetManager('Tradecred', AssetManagerType.NBFC, 'Open Balance', tradecred);

  static YesBankNRE = new AssetManager('Yes Bank', AssetManagerType.Bank, 'Open Balance', yesBank)

  static YesBankNRO = new AssetManager('Yes Bank', AssetManagerType.Bank, 'Open Balance', yesBank)

  static Zerodha = new AssetManager('Zerodha', AssetManagerType.StockBroker, 'Open Balance', zerodha)

  static ZerodhaAishu = new AssetManager('Zerodha', AssetManagerType.StockBroker, 'Open Balance - Aishu account', zerodha)

  static WiseEUR = new AssetManager('Transferwise EUR', AssetManagerType.NBFC, 'Transferwise Euro Account', wise)

  static WiseOther = new AssetManager('Transferwise Others', AssetManagerType.NBFC, 'Transferwise Others Total', wise)

  static PostFinance = new AssetManager('Post Finance', AssetManagerType.Bank, 'My Post finance account', postFinance)

  static Degiro = new AssetManager('Degiro', AssetManagerType.StockBroker, 'Degiro', degiro)

  static BanyanTree = new AssetManager('Banyan Tree', AssetManagerType.PMS, 'Indian PMS', banyanTree)

  constructor(name: string, assetManagerType: AssetManagerType, notes: string, logo: string) {
      this.name = name;
      this.assetManagerType = assetManagerType;
      this.notes = notes;
      this.logo = logo;
  }
}

export interface asset {
  name: string;
  type: AssetType;
  assetManager: AssetManager;
  currency: Currency;
  invested: number;
  currentValue: number;
  profit: number;
  profitPercentage: number;
}
