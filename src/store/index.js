import { createStore } from 'vuex'

export default createStore({
  state: {
    transactions: []
  },
  getters: {
    total(state) {
      return state.transactions.reduce((total, transaction) =>
        transaction.type === 'entry' ? total + transaction.value : total - transaction.value,0
      )
    }
  },
  mutations: {
    storeTransactions(state, {id, description, value, type}) {
      state.transactions.push({id, description, value, type})
    },
    storeTransactionsDelete(state, data) {
      state.transactions = state.transactions.filter((transaction) => transaction.id !== data.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
