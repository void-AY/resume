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
            <div class="flex flex-col p-6 w-[450px] rounded-md" style="background-color: var(--vt-c-green-light);">
                <div class="flex justify-between">
                    <h1>
                        В этом проекте
                    </h1>
                    <button @click="$emit('close')"><i class="fa-solid fa-xmark fa-lg"></i></button>
                </div>
                <div class="flex items-center py-2">
                    <p>
                        {{ title }}
                    </p>
                </div>
            </div>
        </div>
    </transition>

</template>

<style lang="scss" scoped>
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