<template>
    <div class="StatsItem">
        <p class="StatsItem__descr">{{ item.title }}</p>
        <div class="StatsItem__container" :class="{ 'no-img': !item.img }">
            <img :src="item.img" alt="money" class="StatsItem__container-img" v-if="item.img">
            <p class="StatsItem__container-value">{{ item.value }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const images = import.meta.glob('@/assets/images/*')
interface IStatItem {
    title: string,
    value: string,
    img: string,
}

const props = defineProps<{
    item: IStatItem
}>()

import { useStore } from "@/stores/counter"
const store = useStore()


</script>

<style scoped lang="scss">
.StatsItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    min-width: 107px;

    &__descr {
        color: $statsItemDescr;
        text-align: center;
        font-family: "SF Pro Display Light", sans-serif;
        font-size: 12px;
    }

    &__container {
        border-radius: 11px;
        border: 0.6px solid rgba(255, 255, 255, 0.04);
        background: rgba(31, 43, 57, 0.55);
        padding: 2px 21px 2px 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 47px;

        &.no-img {
            padding: 8px 31px;
        }


        &-value {
            color: #FFF;
            font-family: "AgencyFB", sans-serif;
            font-size: 26px;
        }
    }
}
</style>