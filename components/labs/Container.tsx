import Sidebar from './Sidebar'
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
        </div>

      </div>
    </div>
  </>
}

export default Container
