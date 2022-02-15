<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        :to="{ name: 'restaurant-dashbord', params: { id: restaurant.id }}"
        class="btn btn-primary btn-border mr-2"
      >
        Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.stop.prevent="deleteFavorite"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="deleteLike"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    async addFavorite () {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId: this.restaurant.id })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true
        }

        Toast.fire({
          icon: 'success',
          title: '成功加入最愛'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite () {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId: this.restaurant.id })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false
        }

        Toast.fire({
          icon: 'success',
          title: '成功移除最愛'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
    },
    async addLike () {
      try {
        const { data } = await usersAPI.addLike({ restaurantId: this.restaurant.id })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isLiked: true
        }

        Toast.fire({
          icon: 'success',
          title: '成功按讚'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法按讚，請稍後再試'
        })
      }
    },
    async deleteLike () {
      try {
        const { data } = await usersAPI.deleteLike({ restaurantId: this.restaurant.id })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isLiked: false
        }

        Toast.fire({
          icon: 'success',
          title: '成功收回讚'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法收回讚，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>
