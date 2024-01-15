<script setup lang="ts">
import {reactive} from "vue";
import { TiTimes } from "vue3-icons/ti";
import { BsToggleOn ,BsToggleOff} from "vue3-icons/bs";

const {isRecording,closeModal, toggleIsRecording , handleStartRecording} = defineProps(["isRecording","closeModal", "toggleIsRecording" , "handleStartRecording"])
// const isRecording = ref(false);
const selectedDevices = reactive({
  screen: false,
  camera: false,
  microphone: false,
});



</script>


<template>
  <div class="overlay">
  <div class="modal">
  
    <div class="modal__content">  
    <div class="modal__content--heading">
    <h3>New Recording</h3>
<TiTimes @click="closeModal" size="1rem" />
  </div>

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
}
button {
  .btn(#4285f4);
}
}




</style>
