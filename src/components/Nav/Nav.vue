<template>
    <div class="Nav">

        <div class="Nav__container">
            <div class="Nav__item" :class="{ 'active': isActive }">
                <span class="Nav__item-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_224)">
                            <path d="M0.857147 12L12 0.857147L23.1429 12" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M4.28572 14.5714V23.1429H19.7143V14.5714" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_224">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </span>
                <p class="Nav__item-text">Дом</p>
            </div>
            <div class="Nav__item">
                <span class="Nav__item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_218)">
                            <path
                                d="M2.57143 16.2857H14.5714C15.5182 16.2857 16.2857 15.5182 16.2857 14.5714V2.57142C16.2857 1.62465 15.5182 0.857134 14.5714 0.857134L2.57143 0.857134C1.62465 0.857134 0.857141 1.62465 0.857141 2.57142L0.857141 14.5714C0.857141 15.5182 1.62465 16.2857 2.57143 16.2857Z"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M20.5714 8.05716L21.9086 8.48573C22.1243 8.55555 22.324 8.66746 22.4962 8.81501C22.6684 8.96255 22.8096 9.14278 22.9116 9.34527C23.0137 9.54776 23.0745 9.76847 23.0907 9.99465C23.1068 10.2208 23.078 10.4479 23.0057 10.6629L19.2686 21.96C19.1274 22.3918 18.8206 22.7498 18.4156 22.9555C18.0106 23.1612 17.5405 23.1978 17.1086 23.0572L9.53143 20.5714"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.857143 12H16.2857" stroke="white" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_218">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <p class="Nav__item-text">Карты</p>
            </div>
            <div class="Nav__item">
                <span class="Nav__item-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.635 3.28499C8.17552 3.81292 8.49693 4.52538 8.535 5.27999L11.28 2.54999C11.3743 2.44429 11.4898 2.35971 11.6191 2.3018C11.7483 2.2439 11.8884 2.21396 12.03 2.21396C12.1716 2.21396 12.3117 2.2439 12.4409 2.3018C12.5702 2.35971 12.6857 2.44429 12.78 2.54999L15 4.85999C14.6847 5.01288 14.396 5.21547 14.145 5.45999C13.6107 6.04754 13.3232 6.81823 13.342 7.61215C13.3609 8.40607 13.6847 9.16225 14.2462 9.72379C14.8077 10.2853 15.5639 10.6091 16.3578 10.628C17.1518 10.6468 17.9225 10.3593 18.51 9.82499C18.7545 9.57398 18.9571 9.28529 19.11 8.96999L21.45 11.28C21.5557 11.3743 21.6403 11.4898 21.6982 11.6191C21.7561 11.7483 21.786 11.8884 21.786 12.03C21.786 12.1716 21.7561 12.3117 21.6982 12.4409C21.6403 12.5702 21.5557 12.6857 21.45 12.78L18.72 15.465C19.3113 15.5007 19.8797 15.7065 20.3568 16.0576C20.8339 16.4087 21.1995 16.8901 21.4096 17.4439C21.6196 17.9978 21.6652 18.6006 21.5409 19.1798C21.4166 19.7589 21.1276 20.2899 20.7087 20.7087C20.2899 21.1276 19.7589 21.4166 19.1798 21.5409C18.6006 21.6652 17.9978 21.6196 17.444 21.4095C16.8901 21.1995 16.4087 20.8339 16.0576 20.3568C15.7065 19.8797 15.5008 19.3113 15.465 18.72L12.72 21.45C12.6257 21.5557 12.5102 21.6403 12.3809 21.6982C12.2517 21.7561 12.1116 21.786 11.97 21.786C11.8284 21.786 11.6883 21.7561 11.5591 21.6982C11.4298 21.6403 11.3143 21.5557 11.22 21.45L9 19.14C9.31531 18.9871 9.60399 18.7845 9.855 18.54C10.4338 17.9572 10.7574 17.1683 10.7546 16.3469C10.7518 15.5255 10.4228 14.7388 9.84 14.16C9.25719 13.5812 8.4683 13.2575 7.64689 13.2604C6.82549 13.2632 6.03884 13.5922 5.46 14.175C5.21548 14.426 5.0129 14.7147 4.86 15.03L2.55 12.72C2.44431 12.6257 2.35973 12.5102 2.30182 12.3809C2.24391 12.2517 2.21397 12.1116 2.21397 11.97C2.21397 11.8284 2.24391 11.6883 2.30182 11.5591C2.35973 11.4298 2.44431 11.3143 2.55 11.22L5.28 8.53499C4.52539 8.49692 3.81294 8.17551 3.285 7.63499C2.70816 7.05814 2.38409 6.27577 2.38409 5.45999C2.38409 4.6442 2.70816 3.86183 3.285 3.28499C3.86185 2.70814 4.64422 2.38407 5.46 2.38407C6.27578 2.38407 7.05816 2.70814 7.635 3.28499V3.28499Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <p class="Nav__item-text">Задания</p>
            </div>

            <div class="Nav__item">
                <span class="Nav__item-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_232)">
                            <path
                                d="M15.4286 12.8571C19.689 12.8571 23.1429 11.3221 23.1429 9.42857C23.1429 7.53502 19.689 6 15.4286 6C11.1681 6 7.71428 7.53502 7.71428 9.42857C7.71428 11.3221 11.1681 12.8571 15.4286 12.8571Z"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M7.71428 9.42856V19.7143C7.71428 21.6 11.1429 23.1428 15.4286 23.1428C19.7143 23.1428 23.1429 21.6 23.1429 19.7143V9.42856"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M23.1429 14.5714C23.1429 16.4572 19.7143 18 15.4286 18C11.1429 18 7.71428 16.4572 7.71428 14.5714"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M15.2571 2.57143C13.254 1.33522 10.9223 0.737346 8.57143 0.857147C4.30285 0.857147 0.85714 2.4 0.85714 4.28572C0.85714 5.29715 1.85143 6.20572 3.42857 6.85715"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.42857 17.1428C1.85143 16.4914 0.85714 15.5828 0.85714 14.5714V4.28571"
                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.42857 12C1.85143 11.3486 0.85714 10.44 0.85714 9.42859" stroke="white"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_232">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </span>
                <p class="Nav__item-text">Баланс</p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

const isActive = true

</script>

<style scoped lang="scss">
.Nav {
    background: #060F1B;
    height: 100px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    .active & {
        &__item-text {
            color: #EE4655;
            opacity: 1;
        }

        &__item-icon {
            & svg {
                & path {
                    stroke: #EE4655;
                }
            }
        }
    }

    &__container {
        padding: 20px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;

        &-text {
            color: #EBEBF5;
            opacity: 0.6;
            font-size: 10px;
        }

    }
}
</style>