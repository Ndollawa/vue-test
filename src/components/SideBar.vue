<template>
    <aside :className={`${showMenu ? "show" : undefined}`}>
      <div className="top">
        <div className="top__logo">
          Portfolio <strong>.</strong>
        </div>

        <div className="top__close" id="close-btn">
          <AiOutlineClose />
        </div>
      </div>
      <div className="sidebar">
        <ul className="sidebar__menu scrollbar">
          <!-- <Menuitem /> -->
        </ul>
        <MenuUserProfile />
      </div>
    </aside>
</template>

<script setup lang="ts">
const showMenu = false;
</script>

<style scoped>

</style>