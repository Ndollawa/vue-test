<script setup lang="ts">
import {ref} from 'vue';

const pageBreadcrum =['Home','About'];
</script>

<template>
    <BreadcrumComponent :breadcrum="pageBreadcrum"/>
  <div className="page">
      <div className="page__content">
        <div class="heading">
          <h2>About</h2>
        </div>
    </div>
    </div>
</template>

<style lang="less" scoped>
 .page {
      padding:1.5rem;

      &__content{
        
      }
 }

</style>