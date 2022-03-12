import * as mock from '../../mock'
import { asset, AssetType, Bank, Currency } from '../models.ts'

class CurrentAsset implements asset {
  name: string

  type: AssetType = AssetType.CurrentAssets

  currency: Currency

  invested: number

  currentValue: number

  bank: Bank

  constructor(name: string, bank: Bank, currency: Currency, invested: number, currentValue?: number) {
    this.name = name
    this.bank = bank
    this.currency = currency
    this.invested = invested
    this.currentValue = currentValue || invested
  }
}

const currentAssets: CurrentAsset[] = [
  new CurrentAsset('Open Balance', Bank.HDFCBankAishu, Currency.INR, 868370),
  new CurrentAsset('Open Balance', Bank.IndianBank, Currency.INR, 303369),
]

mock.default.onGet('/api/1/assets/currentAssets').reply(() => [200, currentAssets])
