<script setup>
    import CountriesList from '../components/CountriesList.vue'
</script>

<template>
  <div class="d-flex">
    <aside class="col-md-4 m-4">
      <CountriesList/>
    </aside>

    <main class="col-md-8 m-4">
      <RouterView/>
    </main>
</div>
</template>

<style scoped>

</style>