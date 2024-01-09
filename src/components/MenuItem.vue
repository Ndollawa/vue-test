<template>
      <li className="sidebar__menu--item" :key={item.id}>
            <a
              href={item.url}
              :className={` ${item.isActive ? "active" : null}`}
            >
              <div className="d-flex align-content-center g-5">
                <span>{item.icon} </span>
                <h3>{item.title}</h3>
              </div>
            </a>
          </li>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>