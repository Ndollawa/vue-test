<script setup lang="ts">
 const date = new Date().getUTCSeconds();
</script>

<template>
    <div className="page__header">
      <div className="date mb-5">
        <input type="date" name="" id="" :value="date" />
      </div>
      <h3>{title}</h3>
    </div>
</template>

<style scoped>

</style>