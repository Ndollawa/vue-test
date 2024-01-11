
<script setup lang="ts">
import { ref, reactive } from 'vue';
import {HiOutlineFilm ,HiOutlinShare} from 'vue3-icons/hi';
import {IoShareOutline} from 'vue3-icons/io';
import MenuItemComponent from "./MenuItemComponent.vue";

const links = reactive([{
  id:1,
  path:"/",
  name:"My Recordings",
  icon:HiOutlineFilm
},
{
  id:2,
  path:"/requested",
  name:"Requested",
  icon:HiOutlinShare,
}])


</script>


<template>
    <aside>
  
      <div class="sidebar">
        <ul class="sidebar__menu scrollbar">
          <MenuItemComponent v-for="link in links" :key="link.id" :link="link" />
        </ul>
        <!-- <MenuUserProfile /> -->
      </div>
    </aside>
</template>

<style lang="less" scoped>
 aside {
    height: 100vh;
    background: lighten(rgba(0, 0, 0, 0.4),95%);
    position: relative;
    left: 0;
    bottom: 0;
    top: 2px;
    // width: 13rem;

    .sidebar {
      height: 86vh;
      position: relative;
      bottom: 0;
      top: .5rem;

      &__menu {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 90%;
        overflow-x: hidden;
        overflow-y: auto;
        scroll-behavior: smooth;
        scrollbar-width: 4px;
      }

      &__profile {
        position: absolute;
        bottom: 0;
        left: 0;

        a {
          display: flex;
          color: var(--color-info-dark);
          margin-left: 2rem;
          gap: 1rem;
          align-items: center;
          position: relative;
          height: 3.7rem;
          transition: 0.3s ease;

          span {
            font-size: 0.875rem;
            transition: 0.3s ease;

            svg {
              font-size: 0.9375rem;
              color: var(--color-info-dark);
            }
          }
        }
      }

      @media screen and (max-width:47.988rem) {
        background: transparent;
      }
    }

    @media screen and (max-width:61.988rem) {
      grid-template-columns: 7rem auto 23rem;
      width: 94%;

      &:last-child {
        position: relative;
        margin-top: 1.8rem;
      }
    }

    @media screen and (max-width:47.988rem) {
      position: fixed;
      left: -100%;
      background: var(--color-white);
      width: 18rem;
      z-index: 3;
      box-shadow: var(--box-shadow);
      height: 100vh;
      padding-right: var(--card-padding);
      animation: showMenu 0.4s ease forwards;
      display: none;

      &.show {
        display: block;
      }

      @keyframes showMenu {
        to {
          left: 0;
        }
      }

      &:last-child {
        position: absolute;
        margin-top: 1.8rem;
        bottom: 5rem;
      }
    }
  }

</style>