<template>
  <q-card class="q-pa-lg row justify-center">
    <div class="row col-xs-12 col-md-6 q-pt-md">
      <div class="col-12 q-pb-sm">
        <q-input hide-bottom-space :rules="[ val => val.length >= 3 || 'Please use more than 3 characters']" ref="name" label="name" outlined dense v-model="name"></q-input>
      </div>
      <div class="col-12 q-pb-sm">
        <q-input hide-bottom-space :rules="[ val => val.length >= 3 || 'Please use more than 3 characters']" ref="type" label="type" outlined dense v-model="type"></q-input>
      </div>
      <div class="col-12 q-pb-sm">
        <q-input hide-bottom-space :rules="[ val => val.length >= 3 || 'Please use more than 3 characters']" ref="description" label="description" outlined dense v-model="description"></q-input>
      </div>
      <div class="col-12 q-pb-sm">
        <q-select hide-bottom-space :rules="[ val => val !== '' || 'Please select one' ]" ref="editable" outlined v-model="editable" :options="editableOptions" dense label="editable" />
      </div>
      <div class="col-12 q-pb-sm">
        <q-select hide-bottom-space :rules="[ val => val !== '' || 'Please select one' ]" ref="active" outlined v-model="active" :options="activeOptions" dense label="active" />
      </div>
    </div>
    <div class="col-12 text-center q-pa-md">
      <q-btn color="positive" @click="createNewRole">Submit</q-btn>
    </div>
  </q-card>
</template>

<script>
import { apiCreateNewRole } from '../repositories'
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
        {
          label: 'True',
          value: true,
        },
        {
          label: 'False',
          value: false,
        }
      ],
      editableOptions: [
        {
          label: 'True',
          value: true,
        },
        {
          label: 'False',
          value: false,
        }
      ]
    }
  },
  methods: {
    validateFields () {
      this.$refs.name.validate()
      this.$refs.type.validate()
      this.$refs.description.validate()
      this.$refs.editable.validate()
      this.$refs.active.validate()
    },
    hasErrors () {
      return this.$refs.name.hasError || this.$refs.type.hasError || this.$refs.description.hasError || this.$refs.editable.hasError || this.$refs.active.hasError
    },
    createNewRole () {
      this.validateFields()
      const roleData = {
        name: this.name,
        type: this.type,
        description: this.description,
        editable: this.editable,
        active: this.active
      }

      if (this.hasErrors()) {
        this.$q.notify({
          color: 'negative',
          message: 'Fix errors'
        })
      }
      else {
        apiCreateNewRole(roleData)
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'Submitted'
        })
        this.$router.push({ name: 'home' })
      }
      
    }
  },
}
</script>
