<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantPagination from './../components/RestaurantsPagination.vue'

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Christina Goodwin',
      tel: '(125) 554-8322 x775',
      address: '143 Terry Ranch',
      opening_hours: '08:00',
      description: 'Nam fuga officia sapiente nostrum laboriosam.\nEos ',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=47.609823435225266',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 2,
      name: 'Garth Jones',
      tel: '1-993-398-7375',
      address: "519 O'Reilly Plain",
      opening_hours: '08:00',
      description: 'Id fugit quisquam. Fugiat enim dolorem vel placeat',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.331316612710089',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 3,
      name: 'Rogelio Bode',
      tel: '451-166-1767 x02123',
      address: '675 Otha Isle',
      opening_hours: '08:00',
      description: 'Vitae animi exercitationem tempora.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=19.23773213461697',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 4,
      name: 'Nicklaus Schumm',
      tel: '1-031-250-8500',
      address: '6928 Kamren Union',
      opening_hours: '08:00',
      description: 'Et blanditiis qui ut. Ipsa voluptatum sint molliti',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=74.26859425248055',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 5,
      name: 'Evelyn Bogisich',
      tel: '756-918-4781 x111',
      address: '242 Walter Rue',
      opening_hours: '08:00',
      description: 'temporibus incidunt iste',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=58.7109189590231',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 6,
      name: 'Mrs. Halle Turner',
      tel: '457.858.1460 x070',
      address: '475 Makenna Court',
      opening_hours: '08:00',
      description: 'Iste reiciendis harum quaerat debitis.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=25.32284134044629',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 7,
      name: 'Jodie Wolff',
      tel: '289-035-9302 x28391',
      address: '011 Aniyah Flats',
      opening_hours: '08:00',
      description: 'Voluptatibus suscipit temporibus itaque animi dolo',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.8332326562261239',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 8,
      name: 'Uriel Wolf',
      tel: '1-827-429-9780 x473',
      address: '03328 Kristian Green',
      opening_hours: '08:00',
      description: 'Autem adipisci et eligendi aut provident.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.895791248570113',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 9,
      name: 'Dewitt Oberbrunner DVM',
      tel: '853-815-6045',
      address: '21366 Torphy Ways',
      opening_hours: '08:00',
      description: 'dolorem',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=80.93987472585209',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 10,
      name: 'Jewel McKenzie',
      tel: '951.043.1239 x6874',
      address: '26207 Jesse Stream',
      opening_hours: '08:00',
      description: 'Illum assumenda libero nihil pariatur voluptas nis',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.953301973986423',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    }
  ],
  categoryId: '',
  page: 1,
  totalPage: [
    1,
    2,
    3,
    4,
    5
  ],
  prev: 1,
  next: 2
}

export default {
  components: {
    NavTabs,
    RestaurantsNavPills,
    RestaurantCard,
    RestaurantPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>
