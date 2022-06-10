<template>
  <div class="header__menu">
    <ul>
      <li v-for="(m, index) of bread" :key="index">
        <router-link :to="m.l" class="link">{{m.n}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['bread'],
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/grid.scss';

  .header__menu{
    ul{
      display: flex;
    }
    a{
      color: $grey;
      font-size: 16px;
      font-family: 'mon-m';
      position: relative;
      color: inherit;
      padding-bottom: 2px;
      &:before, &:after {
        content: '';
        position: absolute;
        transition: transform .5s ease;
      }
      &:before {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2.5px;
        background: $color;
        transform:  scaleX(0);
      }
      &:hover:before {
        transform:  scaleX(1);
      }
    }
    .link{
      margin-right: 20px;
    }
  }
</style>