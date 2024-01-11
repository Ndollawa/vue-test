<script setup lang="ts">
import { ref } from 'vue';
import {links} from "../utils/routes";


const showMenu = defineProps(["toggleMenu"]);
</script>

<template>
    <div class="nav">
        <ul class="nav__links">
            <li v-for="link in links" :key="link.id" :class="{'has-submenu':link?.children,'nav__links--items':true}">
                <router-link active-class="active" :to="link.path">{{link.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.nav{
    width:100%;
    
    &__links{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:var(--color-dark);

        &--items{
            list-style: none;
            margin: 0 0.16rem;
            padding-top:3px;
              &.has-submenu::after{
                    content:"v";
                    display:inline-flex;
                    font-size:12px;
                    margin-left:4px;
                    align-items:center;
                    justify-content:center;
                  
                }

            a {
            color: var(--color-info-dark);
            font-size: 0.8rem;
            text-decoration: none;
            text-transform: capitalize;
            text-transform: capitalize;

            }
            &:has(a.active),&:active,&:hover{
            border-top: 3px solid #178af9;
            color: var(--color-info-dark);
            transition: 0.3s;
                a{
                    font-weight:600;
                }
                }
              
        }
     
    }
}

</style>