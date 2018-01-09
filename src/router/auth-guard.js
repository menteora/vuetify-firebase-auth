import store from '../store'

export default (to, from, next) => {
  if (to.fullPath === '/logout') { store.dispatch('logout') }
  if (store.getters.user) {
    next()
  } else {
    next('/signin')
  }
}
