<template>
  <section>
    <footer class="footer white">
      <div class="container">
        <div class="row align-items-center">
          <!-- <div class="col-md-6 my-2">
            <div class="nav justify-content-center justify-content-md-start">
              <a href="#"><i class="ti-facebook" /></a>
              <a href="#"><i class="ti-twitter-alt" /></a>
              <a href="#"><i class="ti-instagram" /></a>
              <a href="#"><i class="ti-linkedin" /></a>
              <a href="#"><i class="ti-pinterest" /></a>
            </div>
          </div> -->
          <div class="col-md-6 my-2 text-center text-md-right">
            <p>© 2022 copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  props: {},
  components: {},
})
export default class FooterBar extends Vue {}
</script>

<style lang="scss">

.footer {
  padding: 12px 0;
  background: #000;
}

.footer p {
  color: #fff;
  font-size: 14px;
  margin: 0;
}
</style>
