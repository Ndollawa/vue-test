<template>
  <div>
    <video ref="videoElement" controls></video>
    <canvas ref="thumbnailCanvas" style="display: none;"></canvas>
    <label>Name: <input v-model="videoInfo.name" type="text" /></label>
    <button @click="startRecording">Start Recording</button>
    <button @click="stopRecording">Stop Recording</button>
    <button @click="saveToLocalStorage">Save to Local Storage</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaRecorder: null,
      recordedChunks: [],
      videoInfo: {
        name: '',
        dateCreated: '',
        thumbnailDataUrl: '',
      },
    };
  },
  methods: {
    async startRecording() {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true,
        });

        this.$refs.videoElement.srcObject = stream;

        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.recordedChunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);

          this.$refs.videoElement.srcObject = null;

          this.recordedChunks = [];
          
          this.generateThumbnail();
          this.videoInfo.dateCreated = new Date().toLocaleString();
          this.saveToLocalStorage(blob);
        };

        this.mediaRecorder.start();
      } catch (error) {
        console.error('Error starting recording:', error);
      }
    },
    stopRecording() {
      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.stop();
      }
    },
    generateThumbnail() {
      const videoElement = this.$refs.videoElement;
      const canvasElement = this.$refs.thumbnailCanvas;
      const canvasContext = canvasElement.getContext('2d');

      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;

      canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

      this.videoInfo.thumbnailDataUrl = canvasElement.toDataURL('image/png');
    },
    saveToLocalStorage(videoBlob) {
      const name = this.videoInfo.name || 'untitled';
      const fileName = `${name}_${Date.now()}.webm`;

      const videoData = {
        name: this.videoInfo.name,
        dateCreated: this.videoInfo.dateCreated,
        thumbnailDataUrl: this.videoInfo.thumbnailDataUrl,
      };

      localStorage.setItem(fileName, JSON.stringify(videoData));

      const blobUrl = URL.createObjectURL(videoBlob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(blobUrl);
    },
  },
};
</script>

<style scoped>
/* Add styling for your component here */
</style>
