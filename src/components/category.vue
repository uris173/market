<template>
  <div class="col-lg-3">
    <div class="row">
      <div class="content__menu">
        <ul class="menu__big">
          <li>
            <router-link class="new" to="#">НОВИНКИ</router-link>
          </li>
          <!-- <li>
            <router-link class="sale" to="#">РАСПРОДАЖА</router-link>
          </li> -->
          <li>
            <router-link class="like" to="/like">ПОНРАВИВШИЕСЯ ТОВАРЫ</router-link>
          </li>
        </ul>
        <div class="menu__category">
          <div class="content__big">Категории</div>
          <ul class="content__title" v-for="(subcat, index) in subcategory" :key="index">
            <li>
              <router-link class="menu" exact :class="{'active' :subCat==subcat.slug}" :to="`/${this.male}/?subcategory=${subcat.slug}`">{{subcat.subTitle}}</router-link> 
            </li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
  export default {
    data(){
      
      return{
        male: this.$route.params.id,
        subCat: this.$route.query.subcategory,
      }
    },
    watch:{
      $route(to){
        if(to.query.subcategory){
          this.subCat = to.query.subcategory
          this.$store.dispatch('subProducts', this.subCat)
          // this.$store.dispatch('allSubcategory', this.male)
          // При изменении субкатегориев изменение продуктов
        } if(this.male){
          this.$store.dispatch('catProducts', this.male) 
          // обратный эффект, дебагер 
        } 
      }
    },
    created(){
      this.$store.dispatch('allSubcategory', this.male)    
    },
    computed: {
      subcategory(){
        return this.$store.getters.getSubcategory
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/grid.scss';

  .container {
    @include df();
    align-items: start;
    display: block;
  }

  .row {
    display: flex;
  }

  .col-lg-3 {
    float: left;
  }

  .content__menu {
    .menu__big {
      margin-bottom: 35px;

      .new {
        // font-size: 22px;
        // font-family: 'mon-sb';
        // color: rgb(75, 75, 75);
        // display: flex;
        // margin-bottom: 10px;
        // position: relative;
        // transition: 0.2s;
        // top: 0;
        font-size: 22px;
        font-family: 'mon-b';
        color: $color;
        position: relative;
        transition: 0.2s;
        top: 0;

        // &:hover {
        //   top: -3px;
        // }
      }

      .sale {
        font-size: 22px;
        font-family: 'mon-b';
        color: $color;
        position: relative;
        transition: 0.2s;
        top: 0;

        &:hover {
          top: -3px;
        }
      }

      .like {
        margin-top: 10px;
        font-size: 22px;
        font-family: 'mon-sb';
        color: rgb(75, 75, 75);
        display: flex;
        margin-bottom: 10px;
        position: relative;
        transition: 0.2s;
        top: 0;

        // &:hover {
        //   top: -3px;
        // }
      }
    }

    .menu__category {
      .content__big {
        display: flex;
        font-size: 20px;
        font-family: 'mon-m';
        color: rgb(75, 75, 75);
        margin-top: 25px;
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: solid 1px $color;
      }

      .content__title {
        .menu {
          font-family: 'mon-r';
          font-size: 16px;
          display: flex;
          color: #000;
          transition: 0.2s;
          margin-bottom: 5px;
          text-transform: capitalize;
          
          &:hover {
            color: $color;
          }
        }
        .active{
          color: $color;
          // text-decoration: underline;
        }
      }
    }
  }
</style>>