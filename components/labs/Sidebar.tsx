import Select from 'react-select'

interface Content {
  value: string,
  label: string,
}
const difficulty: Content[] = [
  { value: 'any-difficulty', label: 'Any Difficulty' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
]

const tech: Content[] = [
  { value: 'any-tech', label: 'Any Tech' },
  { value: 'figma', label: 'Figma' },
  { value: 'node', label: 'Node' },
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'Typescript' }
]

const tags: Content[] = [
  { value: 'animation', label: 'Animation' },
  { value: 'tool', label: 'Tool' },
  { value: 'fun', label: 'Fun' },
  { value: 'experimental', label: 'Experiments' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'component', label: 'Component' },
  { value: 'resource', label: 'Resource' },
]

const Sidebar: React.FC<React.ReactNode> = () => {

  function activeClass(e: any) {
    e.target.classList.toggle('active')
  }

  return <div className="bg-gray-800 rounded-sm w-full p-10">
      <h1 className="text-white text-3xl mb-3">Labs</h1>
      <p className="text-gray-200 mb-8">Experimental demos using various web technologies</p>

      <div className="relative mb-4">
        <input
          className="bg-gray-1000 text-gray-100 text-lg focus:outline-none rounded
          py-4 pl-6 pr-16 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Search Labs" />
        <img src="icons/search.svg" className="absolute right-0 top-0 mr-5"
          style={{width: '1.5rem', marginTop: '1.15rem'}}/>
      </div>

      <Select
        className="selector mb-4"
        options={difficulty}
        placeholder="Difficulty"
        id={'1'}
				instanceId={'1'}
				inputId={'1'}
      />

      <Select
        className="selector mb-6"
        options={tech}
        placeholder="Tech"
        id={'2'}
				instanceId={'2'}
				inputId={'2'}
      />

      <div className="tags">
        {tags.map((tag, i) => {
          return <span onClick={(e) => activeClass(e)} key={i}>{tag.label}</span>
        })}
      </div>
    </div>
}

export default Sidebar
