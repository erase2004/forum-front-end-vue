<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="row no-gutters"
      >
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: {id: restaurant.id}}"
          >
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: {id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: 'Cary McGlynn',
      tel: '661-604-6446',
      address: '39985 Herminia Loop',
      opening_hours: '08:00',
      description: 'Blanditiis id qui consequatur. Et aut est placeat ',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=40.77148488790758',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 49,
      name: 'Lennie Baumbach',
      tel: '(507) 355-5476 x6452',
      address: '6382 Rutherford Mountains',
      opening_hours: '08:00',
      description: 'Ut et sint id quia aperiam voluptatum aut tenetur.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=33.77240223276594',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 48,
      name: 'Angel Braun',
      tel: '862-251-0776 x058',
      address: '90453 Cassin Common',
      opening_hours: '08:00',
      description: 'Commodi ea nostrum harum animi.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=25.232177556997783',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 47,
      name: 'Keshaun Hudson',
      tel: '(713) 534-0833 x547',
      address: '692 Gibson Lakes',
      opening_hours: '08:00',
      description: 'Et at beatae ad ducimus doloribus qui. Porro venia',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=60.29390105826538',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 46,
      name: 'Talia Brekke',
      tel: '371-090-2783 x37061',
      address: '1066 Zieme Walk',
      opening_hours: '08:00',
      description: 'At officia eos.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=59.277544583140006',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 45,
      name: 'Vilma Stracke',
      tel: '1-697-616-3232 x9543',
      address: '482 Ken Hollow',
      opening_hours: '08:00',
      description: 'Fugiat odit esse itaque sit. Sint asperiores autem',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=47.20287034936026',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 44,
      name: 'Emil Mohr',
      tel: '651-848-0254',
      address: '60755 Zboncak Gateway',
      opening_hours: '08:00',
      description: 'Totam maiores in exercitationem et est omnis.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=66.32842250733349',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 43,
      name: 'Ursula Hoeger',
      tel: '431.176.0467 x46927',
      address: '68684 Hettie Drive',
      opening_hours: '08:00',
      description: 'Ex sapiente nisi.\nOdio sunt nihil.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=81.80925197193756',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 42,
      name: 'Jerod Lindgren',
      tel: '1-142-566-0597 x654',
      address: '7249 Elisabeth Rapids',
      opening_hours: '08:00',
      description: 'Alias veniam reiciendis quisquam ut laboriosam. Qu',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=26.708063282523575',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 41,
      name: 'Sheldon Stroman',
      tel: '296.870.4764 x73483',
      address: '80171 Lockman Courts',
      opening_hours: '08:00',
      description: 'Error est et voluptatem.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=69.34799159506986',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
}

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    addFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: true,
            FavoriteCount: restaurant.FavoriteCount + 1
          }
        } else {
          return restaurant
        }
      })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    },
    deleteFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(restaurant => {
        if (restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: false,
            FavoriteCount: restaurant.FavoriteCount - 1
          }
        } else {
          return restaurant
        }
      })
        .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
    }
  }
}
</script>
