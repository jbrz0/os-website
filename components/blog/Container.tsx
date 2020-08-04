import {useState, useEffect} from 'react'
import Item from './Item'
import BtnStatic from '../shared/BtnStatic'
import Select from 'react-select'

import posts from '../../markdown/0-index'

interface Content {
  value: string,
  label: string,
}

const tags: Content[] = [
  { value: 'animation', label: 'Animation' },
  { value: 'tool', label: 'Tool' },
  { value: 'fun', label: 'Fun' },
  { value: 'experimental', label: 'Experiments' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'component', label: 'Component' },
  { value: 'resource', label: 'Resource' },
]

const sort: Content[] = [
  { value: 'recent', label: 'Recent' },
  { value: 'popular', label: 'Popular' },
]

const Intro: React.FC<React.ReactNode> = () => {

  function activeClass(e: any) {
    e.target.classList.toggle('active')
  }

  // Get tags, tech from all posts metadata
  const [tags, setTags] = useState<Array<string>>([])

  useEffect(() => {
    // Get and filter our duplicate tags
    const allTags: Array<string> = posts.map(post => post.tags).flat(1)
    const filteredTags: Array<string> = allTags.filter((value, i) => allTags.indexOf(value) === i)
    setTags([...filteredTags])
  }, [])

  return <>
    <div className="bg-gray-1000 blog-header">
      <div className="container mx-auto px-12 sm:px-24 h-full">
        <div className="flex items-center h-full">
          <div className="block mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-center">Visual Jargon</h1>
            <h3 className="text-white text-center text-center mx-3 mt-3 mb-8">A blog about design, tech and new projects</h3>

            <div className="tags text-center">
              {tags.map((tag, i) => {
                return <span onClick={(e) => activeClass(e)} key={i}>{tag}</span>
              })}
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-16 md:px-24 h-full max-w-screen-md py-16 md:py-24 blog-list">
      <Select
        className="selector sort-posts mb-16"
        options={sort}
        placeholder="Sort Posts"
        id={'1'}
        instanceId={'1'}
        inputId={'1'}
      />

      <Item href="#" />
      <Item href="#" />
      <Item href="#" />
      <Item href="#" />
      <Item href="#" />
      <Item href="#" />
      <BtnStatic className="border-solid border border-gray-300
        text-lg w-1/2 text-white clear-both block cursor-pointer
        hover:bg-gray-300 mx-auto mt-10">Load More</BtnStatic>
    </div>
  </>
}

export default Intro
