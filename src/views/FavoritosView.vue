<script setup>
import { useFavoritosStore } from '@/store/favoritos'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavoritos = useFavoritosStore()
const { favoritos } = storeToRefs(useFavoritos)
const { remove } = useFavoritos

</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul class="list-group shadow-sm">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="poke in favoritos" :key="poke.id">
            <div>
                {{ poke.name }}
            </div>
            <div>
                <button class="btn btn-sm btn-danger me-2" @click="remove(poke.id)">
                    Eliminar pokemon
                </button>
                <router-link class="btn btn-sm btn-primary" :to="`/pokemons/${poke.name}`">
                    Más informacion
                </router-link>
            </div>
        </li>
    </ul>
</template>