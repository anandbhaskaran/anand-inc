<template>
    <v-data-table
        :headers="headers"
        :items="stocks"
        :items-per-page="50"
    />
</template>

<script>
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import axios from '@/plugins/axios';

export default {
    setup() {
        const stocks = ref([]);

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
            stocks,
        };
    },
    created() {
        axios.get('/api/1/assets/stocks').then((res) => {
            console.log(res.data);
            this.stocks = res.data;
        });
    },
};
</script>
