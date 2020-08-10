import { Action, Thunk } from 'easy-peasy'

export interface SoundModel {
  sound: boolean
  soundIcon: string
  setSound: Thunk<SoundModel>
  toggleSound: Thunk<SoundModel>
  soundOn: Action<SoundModel>
  soundOff: Action<SoundModel>
  // setSound: Action<SoundModel, string>
}

export default SoundModel
