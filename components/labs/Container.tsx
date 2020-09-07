import {useState} from 'react'
import Sidebar from './Sidebar'
import BtnStatic from '../shared/BtnStatic'
import {useStoreState} from '../../hooks/useStore'
import Card from './Card'

import posts from '../../markdown/0-index'

const Container: React.FC<React.ReactNode> = () => {

  // Get labs from all posts metadata
  const labs: any = posts.filter(post => post.isLab === true).sort((a, b) => {
    return b.id - a.id
  })

  // Get labs store data
  const active = useStoreState(state => state.labs.active)
  const text = useStoreState(state => state.labs.text)
  const difficulty = useStoreState(state => state.labs.difficulty)
  const techFilter = useStoreState(state => state.labs.techFilter)

  // Amount of posts to show
  const [postAmount, setPostAmount] = useState<number>(8)

  function filterPosts(post) {
    const postHasTag: Array<boolean | undefined> = post.tags.map(tag => {
      if (active.includes(tag)) return true
    })
    const postCheck: boolean = postHasTag.includes(true) ? true : false

    //^ Filter posts based on criteria
    if (active.length === 0) return true
    else if (postCheck) return true

    //^ Catch all
    else return false
  }

  function increasePosts() {

    // Increase posts based on load more btn click
    if (posts.length >= postAmount) setPostAmount(postAmount + 6)
    else if (posts.length < postAmount) {

      const btn: HTMLElement = document.querySelector('.load-more-btn')
      btn.remove()
    }
  }

  return <>

    <div className="pt-24 lg:pt-40 pb-32 bg-black min-h-screen bg-fixed"
      style={{backgroundImage: 'url(/art/rockbg.jpg)', backgroundSize: '250px'}}>

    <img src="/art/ribcage.png" className="opacity-50 object-contain fixed left-0 right-0 mx-auto z-0 top-0 bottom-0 h-screen" />

      <div className="z-10 relative mx-auto px-12 grid md:grid-cols-1 lg:grid-cols-3 lg:gap-2 container labs-container">

        <div className="md:col-span-1 mb-4 px-2 lg:px-auto lg:mb-auto lg:col-span-1">
          <Sidebar />
        </div>

        <div className="md:col-span-1 lg:col-span-2 lab-cards grid grid-cols-2 gap-6 px-2">

          {labs.slice(0, postAmount).filter(post => {
            // Text
            const info: string = `${post.id} ${post.title}`
            return info.toLowerCase().trim().search(text) !== -1
          }).filter(post => {
            // Tags
            return filterPosts(post)
          }).filter(post => {
            // Difficulty
            if (post.difficulty === difficulty) return true
            else if (difficulty === 'any-difficulty') return true
            else if (post.difficulty === 'any-difficulty') return true
            else return false
          }).filter(post => {
            // Tech
            if (post.tech.includes(techFilter)) return true
            else if (techFilter === 'any-tech') return true
            else return false

          }).map((lab, i: number) => <Card
            difficulty={lab.difficulty}
            slug={lab.slug}
            onSite={lab.onSite}
            key={i}
            url={lab.url}
            post={lab} />)}

          {labs.length >= postAmount && <div className="col-span-2">
            <BtnStatic className="border-solid border border-gray-300
            text-lg w-1/2 text-white clear-both block cursor-pointer
            hover:bg-gray-300 mx-auto mt-10" onClick={increasePosts}>Load More</BtnStatic>
          </div>}
        </div>

      </div>
    </div>
  </>
}

export default Container
