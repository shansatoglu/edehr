import InstoreHelper from './instoreHelper'
import { setApiError } from '../../helpers/ehr-utils'
const API = 'users'
const NAME = 'UserStore'
const OBJ = 'user'
const debug = false

const state = {
  dataStore: {}
}

const getters = {
  fullName: state => {
    let info = state.dataStore
    let name = info ? info.fullName : ''
    return name
  },
  userId: state => {
    return state.dataStore._id
  },
  username: state => {
    let info = state.dataStore
    let name = info ? info.givenName : ''
    return name
  }
}

const actions = {
  load ({dispatch, commit}, id) {
    return dispatch('get',id)
      .then( (user) => {
        if(debug) console.log('User store loaded ', user)
        return commit('set', user)
      })
  },
  get (context, id) {
    let url = 'get/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let user = response.data[OBJ]
      if(debug) console.log('response.data', response.data)
      if (!user) {
        let msg = `ERROR the could not get ${NAME} ${id}`
        setApiError(msg)
        return
      }
      return user
    })
  },
}

const mutations = {
  set: (state, user) => {
    state.dataStore = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
