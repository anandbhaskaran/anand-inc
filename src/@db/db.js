import './data/assets/currentAssets.ts'
import './data/assets/fixedDeposits.ts'
import mock from './mock'
/* eslint-enable import/extensions */

mock.onAny().passThrough() // forwards the matched request over network
