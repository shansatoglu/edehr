import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { setApiError } from '../../helpers/ehr-utils'
const API = 'assignments'
const debug = false

const state = {
  assignmentsListing: [],
}

const getters = {
  list: state => {
    return state.assignmentsListing
  }
}

const actions = {

  loadAssignments (context) {
    let url = 'consumer/' + StoreHelper.toolConsumerId()
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.assignments
      if(debug) console.log('loadAssignments response.data', list)
      if (!list) {
        let msg = 'ERROR the system should have assignments'
        console.error(msg)
        setApiError(msg)
        return
      }
      let sdList = StoreHelper.getSeedDataList()
      list.forEach(ass => {
        let sd = sdList.find(sd => { return sd._id === ass.seedDataId })
        ass.seedDataObj = sd || {}
      })
      context.commit('setAssignmentsListing', list)
      return list
    })
  },

  // loadSeedsIntoAssignments (context) {
  //   let sdList = StoreHelper.getSeedDataList()
  //   let assList = decoupleObject(StoreHelper.getAssignmentsList())
  //   console.log('loadSeedsIntoAssignments assList', assList)
  //   assList.forEach(ass => {
  //     if (ass.seedDataId) {
  //       let sd = sdList.find(sd => {
  //         return sd._id === ass.seedDataId
  //       })
  //       ass.seedDataObj = sd || {}
  //     }
  //   })
  //   context.commit('setAssignmentsListing', assList)
  // },

  createAssignment (context, payload) {
    let url = undefined
    if(debug) console.log('send assignment data ', url, payload)
    return InstoreHelper.postRequest(context, API, url, payload).then(results => {
      // let resultsData = results.data
      if(debug) console.log('assignment post responded with:', JSON.stringify(resultsData))
      return context.dispatch('loadAssignments')
    })
  },

  updateAssignment (context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = id
    if(debug) console.log('updateAssignment', url, payload)
    return InstoreHelper
      .putRequest(context, API, url, payload)
      .then(results => {
        let resultsData = results.data
        if(debug) console.log('assignment post responded with:', JSON.stringify(resultsData))
        return context.dispatch('loadAssignments')
      })
      .catch(err => {
        let msg = 'error in update assignment ' + err
        console.error(msg)
        setApiError(msg)
      })
  }
}

const mutations = {
  setAssignmentsListing: (state, cData) => {
    if(debug) console.log('setAssignmentsListing ', cData)
    state.assignmentsListing = cData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
