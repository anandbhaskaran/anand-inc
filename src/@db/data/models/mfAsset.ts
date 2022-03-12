// @ts-ignore
import { Currency } from '@/@db/data/models/models.ts';

export default class MFAsset {
  name:string

  symbol: string

  folioNumber: string

  category: string

  currency: Currency

  marketPrice: number

  logo:string | undefined

  static PARAG_PARIKH_FLEXI_CAP_GROWTH_DIRECT_PLAN= new MFAsset('Parag Parikh Flexi Cap Growth Direct Plan', '', '10105177', 'Flexi Cap Fund', Currency.INR, 48.2589);

  static ADITYA_BIRLA_SUN_LIFE_FIXED_TERM_SERIES_RU_GROWTH_DIRECT_PLAN= new MFAsset('Aditya Birla Sun Life Fixed Term Series Ru Growth Direct Plan', '', '1036358248', 'Short Duration Fund', Currency.INR, 12.891);

  static ADITYA_BIRLA_SUN_LIFE_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('Aditya Birla Sun Life Small Cap Growth Direct Plan', '', '1036358248', 'Small Cap Fund', Currency.INR, 52.8846);

  static UTI_NIFTY_INDEX_GROWTH_DIRECT_PLAN= new MFAsset('UTI Nifty Index Growth Direct Plan', '', '577321027743', 'Index Funds', Currency.INR, 107.8181);

  static UTI_NIFTY_NEXT_50_INDEX_GROWTH_DIRECT_PLAN= new MFAsset('UTI Nifty Next 50 Index Growth Direct Plan', '', '577321027743', 'Index Funds', Currency.INR, 14.0133);

  static ICICI_PRUDENTIAL_BHARAT_CONSUMPTION_GROWTH_DIRECT_PLAN= new MFAsset('ICICI Prudential Bharat Consumption Growth Direct Plan', '', '11066473/92', 'Sectoral/Thematic', Currency.INR, 13.8);

  static HDFC_INDEX_SENSEX_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Index Sensex Growth Direct Plan', '', '13340600/12', 'Index Funds', Currency.INR, 488.5788);

  static HDFC_MID_CAP_OPPORTUNITIES_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Mid Cap Opportunities Growth Direct Plan', '', '13340600/12', 'Mid Cap Fund', Currency.INR, 90.798);

  static HDFC_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Small Cap Growth Direct Plan', '', '13340600/12', 'Small Cap Fund', Currency.INR, 75.115);

  static TATA_EQUITY_PE_GROWTH_DIRECT_PLAN= new MFAsset('Tata Equity PE Growth Direct Plan', '', '4710681/81', 'Value Fund', Currency.INR, 196.5659);

  static DSP_MIDCAP_GROWTH_DIRECT_PLAN= new MFAsset('DSP Midcap Growth Direct Plan', '', '5162733/82', 'Mid Cap Fund', Currency.INR, 87.43);

  static DSP_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('DSP Small Cap Growth Direct Plan', '', '5162733/82', 'Small Cap Fund', Currency.INR, 110.25);

  static LYXOR_MSCI_WORLD= new MFAsset('Lyxor MSCI World', 'SWX:CBMWOR', 'SWX:CBMWOR', 'Equity-World', Currency.CHF, 6207.2608834616);

  static UBS_EURO_STOXX_50= new MFAsset('UBS Euro STOXX 50', 'SWX:E50EUA', 'SWX:E50EUA', 'Equity-Euro', Currency.CHF, 3124.1625298608);

  static UBS_MSCI_SWI_20_35= new MFAsset('UBS MSCI SWI 20 35', 'SWX:SW2CHB', 'SWX:SW2CHB', 'Equity-Swiss', Currency.CHF, 2109.0560927136);

  constructor(
      name: string,
      symbol: string,
      folioNumber: string,
      category: string,
      currency: Currency,
      marketPrice: number,
      logo?: string,
  ) {
      this.name = name;
      this.symbol = symbol;
      this.folioNumber = folioNumber;
      this.category = category;
      this.currency = currency;
      this.marketPrice = marketPrice;
      this.logo = logo;
  }
}
