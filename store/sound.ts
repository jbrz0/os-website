import { action, thunk } from 'easy-peasy'
import type {SoundModel} from '../model/SoundModel'
import Cookies from 'js-cookie'

let soundCookie = Cookies.get('sound')

const sound: SoundModel = {

  //* State
  sound: true,
  soundIcon: '/icons/soundon.svg',

  //* Thunks
  setSound: thunk(async (actions, payload, {getState}) => {

    if (soundCookie === 'on' || soundCookie === undefined) actions.soundOn()
    else actions.soundOff()
  }),

  toggleSound: thunk(async (actions, payload, {getState}) => {

    if (getState().sound === true) actions.soundOff()
    else if (getState().sound === false) actions.soundOn()
  }),

  //* Actions
  soundOn: action((state) => {
    Cookies.set('sound', 'on')
    state.sound = true
    state.soundIcon = '/icons/soundon.svg'
  }),
  soundOff: action((state) => {
    Cookies.set('sound', 'off')
    state.sound = false
    state.soundIcon = '/icons/soundoff.svg'
  }),

}

export default sound
