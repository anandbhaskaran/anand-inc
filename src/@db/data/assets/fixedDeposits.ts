import * as mock from '../../mock';

import {
    asset,
    AssetType,
    Currency,
    AssetManager,
    // @ts-ignore
} from '../models/models.ts';

import {
    getResponse,
    // @ts-ignore
} from '@/@db/data/util.ts';

class FixedDeposit implements asset {
  name: string

  assetManager: AssetManager

  type: AssetType = AssetType.FixedDeposit

  localCurrency: Currency

  depositDate: Date

  maturityDate: Date

  invested: number

  maturityAmount: number

  completedDays: number

  totalDays: number

  completedPercentage: number

  currentValue: number

  localValue: number

  profit: number

  profitPercentage: number

  constructor(
      name: string,
      bank: AssetManager,
      currency: Currency,
      depositDate: Date,
      maturityDate: Date,
      invested: number,
      maturityAmount: number,
  ) {
      function daysDiff(date1: Date, date2: Date): number {
          const diffTime = Math.abs(date2.valueOf() - date1.valueOf());

          return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      }

      function roundToTwo(value: number) {
          return Math.round(value * 100) / 100;
      }

      this.name = name;
      this.assetManager = bank;
      this.localCurrency = currency;
      this.depositDate = depositDate;
      this.maturityDate = maturityDate;
      this.completedDays = daysDiff(new Date(), depositDate);
      this.maturityAmount = maturityAmount;
      this.invested = invested;
      this.totalDays = daysDiff(maturityDate, depositDate);
      this.completedPercentage = this.completedDays / this.totalDays;
      this.currentValue = roundToTwo(
          invested + (maturityAmount - invested) * this.completedPercentage,
      );
      this.localValue = this.currentValue;

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

export const fixedDepositHoldings: FixedDeposit[] = [
    new FixedDeposit('6570839973', AssetManager.IndianBank, Currency.INR, new Date('2017-10-07'), new Date('2023-10-06'), 100000, 142026),
    new FixedDeposit('6572489937', AssetManager.IndianBank, Currency.INR, new Date('2017-10-13'), new Date('2023-10-12'), 50000, 71013),
    new FixedDeposit('6585119267', AssetManager.IndianBank, Currency.INR, new Date('2017-11-28'), new Date('2023-11-27'), 47000, 67015),
    new FixedDeposit('6590092799', AssetManager.IndianBank, Currency.INR, new Date('2017-12-15'), new Date('2023-12-14'), 100000, 142563),
    new FixedDeposit('6591937273', AssetManager.IndianBank, Currency.INR, new Date('2017-12-22'), new Date('2023-12-21'), 100000, 142563),
    new FixedDeposit('6595310498', AssetManager.IndianBank, Currency.INR, new Date('2018-01-04'), new Date('2024-01-03'), 53000, 71096),
    new FixedDeposit('6599918649', AssetManager.IndianBank, Currency.INR, new Date('2018-01-22'), new Date('2024-01-21'), 100000, 142518),
    new FixedDeposit('6600802034', AssetManager.IndianBank, Currency.INR, new Date('2018-01-24'), new Date('2024-01-23'), 50000, 71258),
    new FixedDeposit('6606750872', AssetManager.IndianBank, Currency.INR, new Date('2018-02-14'), new Date('2024-02-13'), 50000, 71189),
    new FixedDeposit('6620803512', AssetManager.IndianBank, Currency.INR, new Date('2018-04-04'), new Date('2023-04-03'), 50000, 66731),
    new FixedDeposit('6624463219', AssetManager.IndianBank, Currency.INR, new Date('2018-04-17'), new Date('2023-04-16'), 50000, 66764),
    new FixedDeposit('6636653750', AssetManager.IndianBank, Currency.INR, new Date('2018-05-29'), new Date('2023-05-28'), 100000, 133436),
    new FixedDeposit('6947435228', AssetManager.IndianBank, Currency.INR, new Date('2020-11-12'), new Date('2023-09-11'), 50000, 58149),
    new FixedDeposit('50300728824838', AssetManager.HDFCBankAishu, Currency.INR, new Date('2022-12-30'), new Date('2024-03-31'), 50000, 54536),
    new FixedDeposit('103542600002394', AssetManager.YesBankNRE, Currency.INR, new Date('2022-07-02'), new Date('2024-01-03'), 100000, 112802),
    new FixedDeposit('1035426000002713', AssetManager.YesBankNRE, Currency.INR, new Date('2023-03-19'), new Date('2026-02-19'), 100000, 125160),
];

mock.default.onGet('api/1/assets/fixedDeposits').reply(() => [200, getResponse(fixedDepositHoldings)]);
