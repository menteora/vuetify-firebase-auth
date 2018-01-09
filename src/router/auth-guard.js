import store from '../store'

export default (to, from, next) => {
  console.log(store.getters.user)
  console.log(to.fullPath)
  if (to.fullPath === '/logout') {
    console.log('called')
    store.dispatch('logout')
  } else {
    console.log('not called')
  }
  console.log(store.getters.user)
  if (store.getters.user) {
    next()
  } else {
    next('/signin')
  }
}
