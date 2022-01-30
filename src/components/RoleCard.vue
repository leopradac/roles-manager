<template>
  <div class="q-pa-md">
    <q-card class="card row q-pt-md">
      <div class="col-12 row card-content q-px-md">
        <div
          class="col-12 text-right justify-end q-py-md position-relative"
        >
          <span
            v-show="!item.active"
            class="bg-red text-white q-px-sm q-py-xs absolute"
            style="border-radius: 5px; top: 17px; right: 17px;">
            Inactive
          </span>
        </div>
        <div class="col-12 text-h6">{{item.name}}</div>
        <div class="col-12 text-subtitle1">{{item.type}}</div>
        <div class="col-12 q-py-md">{{item.description}}</div>
        <div class="col-12 q-pb-xl">
          <q-avatar class="q-mr-sm" size="md" v-for="(user, index) in item.users" :key="index">
            <img :src="user.photo_url">
          </q-avatar>
        </div>
      </div>
      <q-card-section class="col-12 card-footer bg-grey-3 row justify-between content-center">
        <div class="row content-center">Date Created: {{ parseDate(item.created_on) }}</div>
        <div class="row" v-if="item.editable">
          <div class="col-6">
            <q-btn dense flat @click="$q.notify('Feature not ready to be used')">Edit</q-btn>
          </div>
          <div class="col-6">
            <q-btn dense flat color="negative" @click="$q.notify('Feature not ready to be used')">Delete</q-btn>
          </div>
        </div>
        <div v-else>
          <q-icon name="lock"></q-icon>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props: {
    item: Object
  },
  methods: {
    parseDate (dateToParse) {
      return moment(dateToParse).format('L');
    }
  },
}
</script>
