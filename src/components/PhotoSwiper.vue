<script setup>
import { ref } from 'vue';
import Popup from './Popup.vue'
import image1 from '../assets/images/vtk.jpg'
import image2 from '../assets/img/Samolet.jpg'
const images =
    [
        { id: 1, imageUrl: image1, text: 'В данном проекте я участвовал в разработке дизайна, писал страницы расписания и оценок' },
        { id: 2, imageUrl: image2, text: 'Описание2' }
    ]

const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element && carousel.value) {
        carousel.value.scrollTo({
            left: element.offsetLeft,
            behavior: 'smooth'
        })
    }
}
const openPopup = (id) => {
    const image = images.find(img => img.id === id);
    if (image) {
        currentText.value = image.text;
        showPopup.value = true;
    }

}
const carousel = ref(null);
const showPopup = ref(false)
const currentText = ref('')
</script>

<template>
    <div class="container w-full" style="margin-top: 30px">
        <div ref="carousel" class="carousel w-full rounded-md gap-2.5">
            <div class="carousel-item flex justify-center items-center" 
                v-for="image in images" 
                :key="image.id"
                :id="image.id">
                <img 
                    :src="image.imageUrl" 
                    alt="Изображение" 
                    style="height:600px"
                    class="max-w-full max-h-full object-contain rounded-md hover:opacity-90"
                    @click="openPopup(image.id)"
                >
            </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2">
            <button v-for="image in images" :key="image.id" @click="smoothScroll(image.id)" class="btn btn-xs">
                {{ image.id }}
            </button>
        </div>
        <Popup v-show="showPopup" :title="currentText" @close="showPopup = false" />
    </div>
</template>

<style scoped lang="scss">

</style>