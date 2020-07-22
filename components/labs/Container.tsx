import Sidebar from './Sidebar'
import BtnStatic from '../shared/BtnStatic'
import Card from './Card'

const Container: React.FC<React.ReactNode> = () => {

  return <>
    <div className="pt-40 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-10 grid grid-cols-3 gap-6">

        <div className="col-span-1">
          <Sidebar />
        </div>

        <div className="col-span-2 lab-cards">
          <Card />
          <Card />
          <Card />
          <Card />

          <BtnStatic className="border-solid border border-gray-300
          text-lg w-1/2 text-white clear-both block cursor-pointer
          hover:bg-gray-300 mx-auto mt-10">Load More</BtnStatic>
        </div>

      </div>
    </div>
  </>
}

export default Container
