!<template>
  <div>
    <div class="container">
      <div class="products">
        <CoolLightBox :items="items" :index="index" loop @close="index = null">
        </CoolLightBox>

        <div class="products__images">
          <div class="products__images--item" v-for="(image, imageIndex) in items" :key="imageIndex"
            @click="setIndex(imageIndex)" :style="{'background-image': 'url('+image.src+')' }"></div>
        </div>

        <div class="products__right" v-for="(item, index) in item" :key="index">
          <div class="products__info">
            <div class="products__right--name">{{item.pName}}</div> <!-- {{item.pName}} -->
            <div class="products__right--price">{{new Intl.NumberFormat('ru-RU').format(item.price.toLocaleString('en-US'))}}
              <span>sum</span>
            </div>
            <div class="products__right--color">
              <div class="color">Цвета:</div>
              <div class="color__buttons">
                <button class="colors" @click="items=items0,isActive='item0'"
                  :class="{'active': isActive=='item0'}"><img src="@/assets/img/color.jpg"></button>
                <button class="colors" @click="items=items1,isActive='item1'"
                  :class="{'active': isActive=='item1'}"><img src="@/assets/img/color1.jpg"></button>
                <button class="colors" @click="items=items2,isActive='item2'"
                  :class="{'active': isActive=='item2'}"><img src="@/assets/img/color2.jpg"></button>
              </div>
            </div>
            <div class="products__right--sizes">
              <div class="sizer">Размеры:</div>
              <div class="sizer__buttons">
                <button class="products__sizer" @click="isSize='size0'" :class="{'active': isSize=='size0'}">S</button>
                <button class="products__sizer" @click="isSize='size1'" :class="{'active': isSize=='size1'}">M</button>
                <button class="products__sizer" @click="isSize='size2'" :class="{'active': isSize=='size2'}">XL</button>
                <button class="products__sizer" @click="isSize='size3'"
                  :class="{'active': isSize=='size3'}">XXL</button>
              </div>
            </div>
            <div class="buttons">
              <button class="toCart">В корзину</button>
              <button class="like"><img src="@/assets/img/like.png" alt=""> Добавить</button>
            </div>
          </div>
        </div>
      </div>
      <div class="like__products">
        <div class="like__products--title">Вам так же может понравится</div>
        <ProdList class="row" :products="products">
        </ProdList>
      </div>
    </div>
  </div>
</template>

<script>
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
  import ProdList from '@/components/productsLists.vue'

  export default {
    components: {
      CoolLightBox,
      ProdList,
    },
    data: function () {
      return {
        isActive: 'item0',
        isSize: 'size0',
        products: [{
            id: 1,
            prodName: 'Joggeri',
            url: '/product/1',
            price: '135',
            discount: '15000',
            color: '3',
            img: {
              'background-image': 'url(' + require('@/assets/img/afro2.png') + ')'
            }
          },
          {
            id: 2,
            prodName: 'Joggeri',
            url: '/product/1',
            price: '135',
            discount: '10000',
            color: '3',
            img: {
              'background-image': 'url(' + require('@/assets/img/afro2.png') + ')'
            }
          },
          {
            id: 3,
            prodName: 'Joggeri',
            url: '/product/1',
            price: '135000',
            discount: '50000',
            color: '3',
            img: {
              'background-image': 'url(' + require('@/assets/img/afro2.png') + ')'
            }
          },
        ],
        items: [{
            src: require('@/assets/img/afro.png'),
          },
          {
            src: require('@/assets/img/afro2.png'),
          },
          {
            src: require('@/assets/img/wahite-man.png'),
          },
          {
            src: require('@/assets/img/albinos.png'),
          },
        ],
        items0: [{
            src: require('@/assets/img/afro.png'),
          },
          {
            src: require('@/assets/img/afro2.png'),
          },
          {
            src: require('@/assets/img/wahite-man.png'),
          },
          {
            src: require('@/assets/img/albinos.png'),
          },
        ],
        items1: [{
            src: require('@/assets/img/albinos.png'),
          },
          {
            src: require('@/assets/img/afro.png'),
          },
          {
            src: require('@/assets/img/afro2.png'),
          },
          {
            src: require('@/assets/img/wahite-man.png'),
          },
        ],
        items2: [{
            src: require('@/assets/img/afro.png'),
          },
          {
            src: require('@/assets/img/wahite-man.png'),
          },
          {
            src: require('@/assets/img/albinos.png'),
          },
          {
            src: require('@/assets/img/afro2.png'),
          },
        ],

        index: null,
        item: [{
          pName: 'Hoodi',
          price: '255000'
        }],
        image1: 'afro.png'
      }
    },
    
    methods: {
      setIndex(index) {
        this.index = index
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/grid.scss';

  .products {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 70px;
    display: flex;

    &__images {
      // height: 1145px;
      width: 780px;
      display: flex;
      flex-wrap: wrap;
    }

    &__images--item {
      display: flex;
      width: 375px;
      height: 565px;
      background-size: cover;
      background-position: center;
      margin-bottom: 15px;
      margin-right: 15px;
    }

    &__info {
      padding: 30px 15px;
    }

    &__right {
      background-color: #fff;
      width: 355px;
      height: 360px;
      margin-left: 10px;
      border-radius: 7px;
      box-shadow: 0px 2px 5px 0px #4b4b4b21;

      &--name {
        font-size: 35px;
        font-family: 'mon-sb';
        margin-bottom: 10px;
      }

      &--price {
        font-size: 24px;
        font-family: 'mon-r';
        margin-bottom: 25px;
      }

      &--color {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: solid 1px $color;

        .color {
          font-size: 20px;
          font-family: 'mon-m';
        }

        .color__buttons {
          button {
            border: 0px;
            background-color: unset;
          }

          img {
            width: 22px;
            height: 22px;
          }

          .colors {
            margin-left: 14px;

            &.active {
              border: solid 1px $color;
              padding-top: 3.5px;
              padding-left: 4px;
              padding-right: 4px;
            }
          }
        }
      }

      &--sizes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: solid 1px $color;
        padding: 15px 0px;
        margin-bottom: 60px;

        .sizer {
          font-size: 18px;
          font-family: 'mon-m';
        }

        .sizer__buttons {
          display: flex;
          align-items: center;

          .products__sizer {
            margin-left: 10px;
            width: 40px;
            height: 20px;
            border-radius: 10px;
            color: $grey;
            font-family: 'mon-r';
            display: flex;
            justify-content: center;
            align-items: center;

            &.active {
              background-color: $color;
            }
          }

          button {
            border: solid 1px $color;
            background-color: unset;
            transition: 0.3s;

            &:hover {
              background-color: $color;
            }
          }
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;

      .toCart {
        width: 155px;
        border-radius: 10px;
        border: solid 1px $color;
        background-color: unset;
        height: 40px;
        transition: 0.5s;
        color: $grey;
        font-family: 'mon-m';
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: $color;
        }
      }

      .like {
        height: 40px;
        width: 155px;
        border-radius: 10px;
        border: solid 1px $color;
        background-color: unset;
        transition: 0.5s;
        color: $grey;
        font-family: 'mon-m';
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 17px;
          height: 17px;
          margin-right: 10px;
        }

        &:hover {
          background-color: $color;
        }
      }
    }
  }

  .like__products--title {
    font-size: 30px;
    font-family: 'mon-sb';
    margin-bottom: 45px;
  }
</style>>