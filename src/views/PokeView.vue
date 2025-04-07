<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useGetData } from '../composables/getData'
import { useFavoritosStore } from '@/store/favoritos'

const route = useRoute()
const router = useRouter()
const useFavoritos = useFavoritosStore()

const { fetchPokemons, data, loading, error } = useGetData()
const { add, findPoke } = useFavoritos

fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

const back = () => {
  router.push('/pokemons')
}
</script>

<template>
  <div class="container mt-4 text-center">

    <!-- Loading -->
    <div v-if="loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2">Cargando información del Pokémon...</p>
    </div>

    <!-- Error -->
    <div class="alert alert-danger mt-3" v-if="error">
      {{ error }} - El Pokémon no existe
    </div>

    <!-- Pokémon encontrado -->
    <div v-if="data && !loading && !error">
      <img 
        :src="data.sprites?.front_default" 
        :alt="`Imagen de ${data.name}`"
        class="img-fluid mb-3 shadow-sm" 
        style="max-width: 200px;"
      />
      <h1 class="mb-3 text-capitalize">El Pokémon es: {{ $route.params.name }}</h1>
      <button class="btn btn-outline-primary me-2" @click="back">
        ← Volver a los Pokémons
      </button>
      <button 
        :disabled="findPoke(data.name)" 
        class="btn btn-outline-primary" 
        @click="add(data)">
        Agregar a favoritos
      </button>
    </div>
  </div>
</template>
