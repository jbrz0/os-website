import {useState, useEffect, useRef} from 'react'
import Slider from 'react-slick'
import Modal from 'react-modal'
import Select from 'react-select'
import products, {Product} from './products'
import BtnStatic from '../shared/BtnStatic'
import SliderArrow from './SliderArrow'

interface Content {
  value: string,
  label: string,
}

// Modal bg slider settings
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  // Autoplay settings
  autoplaySpeed: 13000,
  autoplay: true,
  pauseOnHover: true,

  // Arrows
  prevArrow: <SliderArrow />,
  nextArrow: <SliderArrow right />,
}

const sizes: Content[] = [
  { value: 'xs', label: 'XS' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL' },
  { value: '2xl', label: '2XL' },
  { value: '3xl', label: '3XL' },
]

const quantity: Content[] = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
]

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

  function addToCart() {
    alert('added!')
  }

  const [items, setItems] = useState<Array<Product>>([...products])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Our active product (for modal)
  const [product, setProduct] = useState<Product|any>('')

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
          onClick={() => {setIsOpen(true); setProduct(item)}} key={i}>
            <div className="bg-gray-500 h-56 md:h-40 lg:h-56 xl:h-64 w-full rounded-sm shadow-lg">Card</div>
            <div className="text-gray-100 font-bold mt-4">{item.name}</div>
            <span className="text-lg text-yellow">$25</span>
          </div>
        })}

        <Modal
          isOpen={isOpen}
          contentLabel="Product"
          className="Modal"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsOpen(false)}
        >
          <div className="rounded relative">

          {/* Mobile */}
          <div className="h-screen block lg:hidden">
            <img
              src="/projects/placeholder.png"
              className="w-full object-cover shadow-xl mb-6"
              style={{borderBottomLeftRadius: '0.25rem', borderBottomRightRadius: '0.25rem'}}
            />
            <div className="p-4 sm:pl-12 max-w-sm pb-20">
              <h2 className="text-white text-2xl mb-12">{product.name}</h2>
              <h3 className="text-teal text-xl font-bold mb-1">${product.price}</h3>
              <p className="text-gray-200 text-sm mb-10">{product.description}</p>

            <Select
              className="selector float-left mr-3 select-size"
              options={sizes}
              placeholder="Size"
              id={'1'}
              instanceId={'1'}
              inputId={'1'}
              isSearchable={false}
            />

            <Select
              className="selector float-left select-qty"
              options={quantity}
              placeholder="Qty"
              id={'2'}
              instanceId={'2'}
              inputId={'2'}
              isSearchable={false}
            />

            <div className="clearfix"></div>

            <div className="block mt-8">

            <BtnStatic
              onClick={() => setIsOpen(false)}
              className="bg-gray-400 text-white font-bold cursor-pointer float-left text-sm mr-3"
              >Back</BtnStatic>

            <BtnStatic
              onClick={addToCart}
              className="bg-gray-400 text-white font-bold cursor-pointer float-left text-sm"
              >Add to Card</BtnStatic>

            </div>

              <div className="clearfix"></div>
            </div>

            <img src="icons/close.svg" alt="Close Menu"
              onClick={() => setIsOpen(false)}
              className="w-10 cursor-pointer absolute
              right-0 top-0 mt-8 mr-8 lg:hidden"
              style={{filter: 'drop-shadow(black 0px 0px 3px)'}}
            />
          </div>

          <div className="hidden lg:block lg:p-16">
            <Slider {...settings}>
                <img
                  src="/projects/placeholder.png"
                  className="w-full object-cover shadow-xl rounded"
                />
                <img
                  src="/projects/placeholder.png"
                  className="w-full object-cover shadow-xl rounded"
                />
                <img
                  src="/projects/placeholder.png"
                  className="w-full object-cover shadow-xl rounded"
                />
            </Slider>
          </div>

          {/* Desktop */}
          <div className="bg-gray-700 absolute top-0 left-0 ml-40 p-8
            rounded-sm max-w-xs product-box"
            style={{top: '50%', transform: 'translateY(-50%)'}}>
            <h2 className="text-white text-2xl mb-12">{product.name}</h2>
            <h3 className="text-teal text-xl font-bold mb-1">${product.price}</h3>
            <p className="text-gray-200 text-sm mb-10">{product.description}</p>

            <Select
              className="selector float-left mb-10 select-size"
              options={sizes}
              placeholder="Size"
              id={'1'}
              instanceId={'1'}
              inputId={'1'}
              isSearchable={false}
            />

            <Select
              className="selector float-right select-qty"
              options={quantity}
              placeholder="Qty"
              id={'2'}
              instanceId={'2'}
              inputId={'2'}
              isSearchable={false}
            />

            <div className="clearfix"></div>

            <BtnStatic
              onClick={() => setIsOpen(false)}
              className="bg-gray-400 text-white font-bold cursor-pointer float-left text-sm"
              >Back</BtnStatic>

            <BtnStatic
              onClick={addToCart}
              className="bg-gray-400 text-white font-bold cursor-pointer float-right text-sm"
              >Add to Card</BtnStatic>
          </div>

          <img src="icons/close.svg" alt="Close Menu"
            onClick={() => setIsOpen(false)}
            className="w-10 cursor-pointer fixed
            right-0 top-0 mt-8 mr-8 hidden lg:block"
            style={{filter: 'drop-shadow(black 0px 0px 3px)'}}
          />

          </div>
        </Modal>

        isOpen

      </div>

    </div>
  </div>
}

export default Items
