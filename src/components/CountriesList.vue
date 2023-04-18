<!--
Displays the list of links with the country names. 
Each link should be a vue-router-dom router-link which we will use to send the country code (alpha3Code) via the URL.
-->
<template>
  <div class="container">
    <!-- Bootstrap row wrapper div -->
    <div class="row">
      <!-- Countries List (Bootstrap column) -->
      <div v-for="country in countries" :key="country._id">
        <RouterLink :to="`/list/${country.alpha3Code}`">{{ country.name }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let countries = ref([]);

fetch("https://ih-countries-api.herokuapp.com/countries")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    countries.value = getCountries(data);
    console.log(countries);
  })
  .catch((err) => console.log(err));


function getCountries(countries) {
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
        const { name: { common } } = countries.find(co => co.alpha3Code === countryBorder);
        return {
          alpha3Code: countryBorder,
          name: common,
        }
      })
    }
  });
};


</script>