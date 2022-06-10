!<template>
  <div>
    <div class="container">
      <div class="title__text">Корзинка</div>
    </div>
    <div class="cart__tag">
      <div class="container">
        <div class="cart">
          <div class="basket">
            <div class="cart__total">
              <div class="cart__det">
                <div class="cart__info">Описание товара</div>
                <div class="cart__amt">Количество</div>
                <div class="cart__sum">Сумма</div>
              </div>
            </div>
            <div class="cart__items" v-for="(prod, index) in product" :key="index">
              <div class="cart__product">
                <div class="cart__info">
                  <div class="img"><img :src="prod.photo"></div>
                  <div class="info">
                    <a href="#" class="prod">
                      <span>{{prod.prodName}}</span>
                      /
                      <span>{{prod.size}}</span>
                    </a>
                    <ul>
                      <li class="price">Цена: <span>{{new Intl.NumberFormat('ru-RU').format(prod.prodPrice.toLocaleString('en-US'))}}</span>сум</li>
                    </ul>
                  </div>
                </div>
                <div class="cart__amt">
                  <div class="cart__amount">1 шт.</div>
                </div>
                <div class="cart__sum"><span>{{new Intl.NumberFormat('ru-RU').format(prod.totalPrice.toLocaleString('en-US'))}}</span>сум</div>
                <button class="delete">
                  <img src="@/assets/img/x.png" alt="">
                </button>
              </div>
            </div>
          </div>
          <div class="final__price" v-for="(order, index) in yourOrder" :key="index">
            <div class="block">
              <div class="your__order">Ваш заказ</div>
              <div class="final__price--info">
                <table class="items" width='100%'>
                  <tr>
                    <td>
                      Товаров (<span class="span">{{order.count}}</span>):
                    </td>
                    <td class="amount">
                      <span>{{new Intl.NumberFormat('ru-RU').format(order.price.toLocaleString('en-US'))}}</span>
                      сум
                    </td>
                  </tr>
                </table>
              </div>
              <router-link to="/toOrder" class="to__order">Оформить заказ</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        product: [{
          photo: require('@/assets/img/afro2.png'),
          prodName: 'Jeans',
          size: 'SL',
          prodPrice: '159000',
          totalPrice: '159000',
        }],
        yourOrder: [{
          count: '1',
          price: '159000'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/grid.scss';

  .title__text {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: 'mon-sb';
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .cart__tag {
    flex-basis: 100%;
    background-color: #fff;
    width: 100%;
    
  }

  .basket {
    // display: flex;
    width: 850px;
    font-size: 14px;
    font-family: 'mon-m';
    border-bottom: solid 0.5px #ffc00080;
    flex-wrap: wrap;
    padding-top: 25px;
  }

  .cart__det {
    display: flex;
    align-items: center;
  }

  .cart__total {
    border-top: solid 0.5px #ffc00080;
    // border-bottom: solid 0.5px #ffc00080;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  .cart {
    display: flex;

    &__info {
      width: 380px;
      display: flex;
      padding-left: 10px;
    }

    &__amt {
      width: 200px;
      display: flex;
    }

    &__sum {
      width: 200px;
      display: flex;
    }

    &__items {
      border-top: solid 0.5px #ffc00080;
      width: 850px;

      .cart__info {
        display: flex;
        align-items: center;
        padding: 10px;
        padding-bottom: 6px;
      }
    }

    &__product {
      display: flex;
      align-items: center;
      position: relative;

      .img {
        img {
          width: 90px;
        }
      }

      .info {
        padding-left: 10px;
        align-items: center;

        .prod {
          color: $grey;
          font-size: 14px;
          font-family: 'mon-sb';
        }

        .price {
          font-size: 14px;
          font-family: 'mon-m';
          color: #4b4b4bcc;
          span{
            padding-right: 5px;
          }
        }
      }

      .cart__amount {
        font-size: 14px;
        font-family: 'mon-r';
      }

      .cart__sum {
        font-size: 18px;
        font-family: 'mon-m';
        span {
          padding-right: 5px;
        }
      }

      .delete {
        position: absolute;
        border: 0;
        background-color: unset;
        right: 15px;
        top: 15px;
        cursor: pointer;

        img {
          width: 9px;
        }
      }
    }
  }
  .final__price{
    width: 270px;
    height: 150px;
    border: solid 0.5px #ffc00080;
    margin-left: 26px;
    margin-top: 24px;
    border-radius: 3px;
  }
  .block{
    padding: 10px;
  }
  .your__order{
    margin-bottom: 15px;
    font-size: 18px;
    font-family: 'mon-sb';
    color: $grey;
  }
  .final__price--info{
    .items{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-family: 'mon-r';
      tr{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .span{
        padding: 0px 2px;
      }
      .amount{
        // display: flex;
        // justify-content: right;
        font-size: 16px;
        padding-left: 50px;
        .currency{
          padding-left: 7px;
        }
      }
    }
  }
  .to__order{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    margin-top: 30px;
    width: 100%;
    background-color: unset;
    border-radius: 10px;
    border: solid 1px $color;
    font-family: 'mon-m';
    font-size: 16px;
    color: $color;
    transition: 0.4s;
    &:hover{
      background-color: $color;
      color: #fff;
    }
  }
</style>>