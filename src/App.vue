<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" class="me-2">
        <strong>PokeAPI</strong>
      </router-link>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pokemons">Pokemons</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/favoritos">Favoritos</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <RouterView />
  </div>
</template>
