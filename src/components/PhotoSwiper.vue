<script setup>
import { ref } from 'vue';
import Popup from './Popup.vue'
import image1 from '../assets/images/vtk.jpg'
import image2 from '../assets/images/fias.jpg'
const images =
    [
        { id: 1, imageUrl: image1, text: 'Я участвовал в разработке дизайна, писал страницы расписания и оценок' },
        { id: 2, imageUrl: image2, text: 'Я разбирался с поисковой системой ГАР (ФИАС), написать скрипт на питоне который заполняет все данные в БД. После чего развернуть сервер Ubuntu и все протестировав заменил старый вариант на новый.' }
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
            <div class="carousel-item flex justify-center items-center rounded-md" 
                v-for="image in images" 
                :key="image.id"
                :id="image.id">
                <img 
                    :src="image.imageUrl" 
                    alt="Изображение" 
                    class="max-w-full max-h-full object-contain rounded-md hover:scale-[0.99] h-[500px]"
                    id="image_size"
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
@media (min-width: 1024px) {
    #image_size {
        height: 400px;
    }
}
@media (min-width: 1440px) {
    #image_size {
        height: 500px;
    }
}
@media (min-width: 2560px) {
    #image_size {
        height: 700px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 100%;
    }
}

</style>