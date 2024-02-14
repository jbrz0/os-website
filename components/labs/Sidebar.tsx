import { useState, useEffect, useRef } from 'react'
import {useStoreState, useStoreActions} from '../../hooks/useStore'
import Select from 'react-select'
import posts from '../../markdown/0-index'

interface Content {
  value: string,
  label: string,
}
const difficultyOptions: Content[] = [
  { value: 'any-difficulty', label: 'Any Difficulty' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
]

const Sidebar: React.FC<React.ReactNode> = () => {

  const tagBox = useRef<HTMLDivElement>(null)

  function activeClass(e: any) {
    // Set active color to tag box in UI
    e.target.classList.toggle('active')
    setActive(Array.from(tagBox.current.children))
  }

  // Store and update search variables in global state
  const setActive = useStoreActions(actions => actions.labs.setActive)
  const setText = useStoreActions(actions => actions.labs.setText)
  const setDifficulty = useStoreActions(actions => actions.labs.setDifficulty)
  const setTechFilter = useStoreActions(actions => actions.labs.setTechFilter)

  // Get tags, tech from all posts metadata
  const [tags, setTags] = useState<Array<string>>([])
  const [tech, setTech] = useState<Array<string>>([])

  function filterText(e) {
    setText(e.target.value)
  }

  // Adjust the difficulty setting in global store
  function filterDifficulty(value: Content) {
    const selected: string = value.value
    if (selected === 'any-difficulty') setDifficulty('any-difficulty')
    else if (selected === 'easy') setDifficulty('easy')
    else if (selected === 'medium') setDifficulty('medium')
    else if (selected === 'hard') setDifficulty('hard')
  }

  function filterTech(value: Content) {
    const selected: string = value.value
    setTechFilter(selected)
  }

  useEffect(() => {

    // Get and filter our duplicate tags
    const allTags: Array<string> = posts.map(post => post.tags).flat(1)
    const filteredTags: Array<string> = allTags.filter((value, i) => allTags.indexOf(value) === i)
    setTags([...filteredTags])

    // Get and filter our duplicate tech
    const allTech: Array<string> = posts.map(post => post.tech).flat(1)
    const allTechT: Array<string> = allTech.filter((truthy) => truthy)
    const filteredTech: Array<string> = allTechT.filter((value, i) => allTechT.indexOf(value) === i)

    let techFormat = []
    filteredTech.map(item => {

      techFormat.push({
        value: item,
        label: item,
      })
    })
    setTech(techFormat)

  }, [])

  return <div className="bg-gray-800 rounded-sm w-full p-8 xl:p-10">
      <h1 className="text-white text-3xl mb-3">Labs</h1>
      <p className="text-gray-200 mb-8">Experimental demos using various web technologies</p>

      <div className="relative mb-4">
        <input
          className="bg-gray-1000 text-gray-100 text-lg focus:outline-none rounded
          py-4 pl-6 pr-16 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Search Labs"
          onChange={filterText}
          />
        <img src="icons/search.svg" className="absolute right-0 top-0 mr-5"
          style={{width: '1.5rem', marginTop: '1.15rem'}}/>
      </div>

      <Select
        className="selector mb-4"
        options={difficultyOptions}
        placeholder="Difficulty"
        id={'1'}
				instanceId={'1'}
        inputId={'1'}
        isSearchable={false}
        onChange={filterDifficulty}
        defaultValue={{value: "any-difficulty", label: 'Any Difficulty' }}
      />

      <Select
        className="selector mb-6"
        options={tech}
        placeholder="Tech"
        id={'2'}
				instanceId={'2'}
        inputId={'2'}
        isSearchable={false}
        onChange={filterTech}
        defaultValue={{value: "any-tech", label: 'Any Tech' }}
      />

      <div className="tags" ref={tagBox}>
        {tags.map((tag, i) => {
          return <span onClick={(e) => activeClass(e)} key={i}>{tag}</span>
        })}
      </div>
    </div>
}

export default Sidebar
