<template>
  <q-card class="q-pa-lg row justify-center">
    <div class="row col-xs-12 col-md-6 q-pt-md">
      <div class="col-12 q-pb-sm">
        <q-input label="name" outlined dense v-model="name"></q-input>
      </div>
      <div class="col-12 q-pb-sm">
        <q-input label="type" outlined dense v-model="type"></q-input>
      </div>
      <div class="col-12 q-pb-sm">
        <q-input label="description" outlined dense v-model="description"></q-input>
      </div>
      <div class="col-12 q-pb-sm">
        <q-select outlined v-model="editable" :options="editableOptions" dense label="editable" />
      </div>
      <div class="col-12 q-pb-sm">
        <q-select outlined v-model="active" :options="activeOptions" dense label="active" />
      </div>
    </div>
    <div class="col-12 text-center q-pa-md">
      <q-btn color="positive">Submit</q-btn>
    </div>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      name: '',
      type: '',
      description: '',
      editable: '',
      active: '',
      activeOptions: [
        true, false
      ],
      editableOptions: [
        true, false
      ]
    }
  },
  methods: {
    createNewRole () {
      console.log('created')
    }
  },
}
</script>
