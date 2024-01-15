<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {ref} from "vue"
import {TopNavComponent,SideBarComponent} from './components'
const toggleMenu = ref(false)
const toggleDarkTheme = ref(false)
const handleToggleMenu = () => {
  toggleMenu.value = !toggleMenu.value;
}
const handleToggleTheme = (state:boolean)=>{
  toggleDarkTheme.value = state;
} 
</script>

<template>
  <div :class="{app__dashboard:true, dark:toggleDarkTheme}">
      <nav class="app__dashboard--nav">
        <div class="logo">Adilo</div>
        <TopNavComponent :toggleMenu="toggleMenu" :handleToggleMenu="handleToggleMenu" :handleToggleTheme="handleToggleTheme" :toggleDarkTheme="toggleDarkTheme" />
      </nav>
      <SideBarComponent />
      <main class="main">
        <div class="main__content"> <RouterView /></div>
      </main>
    </div>

 
</template>

<style lang="less" scoped>
.app__dashboard {
  background-color: var(--color-white);
  width: 100%;
  margin: 0 auto;
  display:grid;
  // grid-template-columns:2.4rem repeat(6,1fr);
    grid-template-areas:
      "nav nav nav nav nav nav nav nav nav nav nav nav"
      "sidebar main main main main main main main main main main main";

  // gap: 1rem;

  b {
    color: var(--color-dark);
  }

  p {
    color: var(--colo-dark-variant);
  }

 
  @media screen and (max-width:61.988rem){
      
    width: 100%;
  }

  @media screen and (max-width:47.988rem){
     grid-template-areas:
      "nav nav nav nav nav nav nav nav nav nav nav nav"
      "main main main main main main main main main main main main";

    width: 100%;
  }

  .main {
    margin-top: 1.4rem;
    grid-area:main;
    padding-right: 1.5rem;
    min-height: 100vh;
    overflow:auto;

    &__content {
 
    }

    @media screen and (max-width:47.988rem) {
      padding: 0 .5rem;
      margin-top:0;
    }
  }

  &--nav {
    width:100%;
    padding: .5rem 2rem;
    grid-area:nav;
    display:flex;
    align-items:center;
    justify-content:space-between;
    z-index:10;
    user-select:none;
    box-shadow: 0 2px 5px  rgba(0, 0, 0, 0.2);
    .logo{
      width:5rem;
    }

    @media screen and (max-width:47.988rem) {
      margin: 0 auto 4rem;
      width: 100%;
    }
  }

  @media screen and (max-width:35.988rem){
    // margin-top: 4rem;
    padding: 0 1rem;
  }
}

</style>
