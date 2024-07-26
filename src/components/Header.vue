<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="background">
        <div class="text">
            <h3>
                Резюме
            </h3>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.background {
    width: 100%;
    height: 40px;
    display: flex;
    position: sticky;
    align-items: center;
    background-color: var(--vt-c-green-light);
}
// @media (min-width: 320px) {
//     .background {
//     width: 100%;
//     height: 30px;
//     display: flex;
//     position: sticky;
//     align-items: center;
//     background-color: var(--vt-c-green-light);
// }
// }
.text {
    margin-left: 5%;
}
.text h3{
    color: white;
    font-size: 22px;
}
</style>