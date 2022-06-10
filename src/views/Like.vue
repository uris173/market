<template>
    <div class="container">
      <div class="row" style="margin-top: 50px; width: 1146px;">
        <Category />
        <div class="col-lg-9 col-md-6 col-ms-6">
          <ProdList class="row" :products="products"/>
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
      ProdList
    },
    data(){
      return{
        likeColor: '#ffffff00',
        isLike: false,
        products: [
          {
            id: 1,
            prodName: 'Joggeri',
            url: '/product/1',
            price: '135',
            discount: 'Скидка 69$',
            color: '3',
            img: {
              'background-image': 'url(' + require('@/assets/img/afro2.png') + ')'
            }
          }
        ]
      }
    },
    methods:{
      likeToggle(){
        (this.isLike == true) ? this.likeColor = '#ff0000' : this.likeColor = '#ffffff00'
      }
    }
  }
</script>

<style>
  .row{
    display: flex;
  }
</style>