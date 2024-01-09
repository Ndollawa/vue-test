<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app__dashboard">
      <div class="nav">
        <TopNav setToggleMenu={setToggleMenu} setThemeDark={setThemeDark} />
      </div>
      <SideBar />
      <main class="main">
        <div class="main__content"> <RouterView /></div>
      </main>
    </div>

 
</template>

<style lang="less" scoped>
.app__dashboard {
  background-color: var(--color-background);
  width: 100%;
  display: grid;
  margin: 0 auto;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 2.4rem 1fr;

  //   grid-template-areas:
  //     "sidebar nav nav nav"
  //     "sidebar main main main";

  b {
    color: var(--color-dark);
  }

  p {
    color: var(--colo-dark-variant);
  }

  aside {
    height: 100vh;
    background: var(--color-white);
    position: fixed;
    grid-column: 1/-1;
    grid-row: 1/-1;
    left: 0;
    bottom: 0;
    top: 0;
    width: 13rem;

    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-top: 2.8rem;
      height: 5rem;

      &__logo {
        display: flex;
        flex: 0.5;
        font-size: 1.875rem;
        font-weight: 700;
        color: var(--color-dark);
        line-height:0.1875rem;
        cursor: pointer;
        text-transform: capitalize;
        justify-content: flex-start;
        align-items: center;

        @media screen and (max-width:61.988rem) {
          font-size: 1.44rem;
        }

        @media screen and (max-width:47.988rem){
          font-size: 1.5rem;
        }

        & img {
          width: 100%;
          object-fit: cover;
          cursor: pointer;

          @media screen and (min-width:15rem) {
          }
        }

        & strong {
          font-size:4.375rem;
          color: var(--primary-color);

          @media screen and (max-width:47.988rem) {
            font-size: 2rem;
          }
        }
      }
      &__close {
        display: none;

        @media screen and (max-width:47.988rem) {
          display: inline-block;
          cursor: pointer;
        }
      }
    }

    .sidebar {
      height: 86vh;
      position: relative;
      bottom: 0;
      // top: 3rem;

      &__menu {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 90%;
        overflow-x: hidden;
        overflow-y: auto;
        scroll-behavior: smooth;
        scrollbar-width: 4px;

        &--item {
          position: relative;

          &:not(:last-child) {
            // border-bottom: 1px solid var(--color-info-dark);
            box-shadow: 0 0 4px var(--color-light);
          }

          a,
          & > div {
            display: flex;
            color: var(--color-info-dark);
            margin-left: 2rem;
            padding-right: 0.5rem;
            width: 80%;
            align-items: center;
            position: relative;
            height: 3rem;
            transition: 0.3s ease;

            div h3 {
              font-weight: 700;
              align-self: center;
              font-size: 0.7rem;
              width: 100%;

              @media screen and (max-width:61.988rem) {
                display: none;
              }

              @media screen and (max-width:47.988rem) {
                display: inline;
              }
            }
            span {
              font-size: 0.875rem;
              transition: 0.3s ease;
              line-height: 1.2;
              display: flex;
              justify-content: center;
              align-self: center;

              svg {
                font-size: 1rem;
                color: var(--color-info-dark);
                width: 20px;
                margin-right: 5px;
              }
            }

            .toggle__icon {
              position: relative;
              right: 5px;
              width: 15px;
              justify-self: end;

              svg {
                font-size: 10px;
              }
            }

            &.active {
              background-color: var(--color-light);
              color: var(--color-primary);
              margin-left: 0;
              width: 100%;

              &::before {
                content: "";
                display: block;
                width: 6px;
                height: 100%;
                background: var(--color-primary);
              }

              div span,
              div h3 {
                color: var(--color-primary);
                flex-shrink: 1;
                margin-left: calc(1rem - 3px);
              }

              .message__count {
                color: var(--color-white);
              }
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
          div {
            justify-content: space-between;
          }
        }

        .message__count {
          background: red;
          color: var(--color-white);
          padding: 0.125rem 0.625rem;
          font-size: 0.6875rem;
          border-radius: var(--border-radius-1);
        }
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

  @media screen and (max-width:61.988rem){
    grid-template-columns: 7rem auto 23rem;
    width: 94%;
  }

  @media screen and (max-width:47.988rem){
    grid-template-columns: auto 18rem;
    width: 100%;
  }

  .main {
    margin-top: 1.4rem;
    grid-column: 2 /-1;
    grid-row: 2/-1;
    padding-right: 1.5rem;
    min-height: 100vh;

    &__content {
      .page {
        &__header {
          h3 {
            size: 2rem;
          }

          .date {
            display: inline-block;
            background-color: var(--color-light);
            border-radius: var(--border-radius-1);
            margin-top: 1rem;
            padding: 0.5rem 1rem;

            input[type="date"] {
              background: transparent;
              color: var(--color-dark);
              height: 25px;
            }
          }
        }
      }
    }

    @media screen and (max-width:47.988rem) {
      margin-top: 8rem;
      padding: 0 1rem;
    }
  }

  .nav {
    // margin-top: 1.4rem;
    padding: 1rem;
    grid-column: 2/-1;
    .top {
      display: flex;
      justify-content: flex-end;
      gap: 2rem;

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

    @media screen and (max-width:47.988rem) {
      margin: 0 auto 4rem;
      width: 94%;
    }
  }

  @media screen and (max-width:35.988rem){
    margin-top: 8rem;
    padding: 0 1rem;
    grid-template-columns: 1;
  }
}

</style>
