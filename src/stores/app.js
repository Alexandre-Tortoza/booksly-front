import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    appLayout: false,
    userLogin: false,
  }),
  actions: {
    changeToApp() {
      this.appLayout = true
    },
    changeToPublic() {
      this.appLayout = false
    },
    login() {
      this.userLogin = true
    },
    logout() {
      this.userLogin = false
    },
  },
})
