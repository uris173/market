!<template>
  <div class="body">
    <div class="container">
      <div class="order__in">
        <div class="order__into">
          <div class="order__delivery" :class="{'active': isShow > 1}">
            <div class="order__logo"><img src="@/assets/img/loc.png" alt=""></div>
            <div class="order__complete"><img src="@/assets/img/complete.png" alt=""></div>
            Регион доставки
          </div>
          <div class="order__order-1" :class="{'show': isShow==1}">
            <div class="order__place">
              <div class="order__location">
                <div class="order__loc">Местоположение </div>
                <div class="order__country">Узбекистан</div>
                <select class="order__city" id="city" name="city">
                  <option value="what">Выберите город</option>
                  <option value="andj">Андижанская область</option>
                  <option value="bukh">Бухарская область</option>
                  <option value="jiz">Джизакская область</option>
                  <option value="kashk">Кашкадарьинская область</option>
                  <option value="namg">Наманганская область</option>
                  <option value="nav">Навоийская область</option>
                  <option value="samar">Самаркандская область</option>
                  <option value="surkh">Сурхандарьинская область</option>
                  <option value="sirdr">Сырдарьинская область</option>
                  <option value="tash__obl">Ташкентская область</option>
                  <option value="tash">Ташкентская </option>
                  <option value="ferg">Ферганская область</option>
                  <option value="harez">Хорезмская область</option>
                  <option value="karakp">Республика Каракалпакстан</option>
                </select>
                <input type="text" class="order__to--order" placeholder="Полный адрес доставки">
                <div class="order--full__address">
                  Укажите полный адрес доставки, "Улица", "Дом", "Подъезд", "Квартира".
                </div>
              </div>
            </div>
          </div>
          <div class="order__payment" :class="{'active': isShow > 2}">
            <div class="order__logo"><img src="@/assets/img/wallet.png" alt=""></div>
            <div class="order__complete"><img src="@/assets/img/complete.png" alt=""></div>
            Оплата
          </div>
          <div class="order__order-2" :class="{'show': isShow==2}">
            <div class="order__pay--content">
              <div class="order__payment--cash">
                <input type="radio" name="click" id="cash">
                <label for="cash" class="img"><img src="@/assets/img/money.png" alt=""></label>
                <span>Наличные курьеру</span>
              </div>
              <div class="order__payment--payme">
                <input type="radio" name="click" id="payme">
                <label for="payme" class="img"><img src="@/assets/img/payme.svg" alt=""></label>
                <span>Payme.uz</span>
              </div>
              <div class="order__payment--click">
                <input type="radio" name="click" id="click">
                <label for="click" class="img"><img src="@/assets/img/click.svg" alt=""></label>
                <span>Click.uz</span>
              </div>
            </div>
          </div>
          <div class="order__customer" :class="{'active': isShow > 3}">
            <div class="order__logo"><img src="@/assets/img/customer.png" alt=""></div>
            <div class="order__complete"><img src="@/assets/img/complete.png" alt=""></div>
            Покупатель
          </div>
          <div class="order__order-3" :class="{'show': isShow==3}">
            <div class="order__custom--content">
              <input type="text" class="order__order--name" name="" id="name" placeholder="Ф.И.О.">
              <input type="text" class="order__order--email" name="" id="email" placeholder="Email">
              <input type="text" class="order__order--number" name="" id="number" placeholder="Номер телефона">
              <span class="order__order--text">Коментарии к заказу:</span>
              <textarea class="order__custom--comm" id="comment" name="comment"></textarea>
            </div>
          </div>
          <div class="order__buttons">
            <button class="order__buttons--back" @click="back()">Назад</button>
            <button class="order__buttons--next" @click="next()" :class="{'none': isShow>3}">Далее</button>
          </div>
          <div class="order__button--checkout" :class="{'active': isShow == 4}">
            <button class="checkout">Оформить заказ</button>
          </div>
        </div>
        <div class="order__final" v-for="(item, index) in items" :key="index">
          <div class="order__final--border">
            <div class="order__final--prod">Ваш заказ</div>
            <div class="order__final--inform">
              <div class="order__final--sum">
                <div class="order__final--left">Таваров на:</div>
                <div class="order__final--sright"><span>{{new Intl.NumberFormat('ru-RU').format(item.price.toLocaleString('en-US'))}}</span>сум</div>
              </div>
              <div class="order__final--delivery">
                <div class="order__final--left">Доставка:</div>
                <div class="order__final--dright"><span>{{new Intl.NumberFormat('ru-RU').format(item.delivery.toLocaleString('en-US'))}}</span><span class="sum">sum</span></div>
              </div>
            </div>
            <div class="order__final--fSum">
              <div class="order__final--fleft">Итог:</div>
              <div class="order__final--fright"><span>{{new Intl.NumberFormat('ru-RU').format(item.totalPrice.toLocaleString('en-US'))}}</span>сум</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: 1,
        items: [{
          price: '469000',
          delivery: '10000',
          totalPrice: '480000',
        }]
      }
    },
    methods: {
      next() {
        if (this.isShow == 4) {
          this.isShow == 4
          return false
        }
        this.isShow++
        console.log(this.isShow);
      },
      back() {
        if (this.isShow == 1) {
          return false
        }
        this.isShow--
        console.log(this.isShow);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/grid.scss';

  .body {
    background-color: #fff;
  }

  .order {
    &__in {
      display: flex;
      margin-top: 30px;
    }

    &__into {
      width: 750px;
    }

    &__delivery,
    &__payment,
    &__customer {
      margin-top: 40px;
      display: flex;
      align-items: center;
      font-size: 24px;
      font-family: 'mon-sb';
      margin-bottom: 40px;
      padding-top: 10px;
      border-top: solid 0.5px $color;

      &.active {
        .order__complete {
          display: flex;
        }

        .order__logo {
          display: none;
        }
      }
    }
    &__delivery{
      margin-top: 0;
    }

    &__logo {
      display: flex;
      align-items: center;

      img {
        padding-right: 5px;
        height: 24px;
      }
    }

    &__complete {
      display: flex;
      align-items: center;
      display: none;

      img {
        width: 33px;
      }
    }

    &__order-1,
    &__order-2,
    &__order-3 {
      display: none;
      transition: 1s;
      overflow: hidden;

      &.show {
        height: auto;
        display: flex;
      }
    }

    // Rigion 
    &__palce {
      display: flex;
    }

    &__location {
      width: 750px;
      max-width: 750px;
    }

    &__loc {
      font-size: 18px;
      font-family: 'mon-m';
      margin-bottom: 7px;
    }

    &__country {
      font-size: 15px;
      font-family: 'mon-m';
      margin-bottom: 20px;
    }

    &__city {
      width: 750px;
      height: 30px;
      margin-bottom: 10px;
      border: solid 0.5px $color;
      border-radius: 5px;
      font-family: 'mon-r';
      font-size: 14px;
      padding-left: 5px;
      outline: 0px;
      color: #4b4b4b;

      &:hover {
        cursor: pointer;
      }
    }

    &__to--order {
      width: 750px;
      height: 30px;
      border: solid 0.5px $color;
      border-radius: 5px;
      font-family: 'mon-r';
      font-size: 14px;
      padding-left: 5px;
      outline: 0px;
      color: #4b4b4b;
      margin-bottom: 5px;
    }

    &--full__address {
      font-size: 12px;
      font-family: 'mon-r';
    }

    // Payment


    &__payment--cash,
    &__payment--payme,
    &__payment--click {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      input {
        display: none;
      }

      label {
        width: 104px;
        height: 70px;
        background-color: #f7f7f7;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          cursor: pointer;
        }
      }

      input:checked+label {
        border: solid 0.5px $color;
      }

      span {
        padding-left: 15px;
        font-size: 18px;
        font-family: 'mon-m';
      }

      img {
        width: 70px;
        height: 60px;
      }
    }

    // Customer
    &__order--name,
    &__order--email,
    &__order--number {
      width: 600px;
      height: 30px;
      margin-bottom: 10px;
      border: solid 0.5px $color;
      border-radius: 5px;
      font-family: 'mon-r';
      font-size: 14px;
      padding-left: 5px;
      outline: 0px;
      color: #4b4b4b;
    }

    &__order--text {
      display: flex;
      font-size: 16px;
      font-family: 'mon-m';
      color: #4b4b4b;
      margin-top: 25px;
      margin-bottom: 10px;
    }

    &__custom--comm {
      width: 600px;
      height: 100px;
      border: solid 0.5px $color;
      padding: 5px;
      border-radius: 5px;
      font-family: 'mon-r';
      font-size: 14px;
      outline: 0px;
      color: #4b4b4b;
    }

    &__buttons {
      width: 750px;
      display: flex;
      justify-content: space-between;
      margin-top: 80px;

      &--back,
      &--next {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border: solid 0.5px $color;
        border-radius: 10px;
        color: $color;
        font-size: 14px;
        font-family: 'mon-m';
        width: 120px;
        height: 35px;
        transition: 0.3s;

        &:hover {
          cursor: pointer;
        }
      }

      &--next {
        background-color: $color;
        color: #fff;

        &.none {
          display: none;
        }
      }
    }

    &__button--checkout {
      display: none;

      // justify-content: center;
      &.active {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
      }

      .checkout {
        width: 200px;
        height: 40px;
        border: solid 1px #FFC000;
        border-radius: 10px;
        background-color: #FFC000;
        color: #fff;
        font-size: 18px;
        font-family: 'mon-m';
      }
    }

    &__final {
      margin-left: 70px;
      width: 350px;
      color: #4b4b4b;

      &--border {
        border-top: solid 0.5px #ffc00063;
        border-bottom: solid 0.5px #ffc00063;
      }

      &--prod {
        display: flex;
        justify-content: center;
        border-bottom: solid 0.5px #ffc00063;
        padding-bottom: 10px;
        margin-top: 15px;
        font-size: 20px;
        font-family: 'mon-sb';
      }

      &--inform {
        margin-top: 15px;
        border-bottom: solid 0.5px #ffc00063;
        padding-bottom: 10px;
        color: #4b4b4b;
      }

      &--sum {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
      }

      &--left {
        font-size: 15px;
        font-family: 'mon-r';
      }

      &--sright {
        font-size: 18px;
        font-family: 'mon-m';

        span {
          padding-right: 5px;
        }
      }

      &--delivery {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;

        span {
          font-size: 15px;
          font-family: 'mon-m';
          color: #FFC000;
          padding-left: 5px;
        }
      }
      &--fSum {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
        margin-bottom: 30px;
        padding-left: 5px;
        padding-right: 5px;

      }
      &--fleft {
        font-size: 20px;
        font-family: 'mon-r';
      }

      &--fright {
        font-size: 18px;
        font-family: 'mon-m';

        span {
          padding-right: 5px;
        }
      }
    }
  }
</style>>