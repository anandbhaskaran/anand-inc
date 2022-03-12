import * as mock from '../../mock';

import {
    asset,
    AssetType,
    Currency,
    Bank,
    // @ts-ignore
} from '../models/models.ts';

class FixedDeposit implements asset {
  name: string

  bank: Bank

  type: AssetType = AssetType.FixedDeposit

  currency: Currency

  depositDate: Date

  maturityDate: Date

  invested: number

  maturityAmount: number

  completedDays: number

  totalDays: number

  completedPercentage: number

  currentValue: number

  profit: number

  profitPercentage: number

  constructor(
      name: string,
      bank: Bank,
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
      this.bank = bank;
      this.currency = currency;
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

      this.profit = this.currentValue - this.invested;
      this.profitPercentage = this.profit / this.invested;
  }
}

const fixedDeposits: FixedDeposit[] = [
    new FixedDeposit(
        '6570839973',
        Bank.IndianBank,
        Currency.INR,
        new Date('2017-10-07'),
        new Date('2022-10-06'),
        100000,
        134476,
    ),
    new FixedDeposit(
        '6572489937',
        Bank.IndianBank,
        Currency.INR,
        new Date('2017-10-13'),
        new Date('2022-10-12'),
        50000,
        67238,
    ),
    new FixedDeposit(
        '6585119267',
        Bank.IndianBank,
        Currency.INR,
        new Date('2017-11-28'),
        new Date('2022-11-27'),
        47000,
        67078,
    ),
    new FixedDeposit(
        '6590092799',
        Bank.IndianBank,
        Currency.INR,
        new Date('2017-12-15'),
        new Date('2022-12-14'),
        100000,
        134188,
    ),
    new FixedDeposit(
        '6591937273',
        Bank.IndianBank,
        Currency.INR,
        new Date('2017-12-22'),
        new Date('2022-12-21'),
        100000,
        134188,
    ),
    new FixedDeposit(
        '6595310498',
        Bank.IndianBank,
        Currency.INR,
        new Date('2018-01-04'),
        new Date('2023-01-03'),
        53000,
        71096,
    ),
    new FixedDeposit(
        '6599918649',
        Bank.IndianBank,
        Currency.INR,
        new Date('2018-01-22'),
        new Date('2023-01-21'),
        100000,
        134146,
    ),
    new FixedDeposit(
        '6600802034',
        Bank.IndianBank,
        Currency.INR,
        new Date('2018-01-24'),
        new Date('2023-01-23'),
        50000,
        63852,
    ),
    new FixedDeposit(
        '6606750872',
        Bank.IndianBank,
        Currency.INR,
        new Date('2018-02-14'),
        new Date('2022-02-13'),
        50000,
        67072,
    ),
    new FixedDeposit(
        '6620803512',
        Bank.IndianBank,
        Currency.INR,
        new Date('2018-04-04'),
        new Date('2022-04-03'),
        50000,
        63528,
    ),
    new FixedDeposit(
        '6624463219',
        Bank.IndianBank,
        Currency.INR,
        new Date('2018-04-17'),
        new Date('2022-04-16'),
        50000,
        63528,
    ),
    new FixedDeposit(
        '6636653750',
        Bank.IndianBank,
        Currency.INR,
        new Date('2018-05-29'),
        new Date('2022-05-28'),
        100000,
        126986,
    ),
    new FixedDeposit(
        '6947435228',
        Bank.IndianBank,
        Currency.INR,
        new Date('2020-11-12'),
        new Date('2022-05-15'),
        50000,
        53949,
    ),
];

mock.default.onGet('api/1/assets/fixedDeposits').reply(() => [200, fixedDeposits]);
