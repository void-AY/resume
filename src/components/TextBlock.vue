<template>
    <div style="display: flex; flex-direction: column; gap: 40px;">
        <div class="flex flex-col gap-3">
            <h1 data-aos="fade-down" class="text-2xl font-medium">Обо мне </h1>
            <h3 data-aos="fade-up" class="text-lg">Я - junior frontend разработчик. Обучаюсь на 4 курсе в колледже.</h3>  
        </div>
        <div>
            <h1 data-aos="fade-up">Технологии которые изучаю</h1>
            <ul data-aos="fade-up" class="imageTex">
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
        <div> 
            <h1 data-aos="fade-up">Проекты в которых я уже получал опыт</h1>
            <ul class="ul_op" style="list-style: disc; display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
                <li data-aos="fade-right">
                    Разработка приложения на React Native для колледжа, включающего оценки и расписание.
                </li>
                <li data-aos="fade-right">
                    Интеграция и разработка поисковой системы для адресной базы ГАР (ФИАС) с использованием Manticore Search.
                </li>
                <li data-aos="fade-right">
                    Опыт развертывания серверов на Ubuntu с настройкой NGINX.
                </li>
                <li data-aos="fade-right">
                    Обновление и внедрение изменений на продакшн сервере для замены устаревшей поисковой системы.
                </li>
            </ul>
        </div>
        <div>
            <h1 data-aos="fade-up">Примеры</h1>
            <PhotoSwiper />         
        </div>
        <div class="flex flex-col gap-3">
            <h1 data-aos="fade-down">Достижения</h1>
            <h3 data-aos="fade-up">Мой опыт работы над проектами включал срочные задачи, где важно было быстро адаптироваться и достигать результата. Несмотря на трудности и отсутствие опыта, все поставленные задачи были выполнены.</h3>
        </div>
    </div>
</template>

<script setup>
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
.ul_op {
    li {
        font-size: 14px;
        margin-left: 10px;
    }
}

@media (min-width: 768px) {
    .ul_op {
    li {
        font-size: 20px;
        margin-left: 0px;
    }
}
}
@media (min-width: 2560px) {
    .ul_op {
    li {
        font-size: 24px;
        margin-left: 0px;
    }
}
}
</style>