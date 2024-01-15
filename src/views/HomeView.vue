<script lang="ts" setup>
import { ref,reactive,onMounted} from 'vue'
import { GoKebabHorizontal } from "vue3-icons/go";
import { IoIosRecording } from "vue3-icons/io";
import { SlCamrecorder } from "vue3-icons/sl";
import { TbArrowsSort } from "vue3-icons/tb";
import { BsFilterLeft } from "vue3-icons/bs";
import { CgMediaLive } from "vue3-icons/cg";
import {ModalComponent as RecordingModal, BreadcrumComponent} from "../components";

const breadcrum = ref(['Snapbyte','My Recordings']);
    const showModal = ref(false), showFileModal = ref(false), isRecording = ref(false);
  const triggerRecording = ()=> {
    openModal()
    }

const openModal = ()=>{
  showModal.value = true
}
const closeModal = ()=>{
  showModal.value = false
}
const toggleIsRecording = (state:boolean)=>{
  isRecording.value = state
}
var mediaRecorder = null,
  audio = null,
  mixedStream = null,
  stream = null,
  recorder = null;
const recordedChunks = [];
var videoElement = null;
var canvasElement = null;
var canvasContext = null;
var videoInfo = {
  name: "",
  dateCreated: "",
  thumbnailDataUrl: "",
};

const records = ref([]);

const handleStartRecording = async (selectedDevices) => {
  try {
    toggleIsRecording(true);
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: selectedDevices.screen,
      audio: selectedDevices.microphone,
    });
    audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
      },
    });

    setupVideoFeedback();
  } catch (error) {
    console.error("Error starting recording:", error);
    toggleIsRecording(false);
  }
};

const setupVideoFeedback = () => {
  if (stream) {
    const livePreview = document.querySelector(".live__preview");
    videoElement = document.createElement("video");
    videoElement.srcObject = stream;
    livePreview.innerHTML = "";
    livePreview.appendChild(videoElement);
    videoElement.play();
  } else {
    console.warn("Stream session", "No stream available");
  }
};

const startRecording = async () => {
  await setupStream();
  if (stream && audio) {
    mixedStream = new MediaStream([...stream.getTracks(), ...audio.getTracks()]);
    recorder = new MediaRecorder(mixedStream);
    recorder.ondataavailable = handleDataAvailable;
    recorder.onstop = handleStop;
    recorder.onstart = () => {
      recorder.start(200);
      console.log("Recording started");

    };
    toggleIsRecording(true);
  } else {
    console.warn("Stream session", "No stream available");
  }
};

const handleDataAvailable = (e) => {
  recordedChunks.push(e.data);
};

const stopRecording = () => {
  recorder.stop();
  toggleIsRecording(false);
};

const handleStop = (e) => {
  const blob = new Blob(recordedChunks, {
    type: "video/mp4",
  });

  const url = URL.createObjectURL(blob);
  videoInfo.thumbnailDataUrl = generateThumbnail(url);
showFileModal.value = true;
  saveToLocalStorage(blob);
  toggleIsRecording(false);
  showModal.value = true;
};

const generateThumbnail = (videoUrl) => {
  const videoElement = document.createElement("video");
  videoElement.src = videoUrl;
  videoElement.addEventListener("loadeddata", () => {
    canvasElement = document.createElement("canvas");
    canvasContext = canvasElement.getContext("2d");
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    const thumbnailDataUrl = canvasElement.toDataURL("image/png");
    videoInfo.thumbnailDataUrl = thumbnailDataUrl;
  });
  return videoInfo.thumbnailDataUrl;
};

const saveToLocalStorage = (videoBlob) => {
  const name = videoInfo.name || "untitled";
  const fileName = `${name}_${Date.now()}.webm`;

  const recordData = {
    name: videoInfo.name,
    dateCreated: new Date().toLocaleString(),
    thumbnailDataUrl: videoInfo.thumbnailDataUrl,
    fileName,
  };

  records.value.push(recordData);
  localStorage.setItem(fileName, JSON.stringify(recordData));

  const blobUrl = URL.createObjectURL(videoBlob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(blobUrl);
};

const sortByDate = () => {
  records.value.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
};

onMounted(() => {
  // Load records from local storage on component mount
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const recordData = JSON.parse(localStorage.getItem(key));
    if (recordData) {
      records.value.push(recordData);
    }
  }
});

</script>

<template>
  <div className="page">
      <div className="page__content">
  <div v-if="!isRecording">
        <BreadcrumComponent :breadcrum="breadcrum"/>
        <div class="heading">
          <h2>My Recordings 45</h2>
          <div class="action-tool">
                <span class="sort"><TbArrowsSort /> By Date</span>

                <span class="sort"><BsFilterLeft /> Add Filter</span>
                <button type="button" class="new-request"><SlCamrecorder/> New Request</button>
                <button type="button" class="start-recording" @click="triggerRecording"><IoIosRecording/> Start Recording</button>
          </div>
        </div>
        <RecordingModal v-if="showModal" :isRecording="isRecording" :toggleIsRecording="toggleIsRecording" :closeModal="closeModal" :handleStartRecording="handleStartRecording" />
        <div class="table_responsive"><table className="table__bordered table__stripped table__hover table__scrollable">
          <thead>
            <th>
             Recordings
            </th>
            <th>Title</th>
            <th>Views</th>
            <th>Size</th>
            <th>Last Modified</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>
               <video src="" controls></video>
              </td>
              <td>
                  <div>
                    <h4> My Journey to Timbaktu</h4>
                    <p>Here are some dummy texts to add to my projects.</p>
                </div></td>
              <td>56.2k</td>
              <td>153Mb</td>
              <td><GoKebabHorizontal/></td>
            </tr>
          </tbody>
        </table></div> 
  </div>
       <div v-if="isRecording">
        <div class="live">
          <div class="live__stream">
          <CgMediaLive size="1rem" color="red" />  Live preview
          </div>
          <div class="live__preview">
          </div>
          <button @click="[isRecording? stopRecording : startRecording]" :disabled="!isRecording">{{isRecording? "Stop Recording" : "Start Recording"}}</button>
          <div class="shimmering-bar"></div>

    <video ref="videoElement" controls></video>
    <canvas ref="thumbnailCanvas" style="display: none;"></canvas>

      <!-- <tr v-for="record in records" :key="record.fileName">
              <td>{{ record.name }}</td>
              <td>{{ record.dateCreated }}</td>
              <td>
                <img :src="record.thumbnailDataUrl" alt="Thumbnail" style="max-width: 50px; max-height: 50px;">
              </td>
              <td>
                <button @click="downloadRecording(record.fileName)">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button @click="sortAndCloseModal">Sort by Date</button>
        <button @click="showModal = false">Close</button> -->
  </div>
  </div>
      </div>
    </div>

</template>



<style lang="less" scoped>
@import (reference) "../assets/styles/components/button";

     .page {
      padding:1.5rem;
      width:100%;

   @media screen and (max-width:47.988rem){
         padding:0rem;

        }

        &__header {
          h3 {
            size: 2rem;
          }

          .date {
            display: inline-block;
            background-color: var(--color-light);
            border-radius: var(--border-radius-1);
            margin-top: 1rem;
            padding: 0.5rem 1rem;

            input[type="date"] {
              background: transparent;
              color: var(--color-dark);
              height: 25px;
            }
          }
        }
      }
      .heading{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:0.875rem;
        margin-bottom:1rem;

        @media screen and (max-width:47.988rem){
          display:block;

        }
        h2{
          margin-bottom:.5rem
        }
      .action-tool{
        display:flex;
        align-items:center;
        color:var(--color-info-dark);
        font-size:0.675rem;
        justify-content:space-between;
        margin-bottom:0.875rem;
        gap:1.6rem;

         .sort{
        border:1px solid #ccc;
        border-radius:16px;
        padding: 0.25rem * 1.5  0.25rem * 3;
        margin-bottom:.5rem;


      }
      .new-request{
        .btn(red)
      }
      .start-recording{
        .btn(#4285f4)
      }
  
       @media screen and (max-width:47.988rem){
          flex-wrap:wrap;
          gap:2px;
        }
      }
   
      }
            .live{
          padding:0.875rem;
          display:grid;

          svg{
  position: relative;
  width: 15px;
  height: 15px;
  background-color: #ff6347;
  border-radius: 50%;
  animation: ping-animation 1s ease-in-out infinite;

@keyframes ping-animation {
  0%, 100% {
    transform: scale(1); 
    opacity: 1; 
  }
  25%, 50% {
    transform: scale(1.2); 
    opacity: 0.6; 
  }
  75% {
    transform: scale(0.8); 
    opacity: 0; 
  }
}

          }

        &__stream{
          margin-bottom:0.875rem;
        }

        &__preview{
          width:90%;
          content:"";
          position: relative;
          height: clamp(40vh, 60vh ,80vh);
          margin-bottom:1.5rem;
          overflow: hidden;
          background: linear-gradient(90deg, #023a5ee8, #023a5e, #023a5ee8);
          background-size: 200% 100%;
          animation: shimmer 2s infinite linear;
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
        }
        button{
        .btn(#4285f4);
      border-radius:4rem;
      justify-self:center;
      width:10rem;
  
        }
      }
.table__responsive{
  overflow:scroll;
  width:100%;
}
table,.table{
padding: 2rem;
table-layout: auto;
width:100%;
font-size:0.725rem;
font-weight:600;
overflow-x:scroll;

thead,tbody,th,tfoot,td,tr{
    padding: auto;
    text-align:left;
}

td,th{
   text-wrap: wrap;
   text-overflow: ellipsis;
   padding: 0.025rem * 1.5;

}
tbody{
tr{
   
    &:hover{
        background: #00000026;
    }
}}
&.table__scrollable{}
&.table__stripped{

    tbody tr:nth-child(even){
        background-color: var(--color-info-variant);
    }
    tbody tr:nth-child(odd){
        background-color: var(--color-light);
    }
}


&.table__responsive{
overflow: auto;
scroll-behavior: smooth;

&::-webkit-scrollbar{
  width: 10px;
    height: 20px;
}
&::-webkit-scrollbar-thumb{
    border-radius: 100vh;
        background: #f7f4ed;
}
&::-webkit-scrollbar-thumb:hover{
    background: #c0a0b9;
        width: 15px;
}
&::-webkit-scrollbar-track{
    background: #e0cbcb;
        border-radius: 100vh;
        border: 3px solid #f6f7ed;
}
}
&.table__bordered{   
// border: 1px solid var(--color-dark);
// border-collapse: collapse;

thead,
    tbody,
    th,
    tfoot,
    td,
    tr {

padding:.5rem 1rem;    }

}
td{
  font-size:0.625rem;
  font-weight:400;
}
}

</style>
