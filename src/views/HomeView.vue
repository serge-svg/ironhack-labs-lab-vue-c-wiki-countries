<script setup>
    import CountriesList from '../components/CountriesList.vue'
    import CountryDetails from '../components/CountryDetails.vue'
</script>

<template>
  <aside>
    <CountriesList/>
  </aside>

  <main>
    <CountryDetails/>
    <RouterView/>
  </main>
</template>