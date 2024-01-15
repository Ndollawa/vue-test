<script setup lang="ts">
import {reactive} from "vue";
import { IoToggle,IoToggleOutline } from "vue3-icons/io5";


const  selectedDevices = reactive({
        screen: false,
        camera: false,
        microphone: false,
      })
  console.log(selectedDevices)
 
   const requestPermission = async()=> {
      try {
        // Logic to request permission for selected devices
        console.log(selectedDevices)
        await navigator.mediaDevices.getUserMedia(selectedDevices);
        // Save selected devices to local storage
        localStorage.setItem("selectedDevices", JSON.stringify(selectedDevices));
        // Emit an event to start recording in the parent component
        $emit("startRecording", selectedDevices);
      } catch (error) {
        console.error("Permission denied:", error);
        // Handle permission denied scenario (show an error message, etc.)
      }
    }
</script>


<template>
  <div class="overlay">
  <div class="modal">
    <div class="modal-content">
      <h2>Select Recording Options</h2>
      <div>
        <select >
          <option>Select Project</option>
          <option>Hmmm</option>
        </select>
      </div>
      <div class="media-option">
      <label for="screen">
        <input type="checkbox" id="screen" v-model="selectedDevices.screen" />
        Screen
      </label><span @click="selectedDevices.screen = ! selectedDevices.screen"><IoToggle v-if="selectedDevices.screen" color="green"/> <IoToggleOutline v-if="!selectedDevices.screen"/></span>
    </div>
    <div class="media-option">
      <label for="camera">
        <input type="checkbox" id="camera" v-model="selectedDevices.camera" />
        Camera
      </label><span @click="selectedDevices.camera = ! selectedDevices.camera"> <IoToggle v-if="selectedDevices.camera" color="green"/> <IoToggleOutline v-if="!selectedDevices.camera"/></span>
    </div>
    <div class="media-option">
      <label for="mic">
        <input type="checkbox" id="mic" v-model="selectedDevices.microphone" />
        Microphone
      </label> <span @click="selectedDevices.microphone = ! selectedDevices.microphone"> <IoToggle v-if="selectedDevices.microphone" color="green"/> <IoToggleOutline v-if="!selectedDevices.microphone"/></span>
    </div>
      <button @click="requestPermission">Start Recording</button>
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
  align-items:center;
  justify-content:center;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

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
    }
  }
}
button {
  .btn(#748849);
}
}




</style>
