<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: String,
})
// const close() = defineEmits('close')

</script>

<template>
    <transition name="modal-fade">
        <div class="flex h-full w-full fixed top-0 left-0 justify-center items-center" style="background-color: rgba(0, 0, 0, 0.3);">
            <div class="flex flex-col p-6 w-[700px] bg-green-light rounded-md">
                <div class="flex justify-between">
                    <h1 class="text-3xl">
                        Заголовок
                    </h1>
                    <button @click="$emit('close')">Закрыть</button>
                </div>
                <div class="flex items-center py-2">
                    <p class="text-2xl">
                        {{ title }}
                    </p>
                </div>
            </div>
        </div>
    </transition>

</template>

<style lang="scss">
.modal-fade-enter,
.modal-fade-enter-from,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>