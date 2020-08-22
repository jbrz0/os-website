import {useState} from 'react'
import Link from 'next/link'
import Nav from '../components/shared/Nav'
import Modal from 'react-modal'
import Footer from '../components/shared/Footer'
import Loading from '../pages/Loading'

function Lab() {

  // Our active product (for modal)
  const [product, setProduct] = useState<any>('')

  // Bind our modal to top element for a11y
  Modal.setAppElement('#__next')

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <>
    {/* <Nav /> */}

    <div className="mt-16 md:mt-6 md:mb-40">
      <h1 className="text-white text-3xl text-center mb-10 md:mt-32 md:mb-20">Web APIs Gallery</h1>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-4 gap-3 lg:gap-4 mb-4 px-16">
          {items.map((item, i) => {
            return <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-gray-900 w-full rounded-lg pb-4" key={i}>

              {item.slug !== undefined && <Link href={item.slug !== '' ? item.slug : '/'}>
              <a className="bg-gray-600 block text-gray-400 py-1 px-2 hover:text-gray-200"
                target="_blank"
                style={{borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}>
                  <img src="/icons/info.svg" alt="Info Icon" className="inline-block mr-2 mb-1" />
                  Docs
                </a>
              </Link>}

              <div onClick={() => {setIsOpen(true); setProduct(item)}} key={i}
                className="pt-8 pb-4 cursor-pointer group hover:opacity-75">
                <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <img src={`${process.env.S3_BUCKET}/wa-${item.keyword}.svg`}
                    className="mx-1 w-8 w-8 h-8" />
                </div>
                <div className="text-white text-center">{item.name}</div>
                <div className="text-gray-600 text-sm text-center mb-4 group-hover:text-gray-200">Read More</div>

                <div className="flex justify-center mx-auto" style={{maxWidth: '170px'}}>
                  {item.browsers.edge && <img src={`${process.env.S3_BUCKET}/edge_small.png`} className="mx-1 w-6 h-6 lg:w-8 lg:h-8" />}
                  {item.browsers.firefox && <img src={`${process.env.S3_BUCKET}/firefox_small.png`} className="mx-1 w-6 h-6 lg:w-8 lg:h-8" />}
                  {item.browsers.safari && <img src={`${process.env.S3_BUCKET}/safari_small.png`} className="mx-1 w-6 h-6 lg:w-8 lg:h-8" />}
                  {item.browsers.chrome && <img src={`${process.env.S3_BUCKET}/chrome_small.png`} className="mx-1 w-6 h-6 lg:w-8 lg:h-8" />}
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
          className="Modal-WebAPI"
          overlayClassName="Overlay"
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsOpen(false)}
        >
      <div className="bg-gray-700 w-full rounded-lg">
        <div className="bg-gray-500 w-full relative h-16"
          style={{borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem'}}>

            {product.slug !== undefined && <Link href={product.slug !== '' ? product.slug : '/'}>
              <a className="absolute top-0 right-0 mt-4 mr-4 border border-solid border-gray-300
                text-gray-200 text-sm py-1 px-2 rounded-lg"
                target="_blank"
                style={{background: 'rgba(35,35,47,0.5)'}}>View Docs</a>
            </Link>}
          </div>

        <div className="px-10 pb-10 -mt-8">

          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center relative z-10 mb-8">
            <img src={`${process.env.S3_BUCKET}/wa-${product.keyword}.svg`}
              className="mx-1 w-8 w-8 h-8" />
          </div>

          <h2 className="text-white mb-4 text-3xl gr-rb-dark">{product.name}</h2>
          <div className="text-gray-200 text-lg mb-10">
            {product.description}
          </div>

          <h3 className="gr-rb-dark text-underline mb-4 text-2xl">Basic Features</h3>

          <ul className="text-gray-200 text-lg mb-12 pl-6">
            {product.features !== undefined && product.features.map((feature, i) => <li key={i} className="mb-4 list-disc">{feature}</li>)}
          </ul>

          <button onClick={() => setIsOpen(false)} className="web-apis-btn border border-solid border-gray-500
          text-gray-400 px-8 py-2 rounded outline-none hover:bg-gray-400 hover:text-gray-200">Back</button>
        </div>
      </div>
    </Modal>

    {/* <Footer /> */}
  </>
}

export default Lab

const items = [
  {
    name: 'Audio',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'audio',
    description: 'The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.',
    features: ['Create a new audio context environment', 'Add audio effects', 'Control the timing, events and output'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
  },
  {
    name: 'Bluetooth',
    browsers: { edge: true, firefox: false, safari: false, chrome: true, },
    keyword: 'bluetooth',
    description: 'The Web Bluetooth API provides the ability to connect and interact with Bluetooth Low Energy peripherals.',
    features: ['Connect to a bluetooth device in range', 'Read values only', 'Experimental stage'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
  },
  {
    name: 'Canvas',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'canvas',
    description: 'The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.',
    features: ['Works with pixel coordinates', 'Has many built in effects available', 'Allows for highly interactive and engaging experiences'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
  },
  {
    name: 'Console',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'console',
    description: 'The Console API provides functionality to allow developers to perform debugging tasks, such as logging messages or the values of variables at set points in your code, or timing how long an operation takes to complete.',
    features: ['Simple built-in debugging and data parsing tool', 'Includes a number of visual output functions (log, error, table, info, warn etc.)' ],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Console_API',
  },
  {
    name: 'DOM',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'dom',
    description: 'The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document\'s structure, style, or content.',
    features: ['Manipulate nodes in a tree structure and their associated data', 'Often the result of another frontend system build output', 'Contains a number of interfaces (like window) with methods for interaction'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
  },
  {
    name: 'Drag & Drop',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'drag-and-drop',
    description: 'HTML Drag and Drop interfaces enable applications to use drag-and-drop features in browsers. The user may select draggable elements with a mouse, drag those elements to a droppable element, and drop them by releasing the mouse button. A translucent representation of the draggable elements follows the pointer during the drag operation.',
    features: ['Uses the DOM event model with Mouse Events', 'Fires several events during the drag operation for tailoring the experience'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API',
  },
  {
    name: 'Fetch',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'fetch',
    description: 'The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.',
    features: ['Promise based vs the old XMLHttpRequest method', 'Provides a number of features to use when making the request', 'Easier to use than the old method'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
  },
  {
    name: 'File & Directory',
    browsers: { edge: true, firefox: false, safari: true, chrome: true, },
    keyword: 'file-directory',
    description: 'The File and Directory Entries API simulates a local file system that web apps can navigate within and access files in. You can develop apps which read, write, and create files and/or directories in a virtual, sandboxed file system.',
    features: ['Non-Standard - so not reccommended for all production applications', 'Allows user to have a similar type experience to working on a native file system within an operating system'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API',
  },
  {
    name: 'Fullscreen',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'fullscreen',
    description: 'The Fullscreen API adds methods to present a specific Element (and its descendants) in full-screen mode, and to exit full-screen mode once it is no longer needed.',
    features: ['Useful for specific applications like presentations or games', 'Spans the full area of a users screen - over all other software'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
  },
  {
    name: 'Geolocation',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'geolocation',
    description: 'The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.',
    features: ['Retrieve a users location', 'Allows for integrating location based application design'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
  },
  {
    name: 'History',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'history',
    description: 'The DOM Window object provides access to the browser\'s session history through the history object. It exposes useful methods and properties that let you navigate back and forth through the user\'s history, and manipulate the contents of the history stack.',
    features: ['Navigate forward and backward through browsing history', 'Move to a specific point in history', 'Dynamically move to a url string/parameter'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/History_API',
  },
  {
    name: 'Intersection',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'intersection',
    description: 'The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document\'s viewport.',
    features: ['Detect location of user on the page', 'Detect location of objects in relation to eachother', 'Create advanced UI experiences like parallax\, lazy-Loading\, ad detection and other animations'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
  },
  {
    name: 'Media Stream',
    browsers: { edge: true, firefox: true, safari: false, chrome: true, },
    keyword: 'media-stream',
    description: 'The MediaStream API provides support for streaming audio and video data. It provides the interfaces and methods for working with the streams and their constituent tracks, the constraints associated with data formats, the success and error callbacks when using the data asynchronously, and the events that are fired during the process.',
    features: ['Interface with a video and/or audio stream', 'Related to the WebRTC technology', 'Works asynchronously to stream data in real time'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API',
  },
  {
    name: 'Page Visibility',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'page-visibility',
    description: 'With tabbed browsing, there is a reasonable chance that any given webpage is in the background and thus not visible to the user. The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden, as well as features to look at the current visibility state of the page.',
    features: ['Detect whether your browser tab is in focus, or in the background', 'Used with other web worker APIs to communicate', 'Can be useful for features like "sleep mode"\, working with server requests\, web socket communications\, and pre-rendering data'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API',
  },
  {
    name: 'Payment Request',
    browsers: { edge: true, firefox: false, safari: true, chrome: true, },
    keyword: 'payment-request',
    description: 'The Payment Request API provides a consistent user experience for both merchants and users. It\'s a way for users to select their preferred way of paying for things, and make that information available to a merchant.',
    features: ['Fast purchase experience for the user', 'Good accessibility and support for screen readers', 'Secure credentials management', 'Consistent error handling for developers'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
  },
  {
    name: 'Performance',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'performance',
    description: 'The High Resolution Time standard defines a Performance interface that supports client-side latency measurements within applications. The Performance interfaces are considered high resolution because they are accurate to a thousandth of a millisecond (subject to hardware or software constraints).',
    features: ['Useful for accurate testing and benchmarking of a website\'s performance', 'Able to calculate frame-rate (especially useful for animations)'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Performance_API',
  },
  {
    name: 'Permissions',
    browsers: { edge: true, firefox: true, safari: false, chrome: true, },
    keyword: 'permissions',
    description: 'The Permissions API provides a consistent programmatic way to query the status of API permissions attributed to the current context.',
    features: ['Can be used to determine access to a particular API', 'Permission aware API interface items include: clipboard\, notifications\, push and web MIDI', 'Does not integrate with some APIs that have their own permission system (like geolocation)'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Permissions_API',
  },
  {
    name: 'Pointer & Touch',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'pointer-touch',
    description: 'Many devices support different types of pointing input devices, such as mouse, pen/stylus and touch surfaces. Pointer events are DOM events that are fired for any pointing device. They are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers).',
    features: ['Detect and work with intricate user gestures for a better experience', 'Allow for better accessibility with more options available', 'Design fallback solutions for different user setups'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Pointer_events',
  },
  {
    name: 'Resize Observer',
    browsers: { edge: true, firefox: true, safari: true, chrome: true, },
    keyword: 'resize-observer',
    description: 'The Resize Observer API provides a performant mechanism by which code can monitor an element for changes to its size, with notifications being delivered to the observer each time the size changes.',
    features: ['Allows for a javascript solution to CSS media queries', 'Dynamic responsive layout adjustments can be made this way', 'Ability to observe (watch) for changes as a listener'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API',
  },
  {
    name: 'Vibration',
    browsers: { edge: true, firefox: true, safari: false, chrome: true, },
    keyword: 'vibration',
    description: 'Most modern mobile devices include vibration hardware, which lets software code provide physical feedback to the user by causing the device to shake. The Vibration API offers Web apps the ability to access this hardware, if it exists, and does nothing if the device doesn\'t support it.',
    features: ['Ability to pulse the vibration in a pattern with arrays', 'Can dynamically adjust the vibration with other JS logic', 'Will simply not vibrate if not supported'],
    slug: '//developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
  }
]
