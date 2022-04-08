<template>
    <div>
        <div v-if="isReady">
            <slot />
        </div>
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
    </div>
</template>

<script>

export default {
    name: 'BasePage',
    props: {
        isReady: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>

</style>
