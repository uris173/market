<template>
    <div class="container">
      <div class="row" style="margin-top: 50px; width: 1146px;">
        <Category />
        <div class="col-lg-9 col-md-6 col-ms-6">
          <ProdList class="row" :catProd="catProd"/>
        </div>
      </div>
    </div>
</template>

<script>
  import Category from '@/components/category.vue';
  import ProdList from '@/components/productsLists.vue'
  export default {
    components: {
      Category,
      ProdList
    },
    data(){
      return{
      }
    },
  }
</script>

<style>
  .row{
    display: flex;
  }
</style>