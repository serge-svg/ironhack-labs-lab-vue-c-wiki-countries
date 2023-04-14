<!-- Displaying the basic navbar with the LAB name -->
<script setup>
  const props = defineProps({
    title: String
  });
</script>

<template>
    <nav class="navbar navbar-expand-lg text-light bg-primary">
        <h2 class="ms-5">{{ title }}</h2>
    </nav>
</template>