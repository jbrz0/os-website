import {useState, useEffect, useRef} from 'react'
import Modal from 'react-modal'
import products, {Product} from './products'

interface Content {
  value: string,
  label: string,
}

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

  const [items, setItems] = useState<Array<Product>>([...products])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Bind our modal to top element for a11y
  Modal.setAppElement('#__next')

  // Get tags from all products data
  const [tags, setTags] = useState<Array<string>>([])

  // Set active tags based on user action (empty === all items)
  const [active, setActive] = useState<Array<string>>([])

  useEffect(() => {
    const allTags: Array<string> = products.map(product => product.type)
    const filteredTags: Array<string> = allTags.filter((value, i) => allTags.indexOf(value) === i)
    setTags([...filteredTags])
  }, [])

  return <div className="bg-black">
    <div className="container mx-auto py-16 px-12 lg:px-24 store-items">

      <div className="tags flex items-center md:justify-center mb-12
        max-w-sm mx-auto w-full sm:max-w-none">
          <div ref={tagBox}>
          {tags.map((tag, i) => {
            return <span onClick={(e) => activeClass(e)} key={i}>{tag}</span>
          })}
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-6 max-w-screen-lg">

        {items.filter(item => {
          // check if item is part of ACTIVE tag
          if (active.length === 0) return true
          // or return all items
          else return active.includes(item.type)
        }).map((item, i) => {
          return <div className="col-span-4 sm:col-span-2 md:col-span-1
          rounded-sm mb-6 cursor-pointer max-w-sm mx-auto w-full sm:max-w-none"
          onClick={() => setIsOpen(true)} key={i}>
            <div className="bg-gray-500 h-56 md:h-40 lg:h-56 xl:h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-4">{item.name}</div>
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
