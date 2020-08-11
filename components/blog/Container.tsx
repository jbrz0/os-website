import {useState, useEffect, useRef} from 'react'
import Item from './Item'
import BtnStatic from '../shared/BtnStatic'
import Select from 'react-select'
import type {Post} from '../../markdown/0-index'
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
  { value: 'coolness', label: 'Coolness' },
]

const Intro: React.FC<React.ReactNode> = () => {

  const tagBox = useRef<HTMLDivElement>(null)

  function activeClass(e: any) {
    // Set active color to tag box in UI
    e.target.classList.toggle('active')

    // Set active tags to component state
    const tList = Array.from(tagBox.current.children)
    let current: Array<string> = []

    tList.map(tag => {
      if (tag.classList.contains('active')) current.push(tag.innerHTML)
    })

    setActive(current)
  }

  function filterPosts(post) {
    const postHasTag: Array<boolean | undefined> = post.tags.map(tag => {
      if (active.includes(tag)) return true
    })
    const postCheck: boolean = postHasTag.includes(true) ? true : false

    if (active.length === 0) return true
    else if (postCheck) return true
    else return false
  }

  // Get tags, tech from all posts metadata
  const [tags, setTags] = useState<Array<string>>([])

  // Set active tags based on user action (empty === all items)
  const [active, setActive] = useState<Array<string>>([])

  // Blog post sorting
  const [sortType, setSortType] = useState<string>('recent')

  function sortRecent() {
    const recentSort: Array<Post> = posts.sort((a, b) => {
      return b.id - a.id
    })
    return recentSort
  }
  function sortCoolness() {
    const coolnessSort: Array<Post> = posts.sort((a, b) => {
      return b.coolness - a.coolness
    })
    return coolnessSort
  }

  const [recent, setRecent] = useState<Array<Post>>([...sortRecent()])
  const [coolness, setCoolness] = useState<Array<Post>>([...sortCoolness()])

  function sortPosts(value: Content) {
    const selected: string = value.value

    if (selected === 'recent') {
      setSortType('recent')
    }
    else if (selected === 'coolness') {
      setSortType('coolness')
    }
  }

  useEffect(() => {
    // Get and filter our duplicate tags
    const allTags: Array<string> = posts.map(post => post.tags).flat(1)
    const filteredTags: Array<string> = allTags.filter((value, i) => allTags.indexOf(value) === i)
    setTags([...filteredTags])

    // Set posts default to most recent
    setSortType('recent')
  }, [])

  return <>
    <div className="bg-gray-1000 blog-header">
      <div className="container mx-auto px-12 sm:px-24 h-full">
        <div className="flex items-center h-full">
          <div className="block mx-auto">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-center">Visual Jargon</h1>
            <h3 className="text-white text-center text-center mx-3 mt-3 mb-8">A blog about design, tech and new projects</h3>

            <div className="tags text-center" ref={tagBox}>
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
        isSearchable={false}
        onChange={sortPosts}
      />

      {sortType === 'recent' && recent.filter(post => filterPosts(post))
        .map((post, i) => <Item title={post.title}
        date={post.date}
        description={post.description}
        href={`blog/${post.slug}`}
        key={i} />)}

      {sortType === 'coolness' && coolness.filter(post => filterPosts(post))
      .map((post, i) => <Item title={post.title}
        date={post.date}
        description={post.description}
        href={`blog/${post.slug}`}
        key={i} />)}

      <BtnStatic className="border-solid border border-gray-300
        text-lg w-1/2 text-white clear-both block cursor-pointer
        hover:bg-gray-300 mx-auto mt-10">Load More</BtnStatic>
    </div>
  </>
}

export default Intro
