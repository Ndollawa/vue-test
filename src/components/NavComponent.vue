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
    @media screen and (max-width:47.988rem){
    &.show {
                display: block;
                position: absolute;
                background-color: var(--color-background);
                padding: 0;
                width: 15rem;
                top: 5rem;
                right: 1rem;
                border-radius: 1.2rem;
                align-items: center;
                user-select: none;


            }

            &__links{
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

                    //    &:last-child:hover{
                    //     border-bottom-left-radius: 1.2rem;
                    //     border-bottom-right-radius: 1.2rem;
                    //    }
                }
            }
        }
    }}}
}

</style>