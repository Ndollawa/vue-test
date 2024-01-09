<!-- components/RecordingModal.vue -->
<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Select Recording Options</h2>
      <label>
        <input type="checkbox" v-model="selectedDevices.screen" />
        Screen
      </label>
      <label>
        <input type="checkbox" v-model="selectedDevices.camera" />
        Camera
      </label>
      <label>
        <input type="checkbox" v-model="selectedDevices.microphone" />
        Microphone
      </label>
      <button @click="requestPermission">Start Recording</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDevices: {
        screen: false,
        camera: false,
        microphone: false,
      },
    };
  },
  methods: {
    async requestPermission() {
      try {
        // Logic to request permission for selected devices
        await navigator.mediaDevices.getUserMedia(this.selectedDevices);
        // Save selected devices to local storage
        localStorage.setItem("selectedDevices", JSON.stringify(this.selectedDevices));
        // Emit an event to start recording in the parent component
        this.$emit("startRecording", this.selectedDevices);
      } catch (error) {
        console.error("Permission denied:", error);
        // Handle permission denied scenario (show an error message, etc.)
      }
    },
  },
};
</script>

<style>
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
}

.modal-content {
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
</style>
