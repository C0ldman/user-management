<script
  lang="ts"
  setup>
import {
  useFetch
} from "@/composables/fetch.ts"
import {
  useRouter
} from "vue-router"
import {
  ref
} from "vue";

const {
  data,
  isLoading
} = useFetch('https://jsonplaceholder.typicode.com/users');

const router = useRouter();

const headers = [
  {title: 'Name', value: 'name', sortable: false},
  { title: 'Email', value: 'email', sortable: false},
  { title: 'Phone', value: 'phone', sortable: false},
  { title: 'Company name', value: 'company.name', sortable: false},
]

const search = ref('')

const handleClick = function (e: Event, row) {
  router.push('/users/' + row.item.id);
}
</script>

<template>
  <v-container>
    <v-text-field
      v-model="search"
      label="Search"></v-text-field>
    <v-data-table
      key="id"
      :headers="headers"
      :items="data"
      :loading="isLoading"
      :mobile-breakpoint="580"
      :search="search"
      hide-default-footer
      @click:row="handleClick"
    >
      <template
        #loading>
        <v-skeleton-loader
          class="mx-auto border"
          type="table"
        ></v-skeleton-loader>
      </template>
    </v-data-table>
  </v-container>
</template>

<style
  scoped>

</style>