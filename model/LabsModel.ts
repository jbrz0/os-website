import { Action, Thunk } from 'easy-peasy'

export interface LabsModel {
  text: string
  active: any
  difficulty: string
  techFilter: string

  setText: Action<LabsModel, string>
  setActive: Action<Array<Element>, Array<Element>>
  setDifficulty: Action<LabsModel, string>
  setTechFilter: Action<LabsModel, string>
  // setSound: Action<SoundModel, string>
}

export default LabsModel
