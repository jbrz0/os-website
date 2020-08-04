import {useState, useEffect} from 'react'
import Modal from 'react-modal'
import products from './products'

interface Content {
  value: string,
  label: string,
}

const tags: Content[] = [
  { value: 'prints', label: 'Prints' },
  { value: 'shirts', label: 'Shirts' },
  { value: 'hoodies', label: 'Hoodies' },
  { value: 'mugs', label: 'Mugs' },
  { value: 'hats', label: 'Hats' },
  { value: 'stickers', label: 'Stickers' },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: '0',
    background: 'transparent',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: '10',
  }
}

const Items: React.FC<React.ReactNode> = () => {

  function activeClass(e: any) {
    e.target.classList.toggle('active')
  }

  const [items, setItems] = useState<Array<{}>>([...products])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  Modal.setAppElement('#__next')

  // useEffect(() => {

  // }, [])

  return <div className="bg-black">
    <div className="container mx-auto py-16 px-12 lg:px-24 store-items">

      <div className="tags flex items-center justify-center mb-16">
          <div>
          {tags.map((tag, i) => {
            return <span onClick={(e) => activeClass(e)} key={i}>{tag.label}</span>
          })}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-6 max-w-screen-lg">

        {items.map((item, i) => {
          return <div className="col-span-4 sm:col-span-2 md:col-span-1
          rounded-sm mb-6 cursor-pointer max-w-sm mx-auto w-full sm:max-w-none"
          onClick={() => setIsOpen(true)} key={i}>
            <div className="bg-gray-500 h-56 md:h-40 lg:h-56 xl:h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-4">Red Sweater</div>
            <span className="text-lg text-yellow">$25</span>
          </div>
        })}

        <Modal
          isOpen={isOpen}
          contentLabel="Product"
          style={customStyles}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsOpen(false)}
        >
          <div className="bg-gray-700 p-10 rounded">
            Modal
            <img src="icons/close.svg" alt="Close Menu"
                onClick={() => setIsOpen(false)}
                className="w-10 cursor-pointer" />
          </div>
        </Modal>

      </div>

    </div>
  </div>
}

export default Items
