<template>
    <div class="StatusBar">
        <div class="StatusBar__container">
            <div class="StatusBar__background">
                <div class="StatusBar__container-bar" :style="{ width: `${store.progressBar}%` }"></div>
            </div>
            <div class="StatusBar__label">
                <p class="StatusBar__label-text">{{ store.currentLevelName }} ></p>
                <p class="StatusBar__label-level"><span>Level</span> {{ store.level }}/{{ store.levelThresholds?.length
                    ? store.levelThresholds?.length : '5' }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/counter"

const store = useStore()


</script>

<style scoped lang="scss">
.StatusBar {
    margin-top: 23px;
    padding: 0 20px;

    &__container {
        width: 100%;
        position: relative;
    }

    &__background {
        background-color: #16212E;
        border-radius: 14px;
        height: 16px;
        overflow: hidden; // Это нужно для того, чтобы полоса прогресса не выходила за пределы контейнера
    }

    &__container-bar {
        background: linear-gradient(90deg, #83A054 0%, #C3A46D 43%, #DBBB85 100%, #FFE86E 100%);
        height: 16px;
        border-radius: 14px;
        transition: width 0.3s ease;
    }

    &__label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        margin-top: 5px;

        &-text {
            font-size: 14px;
        }

        &-level {

            font-size: 12px;

            & span {
                color: #5F6974;
                margin-right: 2px;
            }
        }
    }
}
</style>