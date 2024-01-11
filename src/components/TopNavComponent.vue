<script setup lang="ts">
import {computed} from "vue";
import NavComponent from "./NavComponent.vue"
import userImage from "../assets/images/users/pic1.jpg";

const {handleToggleTheme,handleToggleMenu} = defineProps(["handleToggleTheme","handleToggleMenu","toggleMenu"])

</script>

<template>
      <div class="top mb-5">
          <div class="top__nav">
           <NavComponent/>
          </div>
          <div class="top__line">|</div>
          <div class="mobile__menu" id="menu-btn">
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              @click="handleToggleMenu"
            >
              <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" />
            </svg>
          </div>
          <div class="theme__toggler">
            <span
             :class="{active:toggleMenu}"
              @click="handleToggleTheme(false)"
            >
              <BsSunFill />
            </span>
            <span
           
              @click="handleToggleTheme(true)"
            >
              <BsFillMoonStarsFill />
            </span>
          </div>
          <div class="profile">
            <div class="info">
              <p>
                Hey <strong>Ndubuisi</strong>
              </p>
              <small class="text__muted">Admin</small>
            </div>
            <div class="profile__photo">
              <img
                :src="userImage"
                width={40}
                height={40}
                alt="profile avatar"
              />
            </div>
          </div>
        </div>
</template>

<style lang="less" scoped>
   .top {
      display: flex;
      justify-content: flex-end;
      align-items:center;
      flex-grow:1;

      gap: 2rem;

      &__line{
        content:"|";
        font-weight: 600;
        color: #c3c3c3;
      }

      &__nav{
        width:(100%/12)*6;
      }
      .mobile__menu {
        display: none;

        span,
        svg {
          color: var(--color-dark);
          @media screen and (max-width:47.988rem) {
            font-size: 1.5rem;
          }
        }

        @media screen and (max-width:47.988rem){
          display: inline-block;
          background: transparent;
          cursor: pointer;
          color: var(--color-dark);
          position: absolute;
          left: 1rem;
          font-size: 1.5rem;
        }
      }

      .theme__toggler {
        background: var(--color-light);
        transform: scale(0.7);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2.4rem;
        width: 6.2rem;
        cursor: pointer;
        border-radius: var(--border-radius-1);

        span {
          font-size:0.875rem;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          &.active {
            background: var(--color-primary);
            color: var(--color-white);
            border-radius: var(--border-radius-1);
            height: 90%;
            width: 80%;

            svg,
            i {
              color: var(--color-white) !important;
            }
          }
        }

        @media screen and (max-width:47.988rem){
          // position: absolute;
          width: 5.4rem;
          margin-right: 5px;
        }
      }

      .profile {
        display: flex;
        gap: 2rem;
        text-align: right;

        .info {
          @media screen and (max-width:47.988rem) {
            display: none;
          }
        }
      }

      @media screen and (max-width:47.988rem) {
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        padding: 0 0.8rem;
        height: 4rem;
        gap: 0;
        background: var(--color-white);
        margin: 0;
        z-index: 2;
        box-shadow: 0 1rem 1rem var(--color-light);
        width: 100%;
      }
    }
</style>