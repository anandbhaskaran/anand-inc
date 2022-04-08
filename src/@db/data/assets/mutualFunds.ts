import * as mock from '../../mock';
import {
    asset, AssetManager, AssetType, Currency,
// @ts-ignore
} from '../models/models.ts';

// @ts-ignore
import MFAsset from '../models/mfAsset.ts';

import {
    getResponse,
    // @ts-ignore
} from '@/@db/data/util.ts';

class MFHolding implements asset {
  name: string

  fund: MFAsset

  type: AssetType = AssetType.MUTUAL_FUND

  // TODO: Implement Asset Manager
  assetManager: AssetManager

  currency: Currency

  quantity: number

  averagePrice: number

  invested: number

  currentValue: number

  profit: number

  profitPercentage: number

  constructor(mfAsset: MFAsset,
      quantity: number,
      averagePrice: number) {
      this.fund = mfAsset;
      this.name = mfAsset.name;
      this.assetManager = AssetManager.Zerodha;
      this.currency = mfAsset.currency;
      this.quantity = quantity;
      this.averagePrice = averagePrice;
      this.invested = (quantity * averagePrice);
      this.currentValue = (quantity * mfAsset.marketPrice);
      this.profit = (this.currentValue - this.invested);
      this.profitPercentage = (this.profit / this.invested);
  }
}

export const mfHoldings: MFHolding[] = [
    new MFHolding(MFAsset.PARAG_PARIKH_FLEXI_CAP_GROWTH_DIRECT_PLAN, 29160.806, 34.9894),
    new MFHolding(MFAsset.ADITYA_BIRLA_SUN_LIFE_FIXED_TERM_SERIES_RU_GROWTH_DIRECT_PLAN, 5000, 10),
    new MFHolding(MFAsset.ADITYA_BIRLA_SUN_LIFE_SMALL_CAP_GROWTH_DIRECT_PLAN, 6249.683, 30.394),
    new MFHolding(MFAsset.UTI_NIFTY_INDEX_GROWTH_DIRECT_PLAN, 1686.288, 92.8902),
    new MFHolding(MFAsset.UTI_NIFTY_NEXT_50_INDEX_GROWTH_DIRECT_PLAN, 49341.346, 12.5909),
    new MFHolding(MFAsset.ICICI_PRUDENTIAL_BHARAT_CONSUMPTION_GROWTH_DIRECT_PLAN, 518.072, 15.48),
    new MFHolding(MFAsset.HDFC_INDEX_SENSEX_GROWTH_DIRECT_PLAN, 37.854, 528.3193),
    new MFHolding(MFAsset.HDFC_MID_CAP_OPPORTUNITIES_GROWTH_DIRECT_PLAN, 11812.139, 65.1625),
    new MFHolding(MFAsset.HDFC_SMALL_CAP_GROWTH_DIRECT_PLAN, 13281.447, 55.4295),
    new MFHolding(MFAsset.TATA_EQUITY_PE_GROWTH_DIRECT_PLAN, 280.099, 188.0291),
    new MFHolding(MFAsset.DSP_MIDCAP_GROWTH_DIRECT_PLAN, 9809.809, 67.7702),
    new MFHolding(MFAsset.DSP_SMALL_CAP_GROWTH_DIRECT_PLAN, 8360.371, 75.3309),
    new MFHolding(MFAsset.LYXOR_MSCI_WORLD, 95, 4930.77727013779),
    new MFHolding(MFAsset.UBS_EURO_STOXX_50, 171, 2753.60910585005),
    new MFHolding(MFAsset.UBS_MSCI_SWI_20_35, 150, 1763.28504486427),

];

mock.default.onGet('/api/1/assets/mutualFunds').reply(() => [200, getResponse(mfHoldings)]);
