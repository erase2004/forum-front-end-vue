<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="300"
          height="300"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      user: {
        name: '',
        image: ''
      },
      isProcessing: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params

    if (Number(userId) !== this.currentUser.id) {
      this.$router.replace({ name: 'not-found' })
    } else {
      next()
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser (newValue) {
      this.setUser(newValue)
    }
  },
  methods: {
    setUser (currentUser) {
      const { id } = this.$route.params

      if (Number(id) !== currentUser.id) {
        this.$router.replace({ name: 'not-found' })
        return
      }

      try {
        this.user = {
          ...this.user,
          name: currentUser.name,
          image: currentUser.image
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法設定用戶資料，請稍後再試'
        })
      }
    },
    async handleSubmit (e) {
      const form = e.target // <form></form>
      const formData = new FormData(form)

      if (formData.name === '') {
        Toast.fire({
          icon: 'warning',
          title: '請設定用戶名稱'
        })
        return
      }

      try {
        this.isProcessing = true

        const { data } = await usersAPI.update({ userId: this.currentUser.id, formData })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: '成功更新用戶資訊'
        })

        this.$router.push({ name: 'user', params: { id: this.currentUser.id } })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新用戶資訊，請稍後再試'
        })
      } finally {
        this.isProcessing = false
      }
    },
    handleFileChange (e) {
      const { files } = e.target

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    }
  }
}
</script>
