<script setup lang="ts">
import {reactive} from "vue";
import { TiTimes } from "vue3-icons/ti";
import { BsToggleOn ,BsToggleOff} from "vue3-icons/bs";
import ModalComponent from "./ModalComponent.vue";

const {isRecording,closeModal, toggleIsRecording , showModal, handleStartRecording} = defineProps(["isRecording","closeModal", "toggleIsRecording" ,"showModal", "handleStartRecording"])
// const isRecording = ref(false);
const selectedDevices = reactive({
  screen: false,
  camera: false,
  microphone: false,
});



</script>


<template>
 <ModalComponent :title="'New Recording'" :showModal="showModal" :closeModal="closeModal">
      <div>
      <h4>Select Recording Options</h4>
        <select >
          <label>Save the recording in</label>
          <option>Select Project</option>
          <option>Hmmm</option>
        </select>
      </div>
      <div class="media-option">
      <label for="screen">
        <input type="checkbox" id="screen" v-model="selectedDevices.screen" />
        Screen
      </label><span @click="selectedDevices.screen = ! selectedDevices.screen"><BsToggleOn  v-if="selectedDevices.screen" color="green"/> <BsToggleOff v-if="!selectedDevices.screen" color="#ccc"/></span>
    </div>
    <div class="media-option">
      <label for="camera">
        <input type="checkbox" id="camera" v-model="selectedDevices.camera" />
        Camera
      </label><span @click="selectedDevices.camera = ! selectedDevices.camera"> <BsToggleOn  v-if="selectedDevices.camera" color="green"/> <BsToggleOff v-if="!selectedDevices.camera" color="#ccc"/></span>
    </div>
    <div class="media-option">
      <label for="mic">
        <input type="checkbox" id="mic" v-model="selectedDevices.microphone" />
        Microphone
      </label> <span @click="selectedDevices.microphone = ! selectedDevices.microphone"> <BsToggleOn  v-if="selectedDevices.microphone" color="green"/> <BsToggleOff v-if="!selectedDevices.microphone" color="#ccc"/></span>
    </div>
      <button @click="handleStartRecording(selectedDevices)">Start Recording</button>
    
  </ModalComponent>
</template>

<style lang="less" scoped>
@import (reference) "../assets/styles/components/button";

 select{
  height:2.4rem;
  width:100%;
  background:var(--color-white);
  border-radius:.24rem;
  font-size:0.765rem;
  margin:0.875rem 0;
 }
  .media-option{
    // margin-bottom:0.175rem;
    padding:0.4rem .8rem;
    display:flex;
    align-items:center;
    justify-content:space-between;

    label{
      font-size:.875rem;
      cursor:pointer;

      input[type="checkbox"]{
        display:none;
      }
    }
   span svg{
      font-size:1.5rem;
      cursor:pointer;
      // color:var(--color-dark);

      // &:checked{
      //   color: green;
      // }
    }
  }
button {
  .btn(#4285f4);
}

</style>
