<script setup lang="ts">


const images = import.meta.globEager('@/assets/images/*')
const images2 = import.meta.glob('@/assets/images/*')
// Создаем объект для быстрых ссылок на изображения
const imageMap = {}
for (const path in images) {
    imageMap[path.replace('/src', '.')] = images[path].default
}

const statsItem = [
    {
        title: 'Прибыль за тап',
        value: '+1',
        img: imageMap['./assets/images/single-money.png']
    },
    {
        title: 'UC для апа',
        value: '200k',
        img: ''
    },
    {
        title: 'Прибыль в час',
        value: '+0',
        img: imageMap['./assets/images/double-money.png']
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