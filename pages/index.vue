<template>
  <div class="container-fluid p-0 m-0 fixed">
    <div class="row p-0 m-0">
      <div class="col container-fluid content-container">
        <div class="row sticky-top tab-header">
          <div class="container">
            <img
              src="~static/img/topbar.jpg"
              alt="MetaCyberGirl"
              class="align-self-center"
            >
          </div>
        </div>
        <div class="row ps-y-16 ps-x-16 sticky-top tab-header" />
      </div>
    </div>

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
    background-color: light-color("700");
  }
  &.sidebar-container {
    top: $navbar-local-height !important;
    background-color: light-color("700");
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
.category {
  background-color: light-color("700");
  box-sizing: border-box;

  .icon {
    width: 24px;
    height: 24px;
  }
  .count {
    color: dark-color("300") !important;
  }
}
.search-box {
  max-width: 264px;
  width: 100%;
}
.dropdown-filter,
.search-box {
  height: 44px;
}

.sidebar-container {
  padding: 12px !important;
  max-width: 348px;
  height: 100%;
  border-right: 1px solid light-color("500");
  height: 90vh;
  border-right: 1px solid #f3f4f7;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
