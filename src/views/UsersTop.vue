<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <!-- UserCard -->
      <UserCard
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import UserCard from './../components/UserCard.vue'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$b.ovcBOxXBGaC45QBJ2YJuccoZ8muhJehSIaTpD26rtb3UGTDdGh.',
      isAdmin: true,
      image: null,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$n1vgdfTLtSEByYsym5vrSuf4yT2iawpk4SZaGHlT/Nff3vsXba2qq',
      isAdmin: false,
      image: null,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$1Gr4T6YHtbz11vGasQ/of.qn0pm74SgMpajlw5Kst6CjH5NGwKnyG',
      isAdmin: false,
      image: null,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
}

export default {
  components: {
    NavTabs,
    UserCard
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
    fetchUsers () {
      this.users = [...dummyData.users]
    }
  }
}
</script>
