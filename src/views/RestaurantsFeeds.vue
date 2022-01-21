<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <!-- 最新餐廳 NewestRestaurants -->
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Christina Goodwin',
      tel: '(125) 554-8322 x775',
      address: '143 Terry Ranch',
      opening_hours: '08:00',
      description: 'Nam fuga officia sapiente nostrum laboriosam.\nEos autem reiciendis placeat sint.\nRerum soluta dolorem id animi aliquid deserunt.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=47.609823435225266',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 2,
      name: 'Garth Jones',
      tel: '1-993-398-7375',
      address: "519 O'Reilly Plain",
      opening_hours: '08:00',
      description: 'Id fugit quisquam. Fugiat enim dolorem vel placeat est aut labore quia dolorem. Facere tenetur qui velit voluptates ipsam consectetur error.\n \rSit ea sit. Quisquam modi magni voluptas et ipsa dolore quae. Aliquid aut odit assumenda qui accusamus et. Nemo voluptatem esse est ex quis culpa omnis quibusdam qui. Quo explicabo ullam qui velit laborum veritatis et.\n \rEst molestiae ut omnis ut ea sed dolorum tenetur. Consequuntur sint pariatur veniam rerum error nihil pariatur sit. Mollitia magnam ut. At possimus reiciendis.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.331316612710089',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 3,
      name: 'Rogelio Bode',
      tel: '451-166-1767 x02123',
      address: '675 Otha Isle',
      opening_hours: '08:00',
      description: 'Vitae animi exercitationem tempora.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=19.23773213461697',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 4,
      name: 'Nicklaus Schumm',
      tel: '1-031-250-8500',
      address: '6928 Kamren Union',
      opening_hours: '08:00',
      description: 'Et blanditiis qui ut. Ipsa voluptatum sint mollitia esse unde enim eius tenetur fugiat. Consequatur enim nisi ea voluptatem mollitia ut voluptas laudantium esse. Aspernatur veritatis quia occaecati occaecati cum accusamus modi consequuntur. Assumenda possimus eum dolores voluptatem rem. Sunt et quia commodi qui dicta inventore.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=74.26859425248055',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 5,
      name: 'Evelyn Bogisich',
      tel: '756-918-4781 x111',
      address: '242 Walter Rue',
      opening_hours: '08:00',
      description: 'temporibus incidunt iste',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=58.7109189590231',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 6,
      name: 'Mrs. Halle Turner',
      tel: '457.858.1460 x070',
      address: '475 Makenna Court',
      opening_hours: '08:00',
      description: 'Iste reiciendis harum quaerat debitis.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=25.32284134044629',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 7,
      name: 'Jodie Wolff',
      tel: '289-035-9302 x28391',
      address: '011 Aniyah Flats',
      opening_hours: '08:00',
      description: 'Voluptatibus suscipit temporibus itaque animi dolorem nam dicta. Incidunt amet neque. Numquam modi autem quia consequatur repellat enim. Sed aut laboriosam dolores fugiat molestiae. Cumque earum ut voluptatem libero velit sunt repellat. Est quia omnis quia id.\n \rMaxime et ducimus velit sit eveniet placeat dolores hic adipisci. Deleniti quia reprehenderit iure sint. Eveniet ea aut. Odit ipsam voluptate commodi qui libero.\n \rVeniam similique blanditiis provident. Possimus unde laudantium architecto. Voluptatum dolor aliquid fugiat porro et. Fugit vero excepturi dolores quod est distinctio aliquam. Sunt nihil aut quibusdam ducimus. Nesciunt aut animi nesciunt commodi incidunt ut qui.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.8332326562261239',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 8,
      name: 'Uriel Wolf',
      tel: '1-827-429-9780 x473',
      address: '03328 Kristian Green',
      opening_hours: '08:00',
      description: 'Autem adipisci et eligendi aut provident.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.895791248570113',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 9,
      name: 'Dewitt Oberbrunner DVM',
      tel: '853-815-6045',
      address: '21366 Torphy Ways',
      opening_hours: '08:00',
      description: 'dolorem',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=80.93987472585209',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    },
    {
      id: 10,
      name: 'Jewel McKenzie',
      tel: '951.043.1239 x6874',
      address: '26207 Jesse Stream',
      opening_hours: '08:00',
      description: 'Illum assumenda libero nihil pariatur voluptas nisi qui. Delectus voluptatem quo est autem. Assumenda pariatur accusamus totam molestiae consequuntur laboriosam veniam qui qui. Sint modi et.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=3.953301973986423',
      viewCounts: 0,
      createdAt: '2022-01-17T02:49:00.000Z',
      updatedAt: '2022-01-17T02:49:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z'
      }
    }
  ],
  comments: [
    {
      id: 7,
      text: 'Non provident dolores temporibus tempora aspernatur nulla.',
      UserId: 1,
      RestaurantId: 7,
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
      },
      Restaurant: {
        id: 7,
        name: 'Jodie Wolff',
        tel: '289-035-9302 x28391',
        address: '011 Aniyah Flats',
        opening_hours: '08:00',
        description: 'Voluptatibus suscipit temporibus itaque animi dolorem nam dicta. Incidunt amet neque. Numquam modi autem quia consequatur repellat enim. Sed aut laboriosam dolores fugiat molestiae. Cumque earum ut voluptatem libero velit sunt repellat. Est quia omnis quia id.\n \rMaxime et ducimus velit sit eveniet placeat dolores hic adipisci. Deleniti quia reprehenderit iure sint. Eveniet ea aut. Odit ipsam voluptate commodi qui libero.\n \rVeniam similique blanditiis provident. Possimus unde laudantium architecto. Voluptatum dolor aliquid fugiat porro et. Fugit vero excepturi dolores quod est distinctio aliquam. Sunt nihil aut quibusdam ducimus. Nesciunt aut animi nesciunt commodi incidunt ut qui.',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=0.8332326562261239',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 4
      }
    },
    {
      id: 25,
      text: 'Suscipit voluptas iste ducimus nihil nesciunt est.',
      UserId: 1,
      RestaurantId: 25,
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
      },
      Restaurant: {
        id: 25,
        name: 'Travon Smitham',
        tel: '1-761-442-6412',
        address: '72274 Schinner Harbors',
        opening_hours: '08:00',
        description: 'a',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=23.58946353581528',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 1
      }
    },
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
      },
      Restaurant: {
        id: 1,
        name: 'Christina Goodwin',
        tel: '(125) 554-8322 x775',
        address: '143 Terry Ranch',
        opening_hours: '08:00',
        description: 'Nam fuga officia sapiente nostrum laboriosam.\nEos autem reiciendis placeat sint.\nRerum soluta dolorem id animi aliquid deserunt.',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=47.609823435225266',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 3
      }
    },
    {
      id: 66,
      text: 'Et ut provident qui aut quasi.',
      UserId: 1,
      RestaurantId: 16,
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
      },
      Restaurant: {
        id: 16,
        name: 'Augusta Conroy',
        tel: '1-877-269-9853',
        address: '489 Ankunding Lights',
        opening_hours: '08:00',
        description: 'Sed doloremque est tempora tenetur. Voluptas qui autem deserunt at et aut ex asperiores. Sunt ab et atque hic consectetur autem. Deserunt voluptas excepturi et nobis.\n \rCumque reprehenderit corrupti saepe in quo. Sit aut repudiandae. Accusantium soluta consequuntur voluptatem aut. Ut a qui ad quaerat beatae magnam quo.\n \rNulla tenetur aliquam officia. Nihil veniam labore minus rerum officia. Eum nesciunt nemo qui autem dolorem. Illo asperiores voluptatibus. Tempora dicta pariatur saepe esse et quaerat quis.',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=86.68374202349311',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 2
      }
    },
    {
      id: 90,
      text: 'Eveniet commodi perferendis rerum maxime dolores.',
      UserId: 1,
      RestaurantId: 40,
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
      },
      Restaurant: {
        id: 40,
        name: 'Leopold Feil',
        tel: '(763) 952-6484 x16872',
        address: '3499 Mitchell Glen',
        opening_hours: '08:00',
        description: 'consequatur',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=64.39926912853551',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 2
      }
    },
    {
      id: 113,
      text: 'Expedita aliquid id sapiente eveniet odio accusantium itaque nihil voluptatem.',
      UserId: 1,
      RestaurantId: 13,
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
      },
      Restaurant: {
        id: 13,
        name: 'Bianka Cassin',
        tel: '281-802-5255 x982',
        address: '999 Marianna Club',
        opening_hours: '08:00',
        description: 'Et atque soluta. Magni sunt mollitia alias. Similique id dolor rerum earum nulla. Esse qui ipsam porro et sapiente nihil.\n \rArchitecto mollitia adipisci in veniam sed. Aut rem nemo. Nemo vel ut rerum eos iste eos molestiae. Qui earum ut ut id sed voluptatibus voluptatem et. Enim aut fugiat necessitatibus molestias. Nihil corrupti quis.\n \rSuscipit aut omnis amet eum. Et vel atque laborum rerum beatae sapiente. Sed aperiam soluta commodi voluptatibus sed aliquam. Porro atque omnis ad quo. Sapiente illo quisquam.',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=59.19956972661169',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 4
      }
    },
    {
      id: 135,
      text: 'Et enim dolores ut beatae porro nam quibusdam.',
      UserId: 1,
      RestaurantId: 35,
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
      },
      Restaurant: {
        id: 35,
        name: 'Heather Moen',
        tel: '357-553-4466',
        address: '89164 Graham Fort',
        opening_hours: '08:00',
        description: 'Odit in provident id quod totam et.',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=14.258212341118238',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 4
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
      },
      Restaurant: {
        id: 1,
        name: 'Christina Goodwin',
        tel: '(125) 554-8322 x775',
        address: '143 Terry Ranch',
        opening_hours: '08:00',
        description: 'Nam fuga officia sapiente nostrum laboriosam.\nEos autem reiciendis placeat sint.\nRerum soluta dolorem id animi aliquid deserunt.',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=47.609823435225266',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 3
      }
    },
    {
      id: 28,
      text: 'In totam et.',
      UserId: 2,
      RestaurantId: 28,
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
      },
      Restaurant: {
        id: 28,
        name: 'Maximo Predovic',
        tel: '1-833-687-1141 x5621',
        address: '687 Anabel Landing',
        opening_hours: '08:00',
        description: 'provident esse nesciunt',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=92.09579148354837',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 5
      }
    },
    {
      id: 43,
      text: 'Mollitia sunt earum iure et facere et.',
      UserId: 2,
      RestaurantId: 43,
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
      },
      Restaurant: {
        id: 43,
        name: 'Ursula Hoeger',
        tel: '431.176.0467 x46927',
        address: '68684 Hettie Drive',
        opening_hours: '08:00',
        description: 'Ex sapiente nisi.\nOdio sunt nihil.',
        image: 'https://loremflickr.com/320/240/restaurant,food/?random=81.80925197193756',
        viewCounts: 0,
        createdAt: '2022-01-17T02:49:00.000Z',
        updatedAt: '2022-01-17T02:49:00.000Z',
        CategoryId: 1
      }
    }
  ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>
