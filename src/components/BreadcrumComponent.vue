<script setup lang="ts">
 const {breadcrum} = defineProps(["breadcrum"])
</script>

<template>
    <div class="breadcrum">
        <ul class="breadcrum__list">
            <li v-for="item in breadcrum" :key="item">{{item}}</li>
           
        </ul>
    </div>
</template>


<style lang="less" scoped>
.breadcrum{
    width:100%;
    padding: 0.425rem 1rem;

    &__list{
        display: flex;
        align-items:center;
        font-size:.675rem;
        gap:10px;

        &:not(:last-child):after{
            content:">";
            line-height:1.2;

        }
        &:is(:last-child){
            color:#178af9;
        }
    }

}

</style>