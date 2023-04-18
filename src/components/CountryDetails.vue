<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';
// add country as props
const route = useRoute()
const countries = ref([]);
const country = ref(null);

watch(() => route.params.alpha3Code,
    newCode => {
        country.value = getCountryByCode(newCode)
    }
)

function getCountryByCode(code){
    return countries.value.filter(country => country.alpha3Code === code)[0];
}


fetch("https://ih-countries-api.herokuapp.com/countries")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    countries.value = getCountries(data);
    country.value = getCountryByCode(route.params.alpha3Code);
    console.log(country.value);
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

<template>
<div v-if="country">
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" alt="country flag" />
    <!-- user country -->
    <div v-for="border in country.borders" :key="border.name">
        <RouterLink :to="`/list/${border.alpha3Code}`">{{ border.name }}</RouterLink>
    </div>
</div>
</template>

