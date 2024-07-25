<template>
    <div style="display: flex; flex-direction: column; gap: 40px;">
        <div class="flex flex-col gap-3" data-aos="fade-up">
            <h1 class="text-2xl font-medium">Обо мне </h1>
            <h3 class="text-lg">Я - Junior фронтенд разработчик. Начал интеросоваться программированием в 9 классе, поэтому пошел учиться в колледж на программиста.</h3>  
        </div>
        <div data-aos="fade-up">
            <h1 class="text-2xl font-medium">Технологии которые изучаю</h1>
            <ul class="imageTex">
                <li>
                    <img src="../assets/img/JS.png" alt="" class="imageTex-icon">    
                </li>
                <li>
                    <img src="../assets/img/TS.png" alt="" class="imageTex-icon">  
                </li>
                <li>
                    <img src="../assets/img/Tailwindcss.png" alt="" class="imageTex-icon">  
                </li>
                <li>
                    <img src="../assets/img/Vue.png" alt="" class="imageTex-icon">
                </li>
                <li>
                   <img src="../assets/img/React.png" alt="" class="imageTex-icon">  
                </li>
            </ul>
        </div>
        <div data-aos="fade-up"> 
            <h1 class="text-2xl font-medium">Проекты в которых я уже получал опыт</h1>
            <ul style="list-style: disc; display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
                <li>
                    Разработка приложения на React Native для колледжа, включающего оценки и расписание.
                </li>
                <li>
                    Интеграция и разработка поисковой системы для адресной базы ГАР (ФИАС) с использованием Manticore Search.
                </li>
                <li>
                    Опыт развертывания серверов на Ubuntu с настройкой NGINX.
                </li>
                <li>
                    Обновление и внедрение изменений на продакшн сервере для замены устаревшей поисковой системы.
                </li>
            </ul>
        </div>
        <div>
            <h1 class="text-2xl font-medium">Примеры</h1>
            <PhotoSwiper />
        </div>
        <div class="flex flex-col gap-3">
            <h1 class="text-2xl font-medium">Достижения</h1>
            <h3 class="text-lg">Мой опыт работы над проектами включал срочные задачи, где важно было быстро адаптироваться и достигать результата. Несмотря на трудности и отсутствие опыта, все поставленные задачи были выполнены.</h3>
        </div>
    </div>
</template>

<script setup >
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

import PhotoSwiper from './PhotoSwiper.vue'
</script>

<style lang="scss" scoped>
.imageTex {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;
    padding-top: 20px;
    &-icon {
        display: block;
        max-width: 100%;  /* сжимаем, если изображение слишком велико */
        height: 100px;
        object-fit: contain;
        pointer-events: none;
        user-select: none;
    }
}

</style>