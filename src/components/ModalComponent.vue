<script setup lang="ts">
import {ref} from "vue";

const  selectedDevices = ref({
        screen: false,
        camera: false,
        microphone: false,
      })
  
 
   const requestPermission = async()=> {
      try {
        // Logic to request permission for selected devices
        await navigator.mediaDevices.getUserMedia(selectedDevices.value);
        // Save selected devices to local storage
        localStorage.setItem("selectedDevices", JSON.stringify(selectedDevices.value));
        // Emit an event to start recording in the parent component
        $emit("startRecording", selectedDevices.value);
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
      <label>
        <input type="checkbox" v-model="selectedDevices.value.screen" />
        Screen
      </label>
      <label>
        <input type="checkbox" v-model="selectedDevices.value.camera" />
        Camera
      </label>
      <label>
        <input type="checkbox" v-model="selectedDevices.value.microphone" />
        Microphone
      </label>
      <button @click="requestPermission">Start Recording</button>
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
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
}
button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
}




</style>
