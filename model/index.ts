import sound from '../store/sound'
import labs from '../store/labs'
import type {SoundModel} from '../model/SoundModel'
import type {LabsModel} from '../model/LabsModel'

export interface StoreModel {
  sound: SoundModel
  labs: LabsModel
}

const model: StoreModel = {
  sound,
  labs,
}

export default model
