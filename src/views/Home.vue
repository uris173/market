<template>
  <div>
    <div class="chose__male">
      <!-- {{category}} -->
      <router-link  v-for="(item, index) of category" :key="index" :to="item.slug" :class="item.slug" :style="{ backgroundImage: `url('${uri}/image/${item.img}')` }">
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
      }
    },
    computed:{
      category(){
        return this.$store.getters.getCategories
      },
      uri(){
        return this.$store.getters.getUri
      }
    },
    created(){
      this.$store.dispatch('allCategories')
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/grid.scss';

  .chose__male {
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    .woman {
      span {
        display: flex;
        color: $color;
        font-size: 60px;
        font-family: 'mon-sb';
        display: flex;
        align-items: center;
        justify-content: center;
        top: 350px;
        left: 250px;
      }

      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 50%;
      width: 50%;
      height: 100vh;
      background-size: cover;
    }
    .man {
      span {
        display: flex;
        color: $color;
        font-size: 60px;
        font-family: 'mon-sb';
        display: flex;
        align-items: center;
        justify-content: center;
        top: 350px;
        right: 250px;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 50%;
      width: 50%;
      height: 100vh;
      background-size: cover;
    }
  }
</style>>