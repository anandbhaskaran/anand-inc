<template>
    <v-data-table
        :headers="headers"
        :items="mutualFunds"
        :items-per-page="50"
    />
</template>

<script>
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import axios from '@/plugins/axios';

export default {
    setup() {
        const mutualFunds = ref([]);

        return {
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Currency', value: 'currency' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Invested', value: 'invested' },
                { text: 'Current Value', value: 'currentValue' },
                { text: 'Profit', value: 'profit' },
                { text: 'Profit Percentage', value: 'profitPercentage' },
            ],
            mutualFunds,
        };
    },
    created() {
        axios.get('/api/1/assets/mutualFunds').then((res) => {
            console.log(res.data);
            this.mutualFunds = res.data;
        });
    },
};
</script>
