<script lang="ts" setup>
import { ref,reactive} from 'vue'
import { GoKebabHorizontal } from "vue3-icons/go";
import { IoIosRecording } from "vue3-icons/io";
import { SlCamrecorder } from "vue3-icons/sl";
import { TbArrowsSort } from "vue3-icons/tb";
import { BsFilterLeft } from "vue3-icons/bs";
import {ModalComponent as RecordingModal, BreadcrumComponent} from "../components";

const breadcrum = ref(['Snapbyte','My Recordings']);
    const showModal = ref(false);
  const startRecording = ()=> {
    showModal.value = true;
    alert("hhhhhh")
    }
    const handleStartRecording = (selectedDevices) => {
      // Save selected devices to local storage
      localStorage.setItem("selectedDevices", JSON.stringify(selectedDevices));

      // Mock backend response
      mockBackendResponse();

      // Close the modal
      showModal.value = false;
    }
  const mockBackendResponse = () => {
      // Mock backend response (you can replace this with actual backend logic)
      setTimeout(() => {
        alert("Recording started successfully!");
      }, 1000);
    }
 

</script>

<template>
  <BreadcrumComponent :breadcrum="breadcrum"/>
  <div className="page">
      <div className="page__content">
        <div class="heading">
          <h2>My Recordings 45</h2>
          <div class="action-tool">
          <span class="sort"><TbArrowsSort /> By Date</span>

          <span class="sort"><BsFilterLeft /> Add Filter</span>
          <button type="button" class="new-request"><SlCamrecorder/> New Request</button>
      <button type="button" class="start-recording" @click="startRecording"><IoIosRecording/> Start Recording</button>
    </div>
    <RecordingModal v-if="showModal" @startRecording="handleStartRecording" />
        </div>
         <table className="table__bordered table__stripped table__hover table__scrollable">
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
        </table>
      </div>
    </div>

</template>



<style lang="less" scoped>
@import (reference) "../assets/styles/components/button";
     .page {
      padding:1.5rem;

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
        margin-bottom:1rem;

      .action-tool{
        display:flex;
        align-items:center;
        color:var(--color-info-dark);
        font-size:0.675rem;
        justify-content:space-between;
        gap:1.6rem;
        
         .sort{
        border:1px solid #ccc;
        border-radius:16px;
        padding: 0.25rem * 1.5  0.25rem * 3;


      }
      .new-request{
        .btn(red)
      }
      .start-recording{
        .btn(#178af9)
      }
      }
      }
     
table,.table{
padding: 2rem;
table-layout: auto;
width:100%;
font-size:0.725rem;
font-weight:600;

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
