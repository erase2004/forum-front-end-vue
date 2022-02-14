<template>
  <div
    v-show="!isLoading"
    class="container"
  >
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-followed="isFollowed"
      @after-follow="addFollower"
      @after-unfollow="deleteFollower"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followerings="followings" />
        <br>
        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />
        <br>
        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
      </div>
    </div>
  </div>
</template>

<script>

import UserProfileCard from './../components/UserProfileCard.vue'
import UserFollowingsCard from './../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentsCard from './../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      user: {
        id: 0,
        name: '',
        email: '@',
        image: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      isLoading: true
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    async fetchUser (userId) {
      try {
        this.isLoading = true

        const response = await usersAPI.get({ userId })

        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }

        const { profile, isFollowed } = response.data
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings
        } = profile

        const commentSet = new Set()
        this.comments = Comments.filter((comment) => {
          if (typeof comment.RestaurantId === 'number' && !commentSet.has(comment.RestaurantId)) {
            commentSet.add(comment.RestaurantId)
            return true
          } else {
            return false
          }
        })

        this.user = {
          ...this.user,
          id,
          name,
          email,
          image,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }

        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants

        this.isLoading = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得用戶資料，請稍後再試'
        })
      }
    },
    addFollower (user) {
      this.followers.push(user)

      const followerMap = new Set()
      this.followers = this.followers.filter((follower) => {
        if (typeof follower.id === 'number' && !followerMap.has(follower.id)) {
          followerMap.add(follower.id)
          return true
        } else {
          return false
        }
      })
      this.user = {
        ...this.user,
        followersLength: this.followers.length
      }
      this.isFollowed = true
    },
    deleteFollower (user) {
      this.followers = this.followers.filter(follower => follower.id !== user.id)
      this.user = {
        ...this.user,
        followersLength: this.followers.length
      }
      this.isFollowed = false
    }
  }
}

</script>
