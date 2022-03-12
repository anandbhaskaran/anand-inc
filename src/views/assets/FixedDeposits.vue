<template>
    <div>
        <v-row>
            <v-col
                cols="12"
                md="3"
                sm="6"
                order="1"
            >
                <statistics-card-vertical
                    :statistics="formatCurrency(analytics.totalValue)"
                    :change="formatPercentage(analytics.currentProfit/analytics.totalInvested)"
                    :color="totalValue.color"
                    :icon="totalValue.icon"
                    :stat-title="totalValue.statTitle"
                />
            </v-col>

            <v-col
                cols="12"
                md="3"
                sm="6"
                order="2"
            >
                <statistics-card-vertical
                    :statistics="formatCurrency(analytics.currentProfit)"
                    :color="currentProfit.color"
                    :icon="currentProfit.icon"
                    :stat-title="currentProfit.statTitle"
                />
            </v-col>

            <v-col
                cols="12"
                md="3"
                sm="6"
                order="2"
            >
                <statistics-card-vertical
                    :statistics="mutualFunds.length.toString()"
                    :color="fundCount.color"
                    :icon="fundCount.icon"
                    :stat-title="fundCount.statTitle"
                />
            </v-col>
        </v-row>
        <v-data-table
            class="mt-8"
            :headers="headers"
            :items="mutualFunds"
            :items-per-page="50"
        >
            <!-- Name-->
            <template #[`item.bank.name`]="{item}">
                {{ item.bank.name }}
            </template>
            <template #[`item.invested`]="{item}">
                {{ formatCurrency(item.invested) }}
            </template>
            <template #[`item.currentValue`]="{item}">
                {{ formatCurrency(item.currentValue) }}
            </template>
            <template #[`item.profit`]="{item}">
                <span :class="`${getProfitStatus(item.profitPercentage)}--text`">
                    {{ formatCurrency(item.profit) }}
                </span>
            </template>
            <template #[`item.profitPercentage`]="{item}">
                <v-chip
                    :color="getProfitStatus(item.profitPercentage)"
                    :class="`${getProfitStatus(item.profitPercentage)}--text`"
                    class="v-chip-light-bg"
                    small
                >
                    {{ formatPercentage(item.profitPercentage) }}
                </v-chip>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import axios from '@/plugins/axios';
import { mdiCheck, mdiCurrencyUsd, mdiLabelVariantOutline } from '@mdi/js';
import StatisticsCardVertical from '@/components/statistics-card/statistics-card-vertical.vue';

export default {
    components: { StatisticsCardVertical },
    setup() {
        const mutualFunds = ref([]);
        const analytics = ref([]);

        const totalValue = {
            statTitle: 'Total Value',
            icon: mdiLabelVariantOutline,
            color: 'primary',
            statistics: '0',
            change: '+0%',
        };

        const currentProfit = {
            statTitle: 'Current Profit',
            icon: mdiCurrencyUsd,
            color: 'success',
            statistics: '0',
            change: '+0%',
        };

        const fundCount = {
            statTitle: 'No. of Investments',
            icon: mdiCheck,
            color: 'warning',
            statistics: 'ok',
            change: '+0%',
        };

        const formatCurrency = (number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);

        const formatPercentage = (number) => {
            const percentString = Number(number)
                .toLocaleString('en-In', {
                    style: 'percent',
                    minimumFractionDigits: 2,
                });
            return number > 0 ? `+${percentString}` : percentString;
        };

        const getProfitStatus = (profit) => {
            if (profit < 0) {
                return 'error';
            }

            return 'success';
        };

        return {
            headers: [
                { text: 'Bank', value: 'bank.name' },
                { text: 'Name', value: 'name' },
                { text: 'Invested', value: 'invested' },
                { text: 'Current Value', value: 'currentValue' },
                { text: 'Profit', value: 'profit' },
                { text: 'Profit Percentage', value: 'profitPercentage' },
            ],
            totalValue,
            currentProfit,
            fundCount,
            mutualFunds,
            analytics,
            formatCurrency,
            formatPercentage,
            getProfitStatus,
        };
    },
    created() {
        axios.get('/api/1/assets/fixedDeposits').then((res) => {
            console.log(res.data);
            this.mutualFunds = res.data.holdings;
            this.analytics = res.data.analytics;
        });
    },
};
</script>
