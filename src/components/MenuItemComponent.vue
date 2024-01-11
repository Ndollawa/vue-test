<script setup lang="ts">
// import { definedProps } from 'vue';

const {link} = defineProps(["link"]);
</script>

<template>
      <li class="sidebar__menu--item">
            <router-link active-class="active" :to="link.path">
              <div class="">
                <span><component :is="link.icon" /> </span>
                <h3>{{link.name}}</h3>
              </div>
            </router-link>
          </li>
</template>

<style lang="less" scoped>
        .center(){
            display: flex;
            justify-content:center;
            align-items: center;
          }
          
        .sidebar__menu--item {
          position: relative;
          padding:1rem;

          &:not(:last-child) {
            box-shadow: 0 0 4px var(--color-light);
          }
          a:extend(.center){
           justify-content:center;

            div{
              display:flex;
              align-items:center;
              justify-content: space-between;
            }
          }
          a,
          & > div {
            display: flex;
            color: var(--color-info-dark);
            // margin-left: 2rem;
            padding-right: 0.5rem;
            // width: 100%;
            gap:10px;
            align-items: center;
            position: relative;
            height: 2.5rem;
            transition: 0.3s ease;

            div h3 {
              font-weight: 700;
              align-self: center;
              font-size: 0.625rem;
              // width: 100%;

              @media screen and (max-width:61.988rem) {
                display: none;
              }

              @media screen and (max-width:47.988rem) {
                display: inline;
              }
            }
            span:extend(.center) {
              font-size: 0.875rem;
              transition: 0.3s ease;
              line-height: 1.2;
           

              svg {
                font-size: 1rem;
                color: var(--color-info-dark);
                width: 20px;
                margin-right: 5px;
              }
            }

            // .toggle__icon {
            //   position: relative;
            //   right: 5px;
            //   width: 15px;
            //   justify-self: end;

            //   svg {
            //     font-size: 10px;
            //   }
            // }

            &.active {
              background-color: rgba(0, 0, 0, 0.12);
              margin-left: 0;
              width: 100%;
              border-radius:.5rem;

          


            }

            @media screen and (max-width:61.988rem) {
              width: 5.6rem;
            }

            @media screen and (max-width:47.988rem) {
              width: 100%;
              height: 3.4rem;
            }
          }

          &:hover {
            color: var(--color-primary);

            div span {
              margin-left: 0.5rem;
            }
          }
          ul {
            display: block;
            margin: 0;

            li {
              margin: 5px 10px;
              padding: 0;
              width: 100%;
              display: flex;
              justify-content: flex-end;
              height: 30px;

              a {
                padding: auto;
                height: 15px;

                h3 {
                  font-size: 0.7rem;
                }
              }
            }
          }
         
        }

</style>