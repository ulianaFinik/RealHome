<script>
  import { defineComponent } from 'vue';
  import { menuList } from './constants/menuLinks'

  export default defineComponent({
      data() {
      return {
        headerMenuList: menuList,
      }
    },
  })

</script>

<template>

  <nav v-if="false" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand  logo" href="/"><img src="../assets/img/logo.png" alt="logo"></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse collapse-fontsize navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item  menu-link" v-for="(menu, index) in headerMenuList" :key="index"> <!-- Теперь в меню при каждой итерации доступно и name и path -->
            <router-link  v-html="menu.name" class="nav-link active" aria-current="page" :to="menu.path">
            </router-link>
          </li>
        </ul>
      </div>
      <div class="social">
        <a href="#"><img src="../assets/img/icons/f.png" alt="/"><img></a>
        <a href="#"><img src="../assets/img/icons/g.png" alt="/"><img></a>
        <a href="#"><img src="../assets/img/icons/i.png" alt="/"><img></a>
        <a href="#"><img src="../assets/img/icons/p.png" alt="/"><img></a>
      </div>
</nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid  container">
      <a class="navbar-brand  logo" href="/"><img src="../assets/img/logo.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item  menu-link" v-for="(menu, index) in headerMenuList" :key="index"> <!-- Теперь в меню при каждой итерации доступно и name и path -->
            <router-link  v-html="menu.name" class="nav-link active" aria-current="page" :to="menu.path">
            </router-link>
          </li>
        </ul>
    </div>
 
      <div class="social">
        <a href="#"><img src="../assets/img/icons/f.png" alt="/"><img></a>
        <a href="#"><img src="../assets/img/icons/g.png" alt="/"><img></a>
        <a href="#"><img src="../assets/img/icons/i.png" alt="/"><img></a>
        <a href="#"><img src="../assets/img/icons/p.png" alt="/"><img></a>
      </div>
  </div>
</nav>
</template>

<style>

</style>
