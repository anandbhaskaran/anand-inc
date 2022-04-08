<template>
    <base-page :is-ready="isReady">
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
                    :statistics="investment.length.toString()"
                    :color="fundCount.color"
                    :icon="fundCount.icon"
                    :stat-title="fundCount.statTitle"
                />
            </v-col>
        </v-row>
        <v-data-table
            class="mt-8"
            :headers="headers"
            :items="investment"
            :items-per-page="50"
        >
            <!-- Name-->
            <template #[`item.assetManager`]="{item}">
                <div class="d-flex align-center">
                    <div>
                        <v-img
                            :src="item.assetManager.logo"
                            height="40"
                            width="40"
                        />
                    </div>
                    <div class="d-flex flex-column ms-3">
                        <span class="d-block font-weight-semibold text-truncate text--primary">
                            {{ item.assetManager.name }}
                        </span>
                        <span class="text-xs">{{ item.assetManager.notes }}</span>
                    </div>
                </div>
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
    </base-page>
</template>

<script>
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import axios from '@/plugins/axios';
import { mdiCheck, mdiCurrencyUsd, mdiLabelVariantOutline } from '@mdi/js';
import StatisticsCardVertical from '@/components/statistics-card/statistics-card-vertical.vue';
import BasePage from '@/components/BasePage.vue';

export default {
    components: { BasePage, StatisticsCardVertical },
    setup() {
        const investment = ref([]);
        const analytics = ref([]);
        const isReady = ref(false);

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
                { text: 'Bank', value: 'assetManager' },
                { text: 'Invested', value: 'invested' },
                { text: 'Current Value', value: 'currentValue' },
                { text: 'Profit', value: 'profit' },
                { text: 'Profit Percentage', value: 'profitPercentage' },
            ],
            totalValue,
            currentProfit,
            fundCount,
            investment,
            analytics,
            isReady,
            formatCurrency,
            formatPercentage,
            getProfitStatus,
        };
    },
    created() {
        axios.get('/api/1/assets/currentAssets').then((res) => {
            console.log(res.data);
            this.investment = res.data.holdings;
            this.analytics = res.data.analytics;
            this.isReady = true;
        });
    },
};
</script>
