<script setup lang="ts">

import StatsItem from "./StatsItem.vue"

const statsItem = [
    {
        title: 'Прибыль за тап',
        value: '+1',
        img: 'single-money.png'
    },
    {
        title: 'UC для апа',
        value: '200k',
        img: ''
    },
    {
        title: 'Прибыль в час',
        value: '+0',
        img: 'double-money.png'
    }
]

</script>

<template>
    <div class="Stats">
        <StatsItem v-for="(item, idx) in statsItem" :key="idx" :item="item" />
    </div>
</template>

<style scoped lang="scss">
.Stats {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-top: 27px;

    padding: 0 20px;
}
</style>