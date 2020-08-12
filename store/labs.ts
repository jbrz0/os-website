import { action, thunk } from 'easy-peasy'
import type {LabsModel} from '../model/LabsModel'

const labs: LabsModel = {

  //* State
  text: '',
  active: [],
  difficulty: 'any-difficulty',
  techFilter: 'any-tech',

  //* Actions
  setText: action((state, payload) => {
    state.text = payload
  }),

  setActive: action((state, payload: any) => {
    // Set active tags to component state
    const tList = payload
    let current: Array<any> = []

    tList.map(tag => {
      if (tag.classList.contains('active')) current.push(tag.innerHTML)
    })

    // @ts-ignore
    // TS / easy-peasy mapping bug - update soon in v3.4
    state.active = current
  }),

  setDifficulty: action((state, payload) => {
    state.difficulty = payload
  }),

  setTechFilter: action((state, payload) => {
    state.techFilter = payload
  }),

}

export default labs
