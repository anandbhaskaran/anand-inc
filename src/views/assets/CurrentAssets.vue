<template>
  <v-data-table
    :headers="headers"
    :items="currentAssets"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
import { ref } from '@vue/composition-api'
import axios from '@/plugins/axios'

export default {
  setup() {
    const currentAssets = ref([])

    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Bank', value: 'bank' },
        { text: 'Invested', value: 'invested' },
        { text: 'Current Value', value: 'currentValue' },
      ],
      currentAssets,
    }
  },
  created() {
    axios.get('/api/1/assets/currentAssets').then(res => {
      this.currentAssets = res.data
    })
  },
}
</script>
