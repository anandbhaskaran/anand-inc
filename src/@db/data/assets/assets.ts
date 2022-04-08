import * as mock from '../../mock';
// @ts-ignore
import { asset } from '@/@db/data/models/models.ts';
// @ts-ignore
import { getCurrentAssetHoldings } from '@/@db/data/assets/currentAssets.ts';
// @ts-ignore
import { fixedDepositHoldings } from '@/@db/data/assets/fixedDeposits.ts';
// @ts-ignore
import { mfHoldings } from '@/@db/data/assets/mutualFunds.ts';
// @ts-ignore
import { pmsHoldings } from '@/@db/data/assets/pms.ts';
// @ts-ignore
import { getStockHoldings } from '@/@db/data/assets/stocks.ts';
// @ts-ignore
import { getResponse } from '@/@db/data/util.ts';

mock.default.onGet('/api/1/assets').reply(async () => {
    const holdings : asset[] = [
        ...await getCurrentAssetHoldings(),
        ...fixedDepositHoldings,
        ...mfHoldings,
        ...pmsHoldings,
        ...await getStockHoldings(),
    ];
    return [200, getResponse(holdings)];
});
