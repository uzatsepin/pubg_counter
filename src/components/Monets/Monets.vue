<template>
    <div class="Monets">
        <div class="Monets__container">
            <img src="../../assets/images/monets-icon.png" alt="monets" class="Monets__container-img">
            <div class="Monets__container-value">{{ store.totalValue }}</div>
        </div>

        <StatusBar />
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/counter"
import StatusBar from "../StatusBar/StatusBar.vue"

const store = useStore();




</script>

<style scoped lang="scss">
.Monets {
    margin-top: 20px;

    &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &-img {
            display: block;
        }

        &-value {
            color: $white;
            font-size: 53px;
            font-family: "SF Pro Display Bold", sans-serif;
            font-weight: 600;
        }
    }
}
</style>