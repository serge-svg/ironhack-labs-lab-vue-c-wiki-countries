<template>
  <div class="app bg-white">
    <Navbar title="WikiCountries" />
    <HomeView/>
    <RouterView />
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import HomeView from './views/HomeView.vue';
  
/*
  function getCountries() {
    return countries.map(country => {
      const { alpha3Code, area, _id, capital, name: { common }, borders, alpha2Code } = country;
      return {
        alpha3Code,
        alpha2Code: alpha2Code.toLowerCase(),
        area, 
        _id,
        capital,
        name: common,
        borders: borders.map(countryBorder => {
          const { name: { common }} = countries.find(co => co.alpha3Code === countryBorder);
          return {
            alpha3Code: countryBorder,
            name: common, 
          }
        })
      }
    });
  }
*/
</script>

<style scoped>

</style>