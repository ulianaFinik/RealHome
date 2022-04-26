<script></script>

<template>
  <main-container> 
    <template v-slot:header>
        <Header />
    </template>
    <main> 
        <router-view /> <!-- Отвечает за многостраничность -->
    </main>
    <template v-slot:footer>
          <Footer />
    </template>
  </main-container>
</template>


<style src="./scss/style.scss"></style>
