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
      <tbody v-show="!isLoading">
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin | userRole }}</td>
          <td>
            <template v-if="currentUser.id !== user.id">
              <button
                v-show="user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleUserRole(user)"
              >
                set as user
              </button>
              <button
                v-show="!user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.stop.prevent="toggleUserRole(user)"
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
import adminAPI from '@/apis/admin'
import { mapState } from 'vuex'
import { Toast } from './../utils/helpers'

export default {
  components: {
    AdminNav
  },
  filters: {
    userRole (isAdmin) {
      return isAdmin ? 'admin' : 'user'
    }
  },
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers () {
      try {
        const response = await adminAPI.users.get()

        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }

        this.users = response.data.users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      } finally {
        this.isLoading = false
      }
    },
    async toggleUserRole ({ id: userId, isAdmin }) {
      try {
        const { data } = await adminAPI.users.toggleRole({ userId, isAdmin: !isAdmin })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin
            }
          } else {
            return user
          }
        })

        Toast.fire({
          icon: 'success',
          title: '成功更新使用者角色'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者角色，請稍後再試'
        })
      }
    }
  }
}
</script>
