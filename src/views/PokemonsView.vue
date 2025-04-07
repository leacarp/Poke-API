<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/getData'

const { fetchPokemons, data, loading, error } = useGetData()

fetchPokemons('https://pokeapi.co/api/v2/pokemon/')
</script>

<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Pokémons</h1>

    <!-- Botones de paginación -->
    <div class="d-flex justify-content-center mb-4 gap-3">
      <button 
        :disabled="!data?.previous" 
        class="btn btn-outline-success" 
        @click="fetchPokemons(data.previous)"
      >
        ← Atrás
      </button>

      <button 
        :disabled="!data?.next" 
        class="btn btn-outline-primary" 
        @click="fetchPokemons(data.next)"
      >
        Siguiente →
      </button>
    </div>

    <!-- Cargando -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2">Cargando información...</p>
    </div>

    <!-- Error -->
    <div class="alert alert-danger mt-3 text-center" v-if="error">
      {{ error }} - La URL es incorrecta
    </div>

    <!-- Lista de pokémons -->
    <div v-if="data">
      <ul class="list-group shadow-sm">
        <li 
          v-for="poke in data.results" 
          :key="poke.name" 
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <router-link :to="`pokemons/${poke.name}`" class="text-decoration-none fw-semibold text-dark">
            {{ poke.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
