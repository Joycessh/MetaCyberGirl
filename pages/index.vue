<template>
  <div class=" p-0 m-0 fixed">
    <div class="row p-0 m-0">
      <div class="col">
        <div class="row justify-content-center  sticky-top tab-header cc">
          <!-- <div class="col-xs-12 col-md-4 align-self-center hb-text">
            <h6>Hi There, I'm</h6>
            <h1>MetaCyberGirl</h1>
          </div> -->
        </div>
      </div>
    </div>
    <section>
      <div class="container py-lg-5 py-md-4 py-m-4 py-3">
        <div class="row align-item-center justify-content-center">
          <div class="col-lg-6 my-3">
            <img
              class="img-fluid"
              src="~static/img/mcgirl2.jpg"
              alt="mcger"
            >
          </div>
          <div class="col-lg-6 align-self-center my-3">
            <div class="w-box">
              <h3>MCG Girl Avatar</h3>
              <h5 class="author">
                明成君
              </h5>
              <p class="lead">
                Each MCG girl avatar you own is unique, and when she belongs to you, all of her copyrights will be owned exclusively by you.
              </p>
              <p class="lead">
                And those who previously owned or have owned any NFT in this compilation will be entitled to MCGER status in our Discord community, and when you do, you will have the opportunity to get an airdrop of the new NFT series we will launch later. 2000 MCG Girl avatars in total
              </p>
              <button
                type="button"
                class="btn btn-warning btn-bar"
              >
                <a
                  class="px-btn"
                  href="https://opensea.io/collection/metacybergirl"
                >View on OpenSea</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <notification-modal
      v-if="showNotification"
      @close="onNotificationClose"
    /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { mapGetters, mapState } from 'vuex'
import app from '~/plugins/app'
import { fuzzysearch } from '~/plugins/helpers/index'

import SellCard from '~/components/lego/sell-card'
import CategoriesSelector from '~/components/lego/categories-selector'
import SearchBox from '~/components/lego/search-box'
import SortDropdown from '~/components/lego/sort-dropdown'
import NoItem from '~/components/lego/no-item'

import CategorySidebar from '~/components/lego/account/category-sidebar'
import NotificationModal from '~/components/lego/notification-modal'

@Component({
  props: {},
  components: {
    SellCard,
    CategoriesSelector,
    SearchBox,
    SortDropdown,
    NoItem,
    CategorySidebar,
    NotificationModal,
  },
  computed: {
    ...mapGetters('page', ['selectedFilters', 'selectedCategory']),
    ...mapState('page', ['isCategoryFetching']),
    ...mapGetters('category', ['categories', 'allCategory']),
  },
  middleware: [],
  mixins: [],
})
export default class Index extends Vue {
  limit = app.uiconfig.defaultPageSize;
  searchInput = null;
  fuzzysearch = fuzzysearch;
  emptyMsg = {
    title: 'Oops! No item found.',
    description: 'We didn’t found any item that is on sale.',
    img: true,
  };

  showNotification = false;

  sortItems = [
    {
      id: 0,
      name: 'Newest',
      filter: '-created',
    },
    {
      id: 1,
      name: 'Oldest',
      filter: '+created',
    },
    {
      id: 2,
      name: 'Price low to high',
      filter: '+usd_price',
    },
    {
      id: 3,
      name: 'Price high to low',
      filter: '-usd_price',
    },
  ];

  orderFullList = [];
  hasNextPage = true;
  displayTokens = 0;
  isLoadingTokens = true;

  showModal = false;

  mounted() {
    // if (!localStorage.getItem('WalletSwapFeature')) {
    //   this.onNotificationOpen()
    // }
  }

  onNotificationOpen() {
    this.showNotification = true
    localStorage.setItem('WalletSwapFeature', true)
  }

  onNotificationClose() {
    this.showNotification = false
  }

  onModalShow() {
    this.showModal = true
  }

  onModalClose() {
    this.showModal = false
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/theme/_theme";

.sticky-top {
  &.tab-header {
    top: $navbar-local-height !important;
    // background-color: light-color("700");
  }
  &.sidebar-container {
    top: $navbar-local-height !important;
    background-color: light-color("700");
    overflow-x: hidden;
    overflow-y: scroll;
  }
}

.hb-text h6 {
  font-size: 25px;
  margin-bottom: 15px;
  color: #fff;
}

.hb-text h1 {
  font-size: 80px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 15px;
}

.cc {
  background-color: #d9ded8; //#e599bc;
  min-height: 800px;
  background-image: url(~static/img/home-bar.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.img-fluid {
  width: 100%;
  height: auto;
  box-shadow: -5px 2px 9px #afafaf;
}

.w-box {
  // padding-top: 40px;
}

.px-btn {
  color: #fff;
}

.btn-bar {
  background: #ed9b18;
}

.btn-bar:hover {
  background: #c867c7;
}

.lead {
  color: #5e6472;
  font-size: 16px;
}

.author {
  color: #79dfd1;//#3a8f96;
  font-weight: bold;
}

@media (max-width: 768px) {
  .sticky-top {
    &.tab-header {
      position: relative;
      top: 0 !important;
      z-index: inherit;
    }
  }
  .category-wrapper {
    width: 100% !important;
    // margin: 0 !important;
  }
  .search-box {
    max-width: 100%;
    width: 100%;
  }
}

@media (max-width: 520px) {
  .search-sort,
  .cat-switch {
    justify-content: center;
    flex-direction: column;
  }

  .dropdown-filter {
    margin-top: 16px;
  }
}
</style>
