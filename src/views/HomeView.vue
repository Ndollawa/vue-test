<!-- App.vue -->
<template>
  <div className="page">
   
      <div className="page__content">
        <h2>Recent Projects</h2>
        <table></table>
        {/* <Modal /> */}
      </div>
    </div>

  <!--<div id="app">
    <button @click="startRecording">Start Recording</button>
    <RecordingModal v-if="showModal" @startRecording="handleStartRecording" />
  </div>-->
</template>

<script>
import RecordingModal from "../components/Modal.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    startRecording() {
      this.showModal = true;
    },
    handleStartRecording(selectedDevices) {
      // Save selected devices to local storage
      localStorage.setItem("selectedDevices", JSON.stringify(selectedDevices));

      // Mock backend response
      this.mockBackendResponse();

      // Close the modal
      this.showModal = false;
    },
    mockBackendResponse() {
      // Mock backend response (you can replace this with actual backend logic)
      setTimeout(() => {
        alert("Recording started successfully!");
      }, 1000);
    },
  },
  components: {
    RecordingModal,
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color:black;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
