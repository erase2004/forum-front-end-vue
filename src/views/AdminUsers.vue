<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin | userPermission }}</td>
          <td>
            <template v-if="user.name !== 'root'">
              <button
                v-show="user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="togglePermission(user.id)"
              >
                set as user
              </button>
              <button
                v-show="!user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="togglePermission(user.id)"
              >
                set as admin
              </button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      isAdmin: true
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      isAdmin: false
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      isAdmin: false
    }
  ]
}

export default {
  components: {
    AdminNav
  },
  filters: {
    userPermission (isAdmin) {
      return isAdmin ? 'admin' : 'user'
    }
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    fetchUsers () {
      this.users = dummyData.users
    },
    togglePermission (userId) {
      console.log(`toggle permission of #${userId}`)
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }

        return user
      })
    }
  }
}
</script>
