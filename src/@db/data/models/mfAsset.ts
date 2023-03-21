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

  static PARAG_PARIKH_FLEXI_CAP_GROWTH_DIRECT_PLAN= new MFAsset('Parag Parikh Flexi Cap Growth Direct Plan', '0P0000YWL1.BO', '10105177', 'Flexi Cap Fund', Currency.INR, 52.8102);

  static ADITYA_BIRLA_SUN_LIFE_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('Aditya Birla Sun Life Small Cap Growth Direct Plan', '0P0000XVY6.BO', '1036358248', 'Small Cap Fund', Currency.INR, 54.9006);

  static UTI_NIFTY_50_INDEX_GROWTH_DIRECT_PLAN= new MFAsset('UTI Nifty 50 Index Growth Direct Plan', '0P0000XVU2.BO', '577321000000', 'Index Funds', Currency.INR, 116.2313);

  static UTI_NIFTY_NEXT_50_INDEX_GROWTH_DIRECT_PLAN= new MFAsset('UTI Nifty Next 50 Index Growth Direct Plan', '0P0001DI4I.BO', '577321000000', 'Index Funds', Currency.INR, 13.8134);

  static HDFC_MID_CAP_OPPORTUNITIES_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Mid Cap Opportunities Growth Direct Plan', '0P0000XW8F.BO', '13340600/12', 'Mid Cap Fund', Currency.INR, 108.072);

  static HDFC_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('HDFC Small Cap Growth Direct Plan', '0P0000XVAA.BO', '13340600/12', 'Small Cap Fund', Currency.INR, 88.278);

  static DSP_MIDCAP_GROWTH_DIRECT_PLAN= new MFAsset('DSP Midcap Growth Direct Plan', '0P0000XW2M.BO', '5162733/82', 'Mid Cap Fund', Currency.INR, 89.077);

  static DSP_SMALL_CAP_GROWTH_DIRECT_PLAN= new MFAsset('DSP Small Cap Growth Direct Plan', '0P0000XW24.BO', '5162733/82', 'Small Cap Fund', Currency.INR, 117.798);

  static LYXOR_MSCI_WORLD= new MFAsset('Lyxor MSCI World', 'SWX:CBMWOR', 'SWX:CBMWOR', 'Equity-World', Currency.CHF, 6252.50912);

  static UBS_EURO_STOXX_50= new MFAsset('UBS Euro STOXX 50', 'SWX:E50EUA', 'SWX:E50EUA', 'Equity-Euro', Currency.CHF, 3644.0404715);

  static UBS_MSCI_SWI_20_35= new MFAsset('UBS MSCI SWI 20 35', 'SWX:SW2CHB', 'SWX:SW2CHB', 'Equity-Swiss', Currency.CHF, 2136.42197275);

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
