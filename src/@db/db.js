import './data/assets/currentAssets.ts';
import './data/assets/fixedDeposits.ts';
import './data/assets/stocks.ts';
import './data/assets/mutualFunds.ts';
import './data/assets/pms.ts';
import './data/assets/assets.ts';
import mock from './mock';
/* eslint-enable import/extensions */

mock.onAny().passThrough(); // forwards the matched request over network
