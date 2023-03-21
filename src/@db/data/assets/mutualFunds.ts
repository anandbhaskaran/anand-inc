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

  localCurrency: Currency

  quantity: number

  averagePrice: number

  invested: number

  currentValue: number

  localValue: number

  profit: number

  profitPercentage: number

  constructor(mfAsset: MFAsset,
      quantity: number,
      averagePrice: number) {
      this.fund = mfAsset;
      this.name = mfAsset.name;
      this.assetManager = AssetManager.Zerodha;
      this.localCurrency = mfAsset.currency;
      this.quantity = quantity;
      this.averagePrice = averagePrice;
      this.invested = (quantity * averagePrice);
      this.currentValue = (quantity * mfAsset.marketPrice);
      this.localValue = quantity * mfAsset.marketPrice;
      this.profit = (this.currentValue - this.invested);
      this.profitPercentage = (this.profit / this.invested);
  }
}

export const mfHoldings: MFHolding[] = [
    new MFHolding(MFAsset.PARAG_PARIKH_FLEXI_CAP_GROWTH_DIRECT_PLAN, 44594.688, 40.3699),
    new MFHolding(MFAsset.ADITYA_BIRLA_SUN_LIFE_SMALL_CAP_GROWTH_DIRECT_PLAN, 2621.26, 27.1356),
    new MFHolding(MFAsset.UTI_NIFTY_50_INDEX_GROWTH_DIRECT_PLAN, 1106.308, 109.6216),
    new MFHolding(MFAsset.UTI_NIFTY_NEXT_50_INDEX_GROWTH_DIRECT_PLAN, 67947.26, 13.6621),
    new MFHolding(MFAsset.HDFC_MID_CAP_OPPORTUNITIES_GROWTH_DIRECT_PLAN, 14295.157, 73.7273),
    new MFHolding(MFAsset.HDFC_SMALL_CAP_GROWTH_DIRECT_PLAN, 15105.99, 64.8063),
    new MFHolding(MFAsset.DSP_MIDCAP_GROWTH_DIRECT_PLAN, 12084.643, 72.1827),
    new MFHolding(MFAsset.DSP_SMALL_CAP_GROWTH_DIRECT_PLAN, 11405.812, 88.8028),
    new MFHolding(MFAsset.LYXOR_MSCI_WORLD, 150, 5741.65162493604),
    new MFHolding(MFAsset.UBS_EURO_STOXX_50, 347, 3045.77405501519),
    new MFHolding(MFAsset.UBS_MSCI_SWI_20_35, 180, 1959.38478051357),

];

mock.default.onGet('/api/1/assets/mutualFunds').reply(() => [200, getResponse(mfHoldings)]);
