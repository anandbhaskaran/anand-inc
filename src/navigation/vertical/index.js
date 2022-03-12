import { mdiHomeOutline, mdiLabel } from '@mdi/js';

export default [
    {
        title: 'Home',
        icon: mdiHomeOutline,
        to: 'home',
    },
    {
        subheader: 'Assets',
    },
    {
        title: 'Current Assets',
        icon: mdiLabel,
        to: 'current-assets',
    },
    {
        title: 'Fixed Deposit',
        icon: mdiLabel,
        to: 'fixed-deposits',
    },
    {
        title: 'Stocks',
        icon: mdiLabel,
        to: 'stocks',
    },
    {
        title: 'Mutual Funds',
        icon: mdiLabel,
        to: 'mutualFunds',
    },
    {
        title: 'PMS',
        icon: mdiLabel,
        to: 'pms',
    },
];
