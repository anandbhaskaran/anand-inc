import * as mock from '../../mock';
import {
    asset, AssetType, Currency,
// @ts-ignore
} from '../models/models.ts';

// @ts-ignore
import MFAsset from '../models/mfAsset.ts';

import {
    getTotalInvested, getcurrentProfit, getTotalValue, roundToTwo,
    // @ts-ignore
} from '@/@db/data/util.ts';

class MFHolding implements asset {
  name: string

  fund: MFAsset

  type: AssetType = AssetType.MUTUAL_FUND

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
      this.currency = mfAsset.currency;
      this.quantity = quantity;
      this.averagePrice = averagePrice;
      this.invested = roundToTwo(quantity * averagePrice);
      this.currentValue = roundToTwo(quantity * mfAsset.lastClosingPrice);
      this.profit = roundToTwo(this.currentValue - this.invested);
      this.profitPercentage = roundToTwo(this.profit / this.invested);
  }
}

const mfHoldings: MFHolding[] = [
    new MFHolding(MFAsset.PARAG_PARIKH_FLEXI_CAP_GROWTH_DIRECT_PLAN, 28681.219, 34.7029),
    new MFHolding(MFAsset.ADITYA_BIRLA_SUN_LIFE_FIXED_TERM_SERIES_RU_GROWTH_DIRECT_PLAN, 5000, 10),
    new MFHolding(MFAsset.ADITYA_BIRLA_SUN_LIFE_SMALL_CAP_GROWTH_DIRECT_PLAN, 6249.683, 30.394),
    new MFHolding(MFAsset.UTI_NIFTY_INDEX_GROWTH_DIRECT_PLAN, 1686.288, 92.8902),
    new MFHolding(MFAsset.UTI_NIFTY_NEXT_50_INDEX_GROWTH_DIRECT_PLAN, 47977.713, 12.532),
    new MFHolding(MFAsset.ICICI_PRUDENTIAL_BHARAT_CONSUMPTION_GROWTH_DIRECT_PLAN, 518.072, 15.48),
    new MFHolding(MFAsset.HDFC_INDEX_SENSEX_GROWTH_DIRECT_PLAN, 28.425, 527.6781),
    new MFHolding(MFAsset.HDFC_MID_CAP_OPPORTUNITIES_GROWTH_DIRECT_PLAN, 11542.955, 64.5164),
    new MFHolding(MFAsset.HDFC_SMALL_CAP_GROWTH_DIRECT_PLAN, 12771.578, 54.5105),
    new MFHolding(MFAsset.TATA_EQUITY_PE_GROWTH_DIRECT_PLAN, 280.099, 188.0291),
    new MFHolding(MFAsset.DSP_MIDCAP_GROWTH_DIRECT_PLAN, 9648.003, 67.3521),
    new MFHolding(MFAsset.DSP_SMALL_CAP_GROWTH_DIRECT_PLAN, 8187.809, 74.476),
    new MFHolding(MFAsset.LYXOR_MSCI_WORLD, 95, 4991.27670888573),
    new MFHolding(MFAsset.UBS_EURO_STOXX_50, 141, 2702.022797908),
    new MFHolding(MFAsset.UBS_MSCI_SWI_20_35, 150, 1784.92012382292),

];

const res = {
    holdings: mfHoldings,
    analytics: {
        totalInvested: getTotalInvested(mfHoldings),
        totalValue: getTotalValue(mfHoldings),
        currentProfit: getcurrentProfit(mfHoldings),
    },
};

mock.default.onGet('/api/1/assets/mutualFunds').reply(() => [200, res]);
