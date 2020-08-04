import Sidebar from './Sidebar'
import BtnStatic from '../shared/BtnStatic'
import Card from './Card'

import posts from '../../markdown/0-index'

const Container: React.FC<React.ReactNode> = () => {

  // Get labs from all posts metadata
  const labs: any = posts.filter(post => post.isLab === true)

  return <>
    <div className="pt-24 lg:pt-40 pb-32 bg-black min-h-screen">
      <div className="mx-auto px-12 grid md:grid-cols-1 lg:grid-cols-3 lg:gap-2 container labs-container">

        <div className="md:col-span-1 mb-4 px-2 lg:px-auto lg:mb-auto lg:col-span-1">
          <Sidebar />
        </div>

        <div className="md:col-span-1 lg:col-span-2 lab-cards">

          {labs.map((lab, i: number) => <Card
            difficulty={lab.difficulty}
            slug={lab.slug}
            key={i} />)}

          <BtnStatic className="border-solid border border-gray-300
          text-lg w-1/2 text-white clear-both block cursor-pointer
          hover:bg-gray-300 mx-auto mt-10">Load More</BtnStatic>
        </div>

      </div>
    </div>
  </>
}

export default Container
