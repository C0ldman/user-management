<script
  lang="ts"
  setup>
import type {
  User
} from "@/types/user"
import {
  computed
} from "vue";

const props = defineProps<{
  user: User
}>()

const userAddress = computed(() => [props.user.address.street, props.user.address.suite, props.user.address.city, props.user.address.zipcode].join(', '))
</script>

<template>

  <v-card
    elevation="6"
    min-width="400">
    <v-cart-title>
      <p
        class="text-h3 font-weight-black ma-4">
        {{
          props.user.name
        }}
      </p>
    </v-cart-title>
    <v-card-subtitle>
      <p
        class="text-h6 font-weight-black">
        {{
          props.user.username
        }}
      </p>
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          sm="6">
          <p>
            Personal
            information</p>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                Email:
              </v-list-item-title>
              <a
                :href="'mailto:'+props.user.email">{{ props.user.email }}</a>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                Phone:
              </v-list-item-title>
              <a
                :href="'tel:'+props.user.phone">{{ props.user.phone }}</a>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                Website:
              </v-list-item-title>
              <a
                :href="'https://'+props.user.website"
                target="_blank">{{ props.user.website }}</a>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                Address:
              </v-list-item-title>
              {{
                userAddress
              }}
            </v-list-item>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          sm="6">
          <p>
            Company
            information</p>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                Company:
              </v-list-item-title>
              <p>{{ props.user.company.name }}</p>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                Catch
                phrase:
              </v-list-item-title>
              <p>{{ props.user.company.catchPhrase }}</p>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>