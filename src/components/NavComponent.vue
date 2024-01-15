<script setup lang="ts">
import { ref ,watch} from 'vue';
import { RiArrowDownSLine } from "vue3-icons/ri";
import {links} from "../utils/routes";


const {toggleMenu} = defineProps(["toggleMenu"]);

</script>

<template>
    <div :class="{show:toggleMenu,'nav__menu':true}">
        <ul class="nav__menu--items">
            <li v-for="link in links" :key="link.id" :class="{'has-submenu':link?.children,'nav__menu--items__links':true}">
                <router-link active-class="active" :to="link.path"><div>{{link.name}}</div>
<RiArrowDownSLine v-if="link?.children" /></router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>

.nav__menu{
    width:100%;
    overflow:none;
   

    
    @media screen and (max-width:47.988rem) {
      display: none;
    }

    &--items{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:var(--color-dark);

        &__links{
            list-style: none;
            margin: 0 0.16rem;
            padding-top:3px;
              &.has-submenu{
                    display:flex;
                    font-size:12px;
                    margin-left:4px;
                    align-items:center;
                    justify-content:space-between;

                  @media screen and (max-width:47.988rem){
                    width:100%;

                  }
                }

            a {
            color: var(--color-info-dark);
            display:inline-flex;
            align-items:center;
            justify-content:space-between;
            font-size: 0.765rem;
            text-decoration: none;
            text-transform: capitalize;
            text-transform: capitalize;

            }
            &:has(a.active),&:active,&:hover{
            border-top: 3px solid #178af9;
            color: var(--color-info-dark);
            transition: 0.3s;
                a{
                    font-weight:500;
                }
                }
              
        }
     
    }
    @media screen and (max-width:47.988rem){
     &.show {
        display: block;
        position: absolute;
        background-color: var(--color-background);
        padding: 0;
        width: 15rem;
        top: 4rem;
        right: 1rem;
        border-radius: 1.2rem;
        align-items: center;
        user-select: none;
        transition:.3s ease-in-out;
      }
 &--items {
        display: block;
        width:100%;
        background-color:var(--color-background);
        
        li {
          margin: 0;
          padding: 15px 25px;
          height: 3rem;
          color: var(--color-white);
          display: flex;
          align-items: center;
          text-transform: capitalize;

          &:hover {
            background-color: var(--color-background);

            a {
              color: var(--color-dark);
            }
          }

          &:first-child:hover {
            border-top-left-radius: 1.2rem;
            border-top-right-radius: 1.2rem;
          }

     
        }
      }
           
        }
    
}


</style>