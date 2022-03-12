import indianBank from '@/assets/images/logos/indian_bank.png';
import hdfcBank from '@/assets/images/logos/hdfc_bank.png';

export enum AssetType {
  CurrentAsset = 'Current Asset',
  FixedDeposit = 'Fixed Deposits',
  Stock = 'Stock',
  MUTUAL_FUND = 'Mutual Fund',
}

export enum Currency {
  INR = 'INR',
  CHF = 'CHF',
  USD = 'USD',
  EUR = 'EUR',
}

export class Bank {
  name:string

  logo:string

  static IndianBank: Bank = new Bank('Indian Bank', indianBank);

  static HDFCBankAishu: Bank = new Bank('HDFC Bank Aishu', hdfcBank);

  constructor(name: string, logo: string) {
      this.name = name;
      // eslint-disable-next-line global-require,import/no-dynamic-require
      this.logo = logo;
  }
}

export interface asset {
  name: string;
  type: AssetType;
  currency: Currency;
  invested: number;
  currentValue: number;
  profit: number;
  profitPercentage: number;
}
