<template>
  <div class="col-3">
    <router-link :to="{name: 'user', params: {id: user.id}}">
      <img
        src="http://via.placeholder.com/300x300?text=No+Image"
        width="140px"
        height="140px"
      >
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="unfollow"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="follow"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      user: this.initialUser
    }
  },
  methods: {
    follow () {
      this.user = {
        ...this.user,
        FollowerCount: this.user.FollowerCount + 1,
        isFollowed: true
      }
    },
    unfollow () {
      this.user = {
        ...this.user,
        FollowerCount: this.user.FollowerCount - 1,
        isFollowed: false
      }
    }
  }
}
</script>
