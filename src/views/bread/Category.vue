<template>
  <div class="container">
    <div class="row" style="margin-top: 50px; width: 1146px;">
      <Category />
      <div class="col-lg-9 col-md-6 col-ms-6">
        <!-- v-for="catProd of products" :key="catProd._id" -->
        <ProdList class="row" :products='products'/>
      </div>
    </div>
  </div>
</template>

<script>
  import Category from '@/components/category.vue'
  import ProdList from '@/components/productsLists.vue'
  export default {
    components: {
      Category,
      ProdList,
    },
    data(){
      return{
        likeColor: '#ffffff00',
        isLike: false,
        male: this.$route.params.id,
      }
    },
    watch:{
      $route(to){
        this.male = to
        this.$store.dispatch('catProducts', this.male)
        // Отслеживание страницы Мужской или Женский, по сути тоже дебагер
        // console.log(this.male);
      }
    },
    methods:{
      likeToggle(){
        (this.isLike == true) ? this.likeColor = '#ff0000' : this.likeColor = '#ffffff00'
      },
      
    },
    created(){
      this.$store.dispatch('catProducts', this.male)
    },
    computed: {
      products(){
        return this.$store.getters.getProducts
      },
    },
  }
</script>

<style>
  .row{
    display: flex;
  }
</style>