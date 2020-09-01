import { Grid, _ } from 'gridjs-react'
import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Labs from '../components/projects/Labs'
import Footer from '../components/shared/Footer'
import { useState, useEffect } from 'react'

function List() {

  const [ready, setReady] = useState<boolean>(false)

  useEffect(() => {
    setReady(true)
  }, [])

  //* Amazon Get Image API (US & CA)
  // https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=${ASIN}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250
  // https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=${ASIN}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250

  return ready && <>

    <div className="px-4">
    <h1 className="text-white text-3xl text-center mt-32 mb-20">Uses</h1>
    <div className="container mx-auto max-w-screen-md mb-48">
      <Grid
        data={[
          ['uses-B073FHWTPL.jpg', 'Dell U3818DW', 'Monitor', 'Aug 19, 2020', 'https://www.amazon.ca/Dell-Screen-LED-Lit-Monitor-U3818DW/dp/B073FHWTPL'],
          ['uses-B0756CYWWD.jpg', 'Bose QC35ii', 'Headphones', 'Aug 19, 2020', 'https://www.amazon.ca/QuietComfort-Wireless-Headphones-Cancelling-Control/dp/B0756CYWWD'],
          ['uses-B079QHZBQ7.jpg', 'Audio Technica ATH-PRO5X', 'Headphones', 'Aug 19, 2020', 'https://www.amazon.ca/Audio-Technica-ATH-PRO5XBK-Professional-Closed-Back-Headphones'],
          ['uses-B01MQWUXZS.jpg', 'Apple Airpods', 'Headphones', 'Aug 19, 2020', 'https://www.amazon.ca/MMEF2AM-AirPods-Bluetooth-version-ult%C3%A9rieure'],
          ['uses-B006DIA77E.jpg', 'Blue Snowball iCE', 'Microphone', 'Aug 19, 2020', 'https://www.amazon.ca/Blue-Microphones-Snowball-Condenser-Microphone/dp/B006DIA77E'],
          ['uses-B01GRMF5ZE.jpg', 'Neweer Suspension Arm', 'Mic Stand', 'Aug 19, 2020', 'https://www.amazon.ca/Neewer%C2%AE-Microphone-Suspension-Mounting-Windscreen/dp/B01GRMF5ZE'],
          ['uses-B006JH8T3S.jpg', 'Logitech C920', 'Webcam', 'Aug 19, 2020', 'https://www.amazon.ca/Logitech-C920-Webcam-Pro-960-000764/dp/B006JH8T3S'],
          ['uses-B002LZUE76.jpg', 'Himalayan Glow Salt', 'Lamp', 'Aug 19, 2020', 'https://www.amazon.ca/Himalayan-Glow-1002-large-Pink/dp/B001892AX2'],
          ['uses-B081FV1Y57.jpg', 'Macbook Pro 16" (2019)', 'Computer', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-MacBook-16-Inch-Storage-2-3GHz/dp/B081FV1Y57'],
          ['uses-B07VTFN6HM.jpg', 'Western Digital 2TB', 'External HD', 'Aug 19, 2020', 'https://www.amazon.ca/Passport-Portable-External-Drive-Black/dp/B07VTFN6HM/'],
          ['uses-B00QHURUBE.jpg', 'Steinberg UR22', 'Audio Interface', 'Aug 19, 2020', 'https://www.amazon.ca/Steinberg-UR22C-Interface-Cubase-Cubasis/dp/B07YFH671V'],
          ['uses-B01NABDNPH.jpg', 'Magic Keyboard', 'Keyboard', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-Magic-Keyboard-MLA22LL-A/dp/B016QO64FI'],
          ['uses-B016QO5YNG.jpg', 'Magic Mouse', 'Mouse', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-Magic-Mouse-2-MLA02LL/dp/B016QO5YNG'],
          ['uses-B07K8RNW7H.jpg', 'iPhone XS Max', 'Phone', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-iPhone-Max-Smartphone-Refurbished/dp/B07K8RNW7H'],
          ['uses-B07J2TQY8N.jpg', 'Apple Watch S3', 'Watch', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-Watch-Smartwatch-Silver-Aluminum/dp/B07J2TQY8N'],
          ['uses-B07K3ZHM3V.jpg', 'Apple iPad Pro (2017)', 'Tablet', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-MTJ02LL-Wi-Fi-Cellular-256GB/dp/B07K3ZHM3V'],
          ['uses-B07SSSWDJX.jpg', 'SmartDesk 2 Premium', 'Desk', 'Aug 19, 2020', 'https://www.autonomous.ai/standing-desks/smartdesk-2-business'],
          ['uses-B07C125Q9S.jpg', '2L Jug', 'Water Bottle', 'Aug 19, 2020', 'https://www.amazon.ca/gp/product/B075ZTRTTG'],
          ['uses-B004VGIGVY.jpg', 'Guardian HEPA Filter', 'Air Purifier', 'Aug 19, 2020', 'https://www.amazon.ca/gp/product/B004VGIGVY'],
          ['uses-B076J2BGWJ.jpg', 'Racing Swivel Chair', 'Desk Chair', 'Aug 19, 2020', 'https://www.amazon.ca/gp/product/B07B9CRXWL'],
          ['uses-B083LXWLTK.jpg', 'Anti Fatigue Mat', 'Mat', 'Aug 19, 2020', 'https://www.autonomous.ai/office-accessories/anti-fatigue-mat'],
          // ['B073FHWTPL', 'Audio Technica Turntable', '', 'Aug 19, 2020', 'https://domain.com'],
          // Neweer phantom power supply
          // Backup Battery (get model)
          // Moleskine Notebook Types?
          // Laptop cooler pad
          // Anker use monitor
          // Neewer lights

        ]}
        columns={[{
          name: 'Image',
          // @ts-ignore
          formatter: cell => _(<img src={`${process.env.S3_BUCKET}/${cell}`}
          // formatter: cell => _(<img src={`https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=${cell}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250`}
          className="w-16 h-16 rounded" />)
          }, 'Item', 'Category', 'Added', {
          name: 'View',
          // @ts-ignore
          formatter: cell => _(<a href={cell} className="rounded bg-gray-900 hover:bg-gray-700" style={{padding: '0.25rem 1rem 0.45rem'}} target="_blank">Link</a>)
          }]}
        search={true}
        pagination={{
          enabled: true,
          limit: 80,
        }}
        sort={true}
      />
    </div>

  </div>
  </>
}


const Uses: React.FC<React.ReactNode> = () => {

  return <>
    <Header />
    <Nav />
    <List />
    <Labs />
    <Footer />
  </>
}

export default Uses
