<template>
  <q-page class="flex flex-center row">
    <div class="col-12 row content-center">

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
              <!-- counter maxlength="12" -->
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
        <div class="right-side col-shrink row content-center">
          <q-btn color="blue">Create New Role</q-btn>
        </div>
      </div>

      <!-- third section -->
      <div class="content col-12">Content</div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      text: '',
      model: null,
      options: [
        'Active', 'Inactive', 'Active and Inactive'
      ]
    }
  }
}
</script>
