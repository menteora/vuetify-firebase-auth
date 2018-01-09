<template>
  <v-app>
    <v-navigation-drawer
      fixed
      temporary
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in items"
          :key="i"
          router
          :to="item.to" 
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app clipped-left>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="(item, i) in items" :key="i">
        <v-btn 
          exact 
          router 
          :to="item.to" 
          flat
        >
          <v-icon left v-html="item.icon"></v-icon>{{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <v-container>
          <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
              <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
          </v-layout>
          <router-view></router-view>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppAlert from './components/shared/AppAlert'

export default {
  components: {
    AppAlert
  },
  data () {
    return {
      drawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    items () {
      let items = [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'label',
          title: 'Signin',
          to: '/signin'
        }]
      if (this.$store.getters.user) {
        items = [
          {
            icon: 'label',
            title: 'HelloWorld',
            to: '/hello'
          },
          {
            icon: 'label',
            title: 'Logout',
            to: '/logout'
          }
        ]
      }
      return items
    }
  }
}
</script>
