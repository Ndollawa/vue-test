<script setup lang="ts">
import {ref,reactive} from "vue";
import { IoToggle,IoToggleOutline } from "vue3-icons/io5";
import ModalComponent from "./ModalComponent.vue";

const name = ref(""),description = ref("");
const {getSubmitData}= defineProps([" getSubmitData"])
   
</script>


<template>
 <ModalComponent :title="'Save Recording'" :showModal="showModal" :closeModal="closeModal" >
   <h2>Recording Modal</h2>
      <form @submit.prevent="getSubmitData({name,description})">
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" required />

        <label for="description">Description:</label>
        <textarea v-model="description" id="description" required></textarea>

        <button type="submit">Submit</button>
      </form>
      <button @click="closeModal">Close Modal</button>

 </ModalComponent>
</template>

<style lang="less" scoped>
@import (reference) "../assets/styles/components/button";





</style>
