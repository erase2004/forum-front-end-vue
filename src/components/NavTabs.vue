<template>
  <ul class="nav nav-tabs mb-4">
    <li
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-item"
    >
      <router-link
        :to="{ name: tab.name }"
        class="nav-link"
        :class="{ 'active': tab.name === 'restaurants' && $route.name === 'restaurants' }"
      >
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  data () {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: '首頁',
          name: 'restaurants'
        },
        {
          id: uuidv4(),
          title: '最新動態',
          name: 'restaurants-feeds'
        },
        {
          id: uuidv4(),
          title: 'TOP 10 人氣餐廳',
          name: 'restaurants-tops'
        },
        {
          id: uuidv4(),
          title: '美食達人',
          name: 'users-top'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav-tabs {
    border-bottom: 1px solid #bd2333;
  }

  .nav-tabs .nav-link:focus,
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    border-color: #bd2333;
    background-color: #bd2333;
    color: white;
}
</style>
