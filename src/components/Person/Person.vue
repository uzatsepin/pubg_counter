<template>
    <div class="main" @click="handleClick">
        <div class="background"></div>
        <div class="foreground">
            <img ref="originalImageRef" src="../../assets/images/person.png" class="foreground-image active">
            <img ref="newImageRef" src="../../assets/images/person-smile.png" class="foreground-image">
        </div>
        <div class="info">
            <div class="info__left">
                <img class="info__left-img" src="../../assets/images/energy.svg" alt="">
                <div class="info__left-text">
                    <span class="info__left-text-value">400</span>
                    <span class="info__left-text-value">/</span>
                    <span class="info__left-text-value">600</span>
                </div>
            </div>
            <div class="info__right">
                <img class="info__right-img" src="../../assets/images/boost.svg" alt="">
                <div class="info__right-text">Boost</div>
            </div>
        </div>
        <div v-for="flyImage in flyImages" :key="flyImage.id" class="fly-image"
            :style="{ left: `${flyImage.left}px`, top: `${flyImage.top}px`, transform: `translate(${flyImage.endX - flyImage.left}px, ${flyImage.endY - flyImage.top}px)` }">
            +1
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/counter'
import { ref } from 'vue'

const flyImages = ref<any[]>([])
const clickCount = ref(0)
const isOriginalImage = ref(true)
const originalImageRef = ref<HTMLElement | null>(null)
const newImageRef = ref<HTMLElement | null>(null)

const store = useStore()

const addFlyImage = (event: MouseEvent) => {
    const target = document.querySelector('.Monets__container-value')

    if (!target) return

    const mainRect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()

    const flyImage = {
        id: Date.now(),
        left: event.clientX - mainRect.left,
        top: event.clientY - mainRect.top,
        endX: targetRect.left + targetRect.width / 2 - mainRect.left,
        endY: targetRect.top + targetRect.height / 2 - mainRect.top
    }

    flyImages.value.push(flyImage)

    setTimeout(() => {
        flyImages.value = flyImages.value.filter((img) => img.id !== flyImage.id)
    }, 2000)
}

const handleClick = (event: MouseEvent) => {
    addFlyImage(event)
    store.incrementCounter()

    clickCount.value++

    if (clickCount.value === 5) {
        if (originalImageRef.value && newImageRef.value) {
            if (isOriginalImage.value) {
                originalImageRef.value.classList.remove('active')
                newImageRef.value.classList.add('active')
            } else {
                newImageRef.value.classList.remove('active')
                originalImageRef.value.classList.add('active')
            }
            isOriginalImage.value = !isOriginalImage.value // Переключаем изображение
        }
        clickCount.value = 0
    }
}
</script>

<style scoped lang="scss">
.main {
    height: 100vh;
    width: 100%;
    overflow-x: hidden; // Чтобы фон не выходил за пределы
    position: relative;
}

.background {
    position: absolute;
    top: 25%;
    left: 50%;
    width: 130%;
    height: 130%;
    background-image: url("../../assets/images/bg-rounded-2.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: translate(-50%, -50%); // Центрирование изображения
    animation: rotateBackground 20s linear infinite;
}

.foreground {
    position: absolute;
    top: 22%;
    left: 50%;
    width: 250px;
    height: 430px;
    transform: translate(-50%, -50%); // Центрирование изображения
    display: flex;
    justify-content: center;
    align-items: center;
}

.foreground-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    transition: opacity 0.5s;
}

.foreground-image.active {
    opacity: 1;
}

.info {
    position: absolute;
    bottom: 50%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__left {
        display: flex;
        gap: 4px;
        align-items: center;

        &-img {
            display: block;
        }

        &-text {
            font-family: "SF Pro Display Semibold", sans-serif;
            font-size: 20px;
            font-weight: 600;
        }
    }

    &__right {
        display: flex;
        gap: 4px;
        align-items: center;

        &-img {
            display: block;
        }

        &-text {
            font-family: "SF Pro Display Semibold", sans-serif;
            font-size: 20px;
            font-weight: 600;
        }
    }
}

.fly-image {
    position: absolute;
    font-size: 34px;
    color: #fff;
    animation: flyUp 2s ease-in-out forwards;
    pointer-events: none;
    font-family: "SF Pro Display SemiBold", sans-serif;
    overflow: visible;
}

@keyframes flyUp {
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }

    100% {
        opacity: 0;
        transform: translateY(-400px);
    }
}

@keyframes rotateBackground {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>
