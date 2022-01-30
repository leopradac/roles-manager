<template>
  <q-page class="flex flex-center row content-center" padding>
    <div class="text-h5 text-bold col-12 text-center q-pa-lg">
      Create Role Page
    </div>

    <div class="row justify-center">
      <NewRoleForm class="col-xs-12 col-md-4 col-lg-3"/>
    </div>
  </q-page>
</template>

<script>
import NewRoleForm from 'components/NewRoleForm'
export default {
  // name: 'PageName',
  mounted() {
    console.log('store', this.$store)
  },
  components: { NewRoleForm }
}
</script>
