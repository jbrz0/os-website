import Link from 'next/link'
import type {Post} from '../../markdown/0-index'
import { useState, useEffect, useRef } from 'react'
import postfeed from '../../markdown/0-index'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface Props {
  Search?: any,
}

const Search: React.FC<Props> = (props) => {

  const [allPosts, setAllPosts] = useState<Array<Post>>([])
  const [posts, setPosts] = useState<Array<Post>>([])
  const [visible, setVisible] = useState<boolean>(false)

  // Handle click outside search menu
  const ref = useRef()
  useOnClickOutside(ref, () => setVisible(false))

  function filterPosts(e: React.ChangeEvent<HTMLInputElement>) {

    let val: string = e.target.value.toLowerCase().trim()

    if (val === '') {
      setVisible(false)
      setPosts(allPosts)
    }
    else {
      setVisible(true)

      const filter = allPosts.filter(text => {
        const info: string = `${text.id} ${text.title}`
        return info.toLowerCase().search(val) !== -1
      })

      setPosts(filter)
    }
  }

  useEffect(() => {
    setPosts(postfeed)
    setAllPosts(postfeed)
  }, [])

  return <>
    <input type="text" placeholder="Search..."
      className="bg-gray-700 rounded-sm py-1
      px-2 text-sm text-gray-100 flex justify-end search-input"
      onChange={filterPosts}
      onKeyDown={ (evt) => evt.key === '\\' && evt.preventDefault() }
      />
    <img src="/icons/search.svg" alt="Search"
      className="absolute mr-2 mt-2" />

    <ul className="absolute bg-gray-1000 mt-10 py-4 px-8 rounded-lg shadow-xl search-dd"
      style={{maxWidth: '315px'}} ref={ref}>
      {visible && posts.slice(0, 5).map((post, i) => {

        return <Link href={`/blog/${post.slug}`} key={i}><a className="hover:opacity-75"><li className="pl-3 my-2">
          <div className="text-white font-bold mt-1">{post.title}</div>
          <div className="text-gray-200 text-sm mb-1">{post.date}</div>
        </li></a></Link>
      })}
    </ul>
  </>
}

export default Search
