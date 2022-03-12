export enum AssetType {
  CurrentAssets = 'Current Assets',
  FixedDeposit = 'Fixed Deposits',
}

export enum Currency {
  INR = 'INR',
  CHF = 'CHF',
}

export enum Bank {
  IndianBank = 'Indian Bank',
  HDFCBankAishu = 'HDFC Bank - Aishu',
}

export interface asset {
  name: string
  type: AssetType
  currency: Currency
  invested: number
  currentValue: number
}
