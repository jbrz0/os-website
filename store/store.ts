import { createStore } from 'easy-peasy'

import sound from './sound'
import labs from './labs'

const store = createStore({

  sound,
  labs,

})

export default store
