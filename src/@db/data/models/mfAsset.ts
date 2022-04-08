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

  static PARAG_PARIKH_FLEXI_CAP_GROWTH_DIRECT_PLAN= new MFAsset('Parag Parikh Flexi Cap Growth Direct Plan', '0P0000YWL1.BO', '10105177', 'Flexi Cap Fund', Currency.INR, 53.7773);

  static ADITYA_BIRLA_SUN_LIFE_FIXED_TERM_SERIES_RU_GROWTH_DIRECT_PLAN= new MFAsset('Aditya Birla Sun Life Fixed Term Series Ru Growth Direct Plan', '', '1036358248', 'Short Duration Fund', Currency.INR, 12.9323);

  static ADITYA_BIRLA_SUN_LIFE_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('Aditya Birla Sun Life Small Cap Growth Direct Plan', '0P0000XVY6.BO', '1036358248', 'Small Cap Fund', Currency.INR, 58.4165);

  static UTI_NIFTY_INDEX_GROWTH_DIRECT_PLAN= new MFAsset('UTI Nifty Index Growth Direct Plan', '0P0000XVU2.BO', '577321027743', 'Index Funds', Currency.INR, 118.7499);

  static UTI_NIFTY_NEXT_50_INDEX_GROWTH_DIRECT_PLAN= new MFAsset('UTI Nifty Next 50 Index Growth Direct Plan', '0P0001DI4I.BO', '577321027743', 'Index Funds', Currency.INR, 15.5761);

  static ICICI_PRUDENTIAL_BHARAT_CONSUMPTION_GROWTH_DIRECT_PLAN= new MFAsset('ICICI Prudential Bharat Consumption Growth Direct Plan', '', '11066473/92', 'Sectoral/Thematic', Currency.INR, 15.29);

  static HDFC_INDEX_SENSEX_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Index Sensex Growth Direct Plan', '0P0000XW7U.BO', '13340600/12', 'Index Funds', Currency.INR, 539.8444);

  static HDFC_MID_CAP_OPPORTUNITIES_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Mid Cap Opportunities Growth Direct Plan', '0P0000XW8F.BO', '13340600/12', 'Mid Cap Fund', Currency.INR, 99.905);

  static HDFC_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Small Cap Growth Direct Plan', '0P0000XVAA.BO', '13340600/12', 'Small Cap Fund', Currency.INR, 82.061);

  static TATA_EQUITY_PE_GROWTH_DIRECT_PLAN= new MFAsset('Tata Equity PE Growth Direct Plan', '0P0000XVOQ.BO', '4710681/81', 'Value Fund', Currency.INR, 216.7148);

  static DSP_MIDCAP_GROWTH_DIRECT_PLAN= new MFAsset('DSP Midcap Growth Direct Plan', '0P0000XW2M.BO', '5162733/82', 'Mid Cap Fund', Currency.INR, 94.783);

  static DSP_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('DSP Small Cap Growth Direct Plan', '0P0000XW24.BO', '5162733/82', 'Small Cap Fund', Currency.INR, 122.468);

  static LYXOR_MSCI_WORLD= new MFAsset('Lyxor MSCI World', 'SWX:CBMWOR', 'SWX:CBMWOR', 'Equity-World', Currency.CHF, 6489.4088608);

  static UBS_EURO_STOXX_50= new MFAsset('UBS Euro STOXX 50', 'SWX:E50EUA', 'SWX:E50EUA', 'Equity-Euro', Currency.CHF, 3181.4326940072);

  static UBS_MSCI_SWI_20_35= new MFAsset('UBS MSCI SWI 20 35', 'SWX:SW2CHB', 'SWX:SW2CHB', 'Equity-Swiss', Currency.CHF, 2259.9366357736);

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
