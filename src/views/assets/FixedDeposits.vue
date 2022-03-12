<template>
    <v-data-table
        :headers="headers"
        :items="currentAssets"
        :items-per-page="50"
    />
</template>

<script>
import { ref } from '@vue/composition-api';
import axios from '@/plugins/axios';

export default {
    setup() {
        const currentAssets = ref([]);

        return {
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Bank', value: 'bank.name' },
                { text: 'Invested', value: 'invested' },
                { text: 'Current Value', value: 'currentValue' },
                { text: 'Profit', value: 'profit' },
                { text: 'Profit Percentage', value: 'profitPercentage' },
            ],
            currentAssets,
        };
    },
    created() {
        axios.get('/api/1/assets/fixedDeposits').then((res) => {
            console.log(res);
            this.currentAssets = res.data;
        });
    },
};
</script>
