<script
  lang="ts"
  setup>
import {
  useRouter,
  useRoute
} from "vue-router"
import {
  useFetch
} from "@/composables/fetch.ts";
import UserInfo
  from "@/components/UserInfo.vue";

const router = useRouter()
const route = useRoute()
const {
  data,
  isLoading
} = useFetch('https://jsonplaceholder.typicode.com/users/' + route.params.id)
</script>

<template>
  <v-skeleton-loader
    v-if="isLoading"
    class="mx-auto border"
    max-width="300"
    type="card, button"
  ></v-skeleton-loader>

  <user-info
    v-else
    :user="data"></user-info>
  <v-btn
    class="mt-4"
    @click="router.push('/users')">
    back
  </v-btn>
</template>

<style
  scoped>

</style>