import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myName: '',
    myKey: '',
    roomName: '',
    room_code: '',
    score: 0,
    isCreator: false,
    socket: null,
    otherPlayers: {}
  },
  mutations: {
    resetState(state, payload) {
      state.roomName = "",
        state.isCreator = false,
        state.myKey = "",
        state.score = 0,
        state.otherPlayers = {}

    },
    setMyName(state, data) {
      state.myName = data
    },
    setSocket(state, data) {
      state.socket = data
    },
    setIsCreator(state, data) {
      state.isCreator = data
    },
    setMyKey(state, data) {
      state.myKey = data
    },
    setRoomName(state, data) {
      state.roomName = data
    },
    setScore(state, data) {
      state.score = data
    },
    setOtherPlayers(state, data) {
      delete data[state.myKey]
      console.log(data)
      state.otherPlayers = data
    },
    setRoomCode(state, data) {
      state.room_code = data
    }
  },
  actions: {},
  modules: {}
})