<template>
  <div class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__item">
          <div class="footer__title">
            О НАС
          </div>
          <div class="title__info">
            <div class="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, enim! Repellendus error culpa maiores
              minima, voluptates voluptatibus
            </div>
          </div>
          <div class="footer__social">
            <a href="#"><img src="@/assets/img/telegram.svg"></a>
            <a href="#"><img src="@/assets/img/instagram.svg"></a>
            <a href="#"><img src="@/assets/img/facebook.svg"></a>
          </div>
        </div>
        <div class="footer__item">
          <div class="footer__p">
            <div class="footer__title">
              КОНТАКТЫ
            </div>
            <div class="footer__info">
              <div class="soc">
                <div class="num">
                  <li>
                    <a href="#" class="link">+998 99 862 1626</a>
                  </li>
                </div>
                <div class="telegram">
                  <li>
                    <a href="https://t.me/of_Astora" class="link">Telegram</a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__item">
          <div class="footer__p">
            <div class="footer__title">
              РАБОЧЕЕ ВРЕМЯ
            </div>
            <div class="footer__info">
              <div class="info">
                По будням 9:00 to 18:00
                <br>
                <span>В выходные 11:00 to 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import '@/assets/grid.scss';

  .footer {
    background-color: #fff;
    padding-top: 45px;
    padding-bottom: 25px;

    &__row {
      display: flex;
    }

    &__item {
      @include fb(33.33%);
    }

    &__p {
      padding-left: 150px;
    }
    .text{
      font-family: 'mon-r';
      font-size: 14px;
      display: flex;
      color: #000;
      margin-bottom: 10px;
    }
    &__title {
      font-family: 'mon-sb';
      font-size: 14px;
      text-transform: uppercase;
      margin-bottom: 20px;
      color: #000;
    }
    &__social{
      margin-top: 20px;
      a{
        padding-right: 10px;
      }
    }
    .link{
      color: #000;
      padding-bottom: 10px;
      &:hover{
        color: $color;
      }
    }
    &__info {
      font-family: 'mon-r';
      font-size: 14px;
      display: flex;
      color: #000;
      margin-bottom: 10px;
      .info{
        span{
          margin-top: 5px;
        }
      }
      .link {
        display: flex;
      }
    }
  }
</style>