<template>
  <div class="d-flex flex-column align-items-center" v-if="country">
      <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`" alt="country flag" />
      <h1>{{ country.alpha3Code }}</h1>
      <div class="d-flex col-8 gap-5 border-bottom">
        <p>Capital</p><p>{{ country.alpha3Code }}</p>
      </div>
      <div class="d-flex col-8 gap-5 border-bottom">
        <p>Area</p><p>{{ country.area }}</p>
      </div>
      <div class="row col-8">
        <div class="col-sm">
          <p>Borders</p>
        </div>
        <div class="col-sm">
          <div class="align-items-center" v-for="border in country.borders" :key="border.name">       
              <RouterLink :to="`/list/${border.alpha3Code}`">{{ border.name }}</RouterLink>
          </div>
        </div>
      </div>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue';

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

<style scoped>
img {
  width: 250px;
}
</style>
