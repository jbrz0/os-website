import {useState} from 'react'
import Nav from '../components/shared/Nav'
import Modal from 'react-modal'
import Footer from '../components/shared/Footer'

function Lab() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <>
    <Nav />

    <div className="mb-20">
      <h1 className="text-white text-3xl text-center mt-32 mb-20">Web APIs</h1>
      <div className="max-w-screen-lg bg-blue mx-auto">
        <div className="grid grid-cols-4 gap-4 mb-4">
          {items.map(item => {
            return <div className="col-span-1 bg-red w-full rounded-lg pb-4">
              <div className="bg-gray-600 text-gray-400 py-1 px-2 hover:text-gray-300"
              style={{borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}>
                <img src="/icons/info.svg" alt="Info Icon" className="inline-block mr-2 mb-1" />
                Docs
              </div>

              <div onClick={() => setIsOpen(true)} className="pt-8 pb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto">
                  <img src={`${process.env.S3_BUCKET}/wa-${item.keyword}.svg`} className="mx-1 w-8" />
                </div>
                <div className="text-white text-center">{item.name}</div>
                <div className="text-gray-600 text-sm text-center mb-4">Read More</div>
                <img src="/" alt=""/>
                <div className="flex justify-center mx-auto" style={{maxWidth: '170px'}}>
                  {item.browsers.edge && <img src={`${process.env.S3_BUCKET}/edge_small.png`} className="mx-1 w-8" />}
                  {item.browsers.firefox && <img src={`${process.env.S3_BUCKET}/firefox_small.png`} className="mx-1 w-8" />}
                  {item.browsers.safari && <img src={`${process.env.S3_BUCKET}/safari_small.png`} className="mx-1 w-8" />}
                  {item.browsers.chrome && <img src={`${process.env.S3_BUCKET}/chrome_small.png`} className="mx-1 w-8" />}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>

    <Modal
          isOpen={isOpen}
          contentLabel="Product"
          className="Modal"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsOpen(false)}
        >
    <p>Content</p>
    </Modal>

    <Footer />
  </>
}

export default Lab

const items = [
  {
    name: 'Audio',
    browsers: { edge: false, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'audio',
  },
  {
    name: 'Bluetooth',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'bluetooth',
  },
  {
    name: 'Canvas',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'canvas',
  },
  {
    name: 'Console',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'console',
  },
  {
    name: 'DOM',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'dom',
  },
  {
    name: 'Drag & Drop',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'drag-and-drop',
  },
  {
    name: 'Fetch',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'fetch',
  },
  {
    name: 'File & Directory',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'file-directory',
  },
  {
    name: 'Fullscreen',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'fullscreen',
  },
  {
    name: 'Geolocation',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'geolocation',
  },
  {
    name: 'History',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'history',
  },
  {
    name: 'Intersection',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'intersection',
  },
  {
    name: 'Media Stream',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'media-stream',
  },
  {
    name: 'Page Visibility',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'page-visibility',
  },
  {
    name: 'Payment Request',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'payment-request',
  },
  {
    name: 'Performance',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'performance',
  },
  {
    name: 'Permissions',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'permissions',
  },
  {
    name: 'Pointer & Touch',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'pointer-touch',
  },
  {
    name: 'Resize Observer',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'resize-observer',
  },
  {
    name: 'Vibration',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    docs: '',
    keyword: 'vibration',
  }
]
