<!--
Displays the list of links with the country names. 
Each link should be a vue-router-dom router-link which we will use to send the country code (alpha3Code) via the URL.
-->
<template>
    <div class="container">
        <!-- Bootstrap row wrapper div -->
        <div class="row">
            <!-- Countries List (Bootstrap column) -->
            <div class="col-5" style="max-height: 90vh; overflow: scroll">
              <div class="list-group">
                <RouterLink to="/countries/:ABW">Aruba</RouterLink>
                <RouterLink to="/countries/:AFG">Afganistan</RouterLink>
                <RouterLink to="/countries/:AGO">Angola</RouterLink>
                <RouterView />
              </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import { reactive } from 'vue';
  
  const countries = reactive([
  {
    code:  'ca',
    name: 'Canada'
  }, {
    code: 'fr',
    name: 'France'
  }, {
    code: 'it',
    name: 'Italy'
  }, {
    code: 'pr',
    name: 'Portugal'
  }
  ]);

</script>