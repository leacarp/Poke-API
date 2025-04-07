<script setup>
// import { useCounterStore } from '@/store/counter'
// import { storeToRefs } from 'pinia';

// const useCounter = useCounterStore()

// const { increment } = useCounter
// const { count, double } = storeToRefs(useCounter)
</script>

<template>
  <div class="container vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
    <h1 class="mb-5">Bienvenido al inicio</h1>
    
    <div class="d-flex flex-column flex-md-row gap-3">
      <a 
      href="https://www.linkedin.com/in/leandro-aguirre/" 
      target="_blank" 
      class="btn btn-primary"
      >
      Ver LinkedIn
    </a>
    
    <a 
    href="https://github.com/leacarp" 
    target="_blank" 
    class="btn btn-dark"
    >
    Ver GitHub
  </a>
</div>
</div>
<!-- <h2>Estado global: {{ count }}</h2>
<h3>Doble: {{ double }}</h3>
<button @click="increment">Incrementar</button> -->
</template>
