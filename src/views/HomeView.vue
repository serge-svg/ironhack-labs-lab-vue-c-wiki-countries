<script setup>
    import CountriesList from '../components/CountriesList.vue'
</script>

<template>
  <aside>
    <CountriesList/>
  </aside>

  <main>
    <RouterView/>
  </main>
</template>