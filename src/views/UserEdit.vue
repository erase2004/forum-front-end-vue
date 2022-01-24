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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  user: {
    name: 'root update',
    image: 'https://i.imgur.com/58ImzMM.png'
  }
}

export default {
  data () {
    return {
      user: {
        name: '',
        image: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser (userId) {
      console.log('user id:', userId)
      const { user } = dummyData
      this.user = {
        ...this.user,
        name: user.name,
        image: user.image
      }
    },
    handleSubmit (e) {
      const form = e.target // <form></form>
      const formData = new FormData(form)
      // 透過 API 將表單資料送到伺服器
      for (const [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
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
