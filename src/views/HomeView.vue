<!-- App.vue -->
<template>
  <div className="page">
      <div className="page__content">
        <h2>Recent Projects</h2>
         <table className="table__bordered table__stripped table__hover table__scrollable">
          <thead>
            <th>
              <input type="checkbox" />
            </th>
            <th>S/N</th>
            <th>Image</th>
            <th>Title</th>
            <th>Date Published</th>
            <th>Status</th>
            <th>Actions</th>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>

  <!--<div id="app">
    <button @click="startRecording">Start Recording</button>
    <RecordingModal v-if="showModal" @startRecording="handleStartRecording" />
  </div>-->
</template>

<script lang="ts" setup>
import RecordingModal from "../components/Modal.vue";


    const showModal = false;
 
  const startRecording = ()=> {
    showModal = true;
    }
    const handleStartRecording = (selectedDevices) => {
      // Save selected devices to local storage
      localStorage.setItem("selectedDevices", JSON.stringify(selectedDevices));

      // Mock backend response
      mockBackendResponse();

      // Close the modal
      showModal = false;
    }
  const mockBackendResponse = () => {
      // Mock backend response (you can replace this with actual backend logic)
      setTimeout(() => {
        alert("Recording started successfully!");
      }, 1000);
    }
  // components: {
  //   RecordingModal,
  // }

</script>

<style>

table,.table{
padding: 2rem;
table-layout: auto;
width:100%;

thead,tbody,th,tfoot,td,tr{
    padding: auto;
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
border: 1px solid var(--color-dark);
border-collapse: collapse;

thead,
    tbody,
    th,
    tfoot,
    td,
    tr {
        border: 1px solid var(--color-dark);
    }

}
}

</style>
