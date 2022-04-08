<template>
    <div>
        <welcome-card />
        <p class="text-2xl font-weight-semibold">
            Your KPI
        </p>

        <v-row v-if="loaded">
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
                    :statistics="holdings.length.toString()"
                    :color="fundCount.color"
                    :icon="fundCount.icon"
                    :stat-title="fundCount.statTitle"
                />
            </v-col>
        </v-row>
        <div v-else class="text-center mt-12">
            <v-progress-circular
                :size="70"
                :width="7"
                color="primary"
                indeterminate
            />
            <p class="font-weight-semibold text-xl mt-8 mb-5">
                Fetching the live value of your assets
            </p>
        </div>
        <div>
            <p class="todo_title">
                Assets that are not updated:
            </p>
            <ul>
                <li>Pension Funds (approx valuation: 50L)</li>
                <li>Commodities (approx valuation: 15L)</li>
                <li>Prepaid Expenses (approx valuation: 3.5L )</li>
                <li>Locked capital (approx valuation: 1.5L )</li>
                <li>Crypto currencies (approx valuation: 1L)</li>
            </ul>
        </div>
    </div>
</template>

<script>
import WelcomeCard from '@/components/WelcomeCard.vue';
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import axios from '@/plugins/axios';
import { mdiCheck, mdiCurrencyUsd, mdiLabelVariantOutline } from '@mdi/js';
import StatisticsCardVertical from '@/components/statistics-card/statistics-card-vertical.vue';

export default {
    components: { WelcomeCard, StatisticsCardVertical },
    setup() {
        const holdings = ref([]);
        const analytics = ref([]);
        const loaded = ref(false);

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
                { text: 'Name', value: 'name' },
                { text: 'Invested', value: 'invested' },
                { text: 'Current Value', value: 'currentValue' },
                { text: 'Profit', value: 'profit' },
                { text: 'Profit Percentage', value: 'profitPercentage' },
            ],
            totalValue,
            currentProfit,
            fundCount,
            holdings,
            analytics,
            loaded,
            formatCurrency,
            formatPercentage,
            getProfitStatus,
        };
    },
    created() {
        axios.get('/api/1/assets').then((res) => {
            console.log(res.data);
            this.holdings = res.data.holdings;
            this.analytics = res.data.analytics;
            this.loaded = true;
        });
    },
};
</script>

<style scoped>
.todo_title{
  margin-top: 45px;
  font-weight: bold;
  font-size: 16px;
}
</style>
