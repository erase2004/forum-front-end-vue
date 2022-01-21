<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>

import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from './../components/CreateComment.vue'

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

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
    updatedAt: '2022-01-21T10:44:21.507Z',
    CategoryId: 3,
    Category: {
      id: 3,
      name: '義大利料理',
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z'
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  },
  isFavorited: false,
  isLiked: false
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment (commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>
