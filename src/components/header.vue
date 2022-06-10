<template>
  <div>
    <div class="header">
      <div class="container">
        <router-link :to="`/${this.male}`" class="header__logo">
          <img src="@/assets/img/imperia.png" alt="">
        </router-link>
        <Breadcrumb :bread="bread"/>
        <div class="header__service">
          <button class="login" @click="isModal=!isModal">
            <img src="@/assets/img/user.png" alt="">
          </button>
          <router-link to="/cart" class="cart">
            <img src="@/assets/img/cart.png">
          </router-link>
        </div>
        <div class="registration" :class="{'active':isModal}">
          <div class="form__registration">
            <div class="form">
              <div class="logo">
                <img src="@/assets/img/imperia.png" alt="">
              </div>
              <div class="form__reg">
                <button class="In" @click="isColor=!isColor" :class="{'color':!isColor}">Sign in</button>
                <button class="Up show" v-on:click="isColor=!isColor" :class="{'color':isColor}">Sign up</button>
              </div>
              <form action="">
                <div class="signUp" :class="{'show':isColor}">
                  <input type="text" placeholder="Your name" name="name">
                  <input type="email" placeholder="Your email" name="email">
                  <input type="password" placeholder="Your password" name="password">
                  <button type="submit">Sign Up</button>
                </div>
              </form>
              <form action="">
                <div class="signIn" :class="{'show':!isColor}">
                  <input type="email" placeholder="Your email" name="email">
                  <input class="password" type="password" placeholder="Your password" name="password">
                  <router-link to="#" class="forget">Forget password?</router-link>
                  <button type="submit">Sign In</button>
                </div>
              </form>
            </div>
            <div class="image">
              <img src="@/assets/img/model.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from './breadcrumb.vue'

  export default {
  components: { 
    Breadcrumb 
    },
    data(){
      return {
        male: this.$route.params.slug,
        isModal: false,
        isColor: true,
        bread:[
          // {n: 'Главная', l: '/'},
          {n: 'О нас', l: '/aboutus'},
          {n: 'Сотрудничество', l: '/cooperation'},
          {n: 'Мужчины', l: '/man'},
          {n: 'Женщины', l: '/woman'},
        ]
      }
    },
    computed:{
      uri(){
        return this.$store.getters.getUri
      },
      subcategory(){
        return this.$store.getters.getSubcategory
      },
      products(){
        return this.$store.getters.getProducts
      },
    },
    created(){
      this.$store.dispatch('allSubcategory', this.male)
      this.$store.dispatch('catProducts', this.male)
    },
  }
</script>

<style scoped lang="scss">
  @import '@/assets/grid.scss';
  .header {
    background-color: #fff;
  }

  .container {
    padding: 15px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__service {
    display: flex;
    align-items: center;

  }

  .login {
    margin-right: 30px;
    border: 0;
    background-color: unset;

    img {
      transition: 0.2s;
      filter: brightness(0);

      &:hover {
        filter: unset;
      }
    }
  }

  .cart {
    img {
      transition: 0.2s;
      filter: brightness(0);

      &:hover {
        filter: unset;
      }
    }
  }

  .registration {
    top: -600px;
    transition: 0.8s;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
    &.active{
      top: 100px;
    }
  }

  .form__registration {
    display: flex;
    box-shadow: 0 4px 5px 1px #ffe187;
    border-radius: 5px;
    margin: auto;
    background-color: #fff;
    justify-content: space-between;
    max-width: 600px;
    border: solid 1px #FFC000;

    .form {
      max-width: 300px;
      padding-left: 21px;
      padding-right: 21px;
      flex-basis: 40%;
    }

    .logo {
      margin-top: 45px;
      display: flex;
      justify-content: center;
    }

    .image {
      display: flex;
      width: 300px;
      height: 410px;
      float: right;

      img {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding-left: 4px;
      }
    }

    .form__reg {
      border-bottom: solid 1px #FFC000;
      padding: 2px 0px;
      padding-left: 20px;
      max-width: 245px;

      button {
        font-size: 14px;
        font-family: 'mon-m';
        color: #4b4b4b;
        padding-right: 15px;
        border: 0;
        background-color: #fff;

        &.color {
          color: #FFC000;
        }
      }
    }

    .signUp {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      display: none;
      &.show {
        display: flex;
      }

      input {
        margin-bottom: 15px;
        max-width: 250px;
        padding-left: 10px;
        border: solid 1px #FFC000;
        border-radius: 10px;
        width: 250px;
        height: 30px;
        color: #4b4b4b;
        font-family: 'mon-r';
        font-size: 14px;
        outline: none;
      }

      button {
        background-color: #fff;
        margin-top: 30px;
        margin-bottom: 15px;
        border: solid 1px #FFC000;
        border-radius: 10px;
        width: 150px;
        height: 30px;
        font-family: 'mon-m';
        font-size: 14px;
        transition: 0.3s;
        color: #FFC000;

        &:hover {
          background-color: #FFC000;
          color: #fff;
        }
      }
    }
    .signIn{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 25px;
      display: none;
      &.show {
        display: flex;
      }

      input {
        max-width: 250px;
        padding-left: 10px;
        border: solid 1px #FFC000;
        border-radius: 10px;
        width: 250px;
        height: 30px;
        color: #4b4b4b;
        font-family: 'mon-r';
        font-size: 14px;
        outline: none;
      }
      .password{
        margin-top: 15px;
        margin-bottom: 5px;
      }

      button {
        background-color: #fff;
        margin-top: 30px;
        margin-bottom: 15px;
        border: solid 1px #FFC000;
        border-radius: 10px;
        width: 150px;
        height: 30px;
        font-family: 'mon-m';
        font-size: 14px;
        transition: 0.3s;
        color: #FFC000;

        &:hover {
          background-color: #FFC000;
          color: #fff;
        }
      }
      .forget{
        flex-basis: 100%;
        text-align: left;
        display: flex;
        width: 100%;
        font-size: 12px;
        font-family: 'mon-m';
        color: #4b4b4b;
        transition: 0.3s;
        &:hover{
          color: #FFC000;
        }
      }
    }
  }
</style>>