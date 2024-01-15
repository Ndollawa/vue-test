<script setup lang="ts">
import {reactive} from "vue";
import { TiTimes } from "vue3-icons/ti";
import { BsToggleOn ,BsToggleOff} from "vue3-icons/bs";

const {title,closeModal,showModal} = defineProps(["title","closeModal","showModal"])



</script>


<template>
  <div v-if="showModal" class="overlay">
  <div class="modal">
  
    <div class="modal__content">  
    <div class="modal__content--heading">
    <h3>{{title}}</h3>
    <TiTimes @click="closeModal" size="1rem" />
  </div>
  <slot></slot>
</div>
  </div>
</div>
</template>

<style lang="less" scoped>
@import (reference) "../assets/styles/components/button";
.overlay {
  position:absolute;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0,0.77);
  z-index:90;
  display:flex;
  overflow:hidden;
  align-items:center;
  justify-content:center;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;


  &__content {
  background: var(--color-white);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width:350px;
  user-select:none;

  &--heading{
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid #c3c3c3;
    margin-bottom:1rem;
    padding:6px 12px;

    svg{
      cursor:pointer;
      font-weight:400;
    }

  }
 
}

}


</style>
