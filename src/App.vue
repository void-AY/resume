<template>
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->
  <div>
    <header>
      <div class="wrapper">
        <Header />
      </div>
    </header>

    <main style="justify-content: center; display: flex; flex-direction: column; align-content: center;">
      <div class="imgMain"></div>
      <div class="backgroundMain">
        <TextBlock/>
      </div>
    </main>
    <footer>
      <div style="margin: 0% 9%; padding: 2% 5%;">
        <div class="flex flex-col gap-2">
          <div>
            <a class="text-slate-600 hover:text-slate-100" href="https://vk.com/yaalexeu" target="_blank">VK</a> 
          </div>
          <div>
            <a class="text-slate-600 hover:text-slate-100" href="https://github.com/void-AY" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import TextBlock from '@/components/TextBlock.vue';
</script>

<style lang="scss" scoped>
.backgroundMain {
  /* width: 90vw; */
  /* height: 100vh; */
  margin: 0px 9%;
  padding: 40px;
  border-radius: 6px;
  align-content: center;
  background-color: var(--vt-c-green-dark);
  display: flex;
  flex-direction: column;
}
.imgMain {
  display: flex;
  background-image: url('./assets/img/Samolet.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; /* cвойство определяет, будет ли фоновое изображение прокручиваться вместе с остальной частью страницы или будет фиксированным */
  /* width: 100vw; */
  height: 100vh; 
  margin: 0;
  /* возможна также и короткая запись данных свойств */
  /* background: url("path_to_my_image.jpg") center center no-repeat  fixed;
  background-size: cover; */
}
</style>
