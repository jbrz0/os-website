import sound from '../store/sound'
import type {SoundModel} from '../model/SoundModel'

export interface StoreModel {
  sound: SoundModel
}

const model: StoreModel = {
  sound,
}

export default model
