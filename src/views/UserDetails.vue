<script setup
        lang="ts">
import { useRouter, useRoute } from "vue-router"
import {
  useFetch
} from "@/composables/fetch.ts";
import UserInfo
  from "@/components/UserInfo.vue";

const router = useRouter()
const route = useRoute()
const { data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users/'+route.params.id)
</script>

<template>

                <v-skeleton-loader
                        v-if="isLoading"
                        class="mx-auto border"
                        max-width="300"
                        type="card, button"
                ></v-skeleton-loader>
<v-col v-else>
    <user-info :user="data"></user-info>
    <v-btn @click="router.push('/users')" class="mt-4">back</v-btn>
</v-col>


</template>

<style scoped>

</style>