<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/header.vue'
  import Footer from '@/components/footer.vue'

  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>

<style lang="scss">
  .container {
    max-width: 1146px;
    margin: auto;
  }


  body {
    background-color: #F2F3F7;
  }

  body,
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &::after,
    &::before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  //fonts
  @font-face {
    font-family: 'mon-b';
    src: local('mon-b'),
      url('./assets/fonts/Montserrat-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'mon-m';
    src: local('mon-m'),
      url('./assets/fonts/Montserrat-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'mon-r';
    src: local('mon-r'),
      url('./assets/fonts/Montserrat-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'mon-sb';
    src: local('mon-sb'),
      url('./assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
  }

  //mixins


  //grid
  @import '@/assets/grid.scss';

  #app{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>  