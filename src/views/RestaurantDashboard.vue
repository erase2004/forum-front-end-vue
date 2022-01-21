<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Christina Goodwin',
    tel: '(125) 554-8322 x775',
    address: '143 Terry Ranch',
    opening_hours: '08:00',
    description: 'Nam fuga officia sapiente nostrum laboriosam.\nEos autem reiciendis placeat sint.\nRerum soluta dolorem id animi aliquid deserunt.',
    image: 'https://loremflickr.com/320/240/restaurant,food/?random=47.609823435225266',
    viewCounts: 1,
    createdAt: '2022-01-17T02:49:00.000Z',
    updatedAt: '2022-01-21T10:44:21.000Z',
    CategoryId: 3,
    Category: {
      id: 3,
      name: '義大利料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    Comments: [
      {
        id: 51,
        text: 'Veniam aspernatur ipsum quo modi unde voluptas aliquid.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        User: {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password: '$2a$10$b.ovcBOxXBGaC45QBJ2YJuccoZ8muhJehSIaTpD26rtb3UGTDdGh.',
          isAdmin: true,
          image: null,
          createdAt: '2022-01-17T02:49:00.000Z',
          updatedAt: '2022-01-17T02:49:00.000Z'
        }
      },
      {
        id: 101,
        text: 'Corporis vel doloremque sunt eaque qui ea.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        User: {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password: '$2a$10$b.ovcBOxXBGaC45QBJ2YJuccoZ8muhJehSIaTpD26rtb3UGTDdGh.',
          isAdmin: true,
          image: null,
          createdAt: '2022-01-17T02:49:00.000Z',
          updatedAt: '2022-01-17T02:49:00.000Z'
        }
      },
      {
        id: 1,
        text: 'Exercitationem eius dolor.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$n1vgdfTLtSEByYsym5vrSuf4yT2iawpk4SZaGHlT/Nff3vsXba2qq',
          isAdmin: false,
          image: null,
          createdAt: '2022-01-17T02:49:00.000Z',
          updatedAt: '2022-01-17T02:49:00.000Z'
        }
      }
    ]
  }
}

export default {
  data () {
    return {
      restaurant: {
        name: '',
        categoryName: '未分類',
        commentsLength: -1,
        viewCounts: -1
      }
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      this.restaurant = {
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category ? dummyData.restaurant.Category.name : '未分類',
        commentsLength: dummyData.restaurant.Comments ? dummyData.restaurant.Comments.length : 0,
        viewCounts: dummyData.restaurant.viewCounts
      }
    }
  }
}
</script>
