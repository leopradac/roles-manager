<template>
  <q-page class="flex flex-center row">
    <div class="col-12 row content-center q-pa-lg">

      <!-- first section -->
      <div class="title col-12 text-h3 q-pb-xl">
        User Role Management
      </div>

      <!-- second section -->
      <div class="menu col-12 row justify-between">
        <!-- left side -->
        <div class="left-side col-6 row">
          <!-- search -->
          <div class="col-6 q-px-sm">
            <q-input bottom-slots v-model="text" label="Search" dense>
              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <!-- selection -->
          <div class="col-6 q-px-sm">
            <q-select v-model="model" :options="options" label="Rol Status" dense />
          </div>
        </div>
        <!-- right side -->
        <div class="right-side q-pr-sm col-shrink row content-center">
          <q-btn color="blue">Create New Role</q-btn>
        </div>
      </div>

      <!-- third section -->
      <div class="content col-12 row">
        <div v-for="(item, index) in filteredRoleList" :key="index" class="col-4 row">
          <RoleCard :item="item" class="row content-stretch" />
        </div>
      </div>

    </div>
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
  </q-page>
</template>

<script>
import { getRoles } from '../repositories/index'
import RoleCard from 'components/RoleCard'
export default {
  name: 'PageIndex',
  components: { RoleCard },
  data () {
    return {
      text: '',
      model: null,
      options: [
        'Active', 'Inactive', 'Active and Inactive'
      ],
      roleList: []
    }
  },
  methods: {
    async getRolesFromApi () {
      this.roleList = await getRoles()
    }
  },
  computed: {
    filteredRoleList () {
      const filteredList = this.roleList
      if (this.text !== '') {
        return filteredList.filter(item => {
          return item.name.toLowerCase().includes(this.text.toLowerCase())
        })
      }
      if (this.model !== null && this.model !== 'Active and Inactive') {
        return filteredList.filter(item => {
          const mapper = { Active: true, Inactive: false}
          return item.active === mapper[this.model]
        })
      }
      return filteredList
    }
  },
  mounted() {
    this.getRolesFromApi()
  },
}
</script>
