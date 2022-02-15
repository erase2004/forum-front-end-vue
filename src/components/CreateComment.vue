<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const { data } = await commentsAPI.add({ restaurantId: this.restaurantId, text: this.text })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        const { commentId } = data

        this.$emit('after-create-comment', {
          commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })

        Toast.fire({
          icon: 'success',
          title: '成功建立留言'
        })

        this.text = ''
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法建立留言，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>
