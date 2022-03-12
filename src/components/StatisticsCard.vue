<template>
    <v-card>
        <v-card-title class="align-start">
            <span class="font-weight-semibold">Statistics Card</span>
            <v-spacer />
        </v-card-title>

        <v-card-subtitle class="mb-8 mt-n5">
            <span class="font-weight-semibold text--primary me-1">Total 48.5% Growth</span>
            <span>😎 this month</span>
        </v-card-subtitle>

        <v-card-text>
            <v-row>
                <v-col
                    v-for="data in statisticsData"
                    :key="data.title"
                    cols="6"
                    md="3"
                    class="d-flex align-center"
                >
                    <v-avatar
                        size="44"
                        :color="data.color? data.color: 'success'"
                        rounded
                        class="elevation-1"
                    >
                        <v-icon
                            dark
                            color="white"
                            size="30"
                        >
                            {{ data.icon }}
                        </v-icon>
                    </v-avatar>
                    <div class="ms-3">
                        <p class="text-xs mb-0">
                            {{ data.title }}
                        </p>
                        <h3 class="text-xl font-weight-semibold">
                            {{ data.total }}
                        </h3>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js';

export default {
    setup() {
        const statisticsData = [
            {
                title: 'Invested',
                total: '245k',
                icon: mdiTrendingUp,
                color: 'primary',
            },
            {
                title: 'Current Value',
                total: '12.5k',
                icon: mdiAccountOutline,
                color: 'success',
            },
            {
                title: 'Profit',
                total: '1.54k',
                icon: mdiLabelOutline,
                color: 'warning',
            },
            {
                title: 'Profit Percentage',
                total: '$88k',
                icon: mdiCurrencyUsd,
                color: 'info',
            },
        ];

        const resolveStatisticsIconVariation = (data) => {
            if (data === 'Invested') return { icon: mdiTrendingUp, color: 'primary' };
            if (data === 'Current Value') return { icon: mdiAccountOutline, color: 'success' };
            if (data === 'Profit') return { icon: mdiLabelOutline, color: 'warning' };
            if (data === 'Profit Percentage') return { icon: mdiCurrencyUsd, color: 'info' };

            return { icon: mdiAccountOutline, color: 'success' };
        };

        return {
            statisticsData,
            resolveStatisticsIconVariation,

            // icons
            icons: {
                mdiDotsVertical,
                mdiTrendingUp,
                mdiAccountOutline,
                mdiLabelOutline,
                mdiCurrencyUsd,
            },
        };
    },
};
</script>
