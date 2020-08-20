import { Grid, _ } from 'gridjs-react'
import Header from '../components/shared/Header'
import Nav from '../components/shared/Nav'
import Labs from '../components/projects/Labs'
import Footer from '../components/shared/Footer'

function List() {
  return <>

    <h1 className="text-white text-3xl text-center mt-32 mb-20">Uses</h1>
    <div className="container mx-auto max-w-screen-md mb-48">
      <Grid
        data={[
          ['B073FHWTPL', 'Dell U3818DW', 'Monitor', 'Aug 19, 2020', 'https://www.amazon.ca/Dell-Screen-LED-Lit-Monitor-U3818DW/dp/B073FHWTPL'],
          ['B0756CYWWD', 'Bose QC35ii', 'Headphones', 'Aug 19, 2020', 'https://www.amazon.ca/QuietComfort-Wireless-Headphones-Cancelling-Control/dp/B0756CYWWD'],
          ['B079QHZBQ7', 'Audio Technica ATH-PRO5X', 'Headphones', 'Aug 19, 2020', 'https://www.amazon.ca/Audio-Technica-ATH-PRO5XBK-Professional-Closed-Back-Headphones'],
          ['B01MQWUXZS', 'Apple Airpods', 'Headphones', 'Aug 19, 2020', 'https://www.amazon.ca/MMEF2AM-AirPods-Bluetooth-version-ult%C3%A9rieure'],
          ['B0002KZAK8', 'Behringer B-1', 'Microphone', 'Aug 19, 2020', 'https://www.amazon.ca/Behringer-B-1-Gold-Sputtered-Large-Diaphragm-Microphone/dp/B0002KZAK8'],
          ['B006DIA77E', 'Blue Snowball iCE', 'Microphone', 'Aug 19, 2020', 'https://www.amazon.ca/Blue-Microphones-Snowball-Condenser-Microphone/dp/B006DIA77E'],
          ['B01GRMF5ZE', 'Neweer Suspension Arm', 'Mic Stand', 'Aug 19, 2020', 'https://www.amazon.ca/Neewer%C2%AE-Microphone-Suspension-Mounting-Windscreen/dp/B01GRMF5ZE'],
          ['B006JH8T3S', 'Logitech C920', 'Webcam', 'Aug 19, 2020', 'https://www.amazon.ca/Logitech-C920-Webcam-Pro-960-000764/dp/B006JH8T3S'],
          ['B002LZUE76', 'Himalayan Glow Salt', 'Lamp', 'Aug 19, 2020', 'https://www.amazon.ca/Himalayan-Glow-1002-large-Pink/dp/B001892AX2'],
          ['B081FV1Y57', 'Macbook Pro 16" (2019)', 'Computer', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-MacBook-16-Inch-Storage-2-3GHz/dp/B081FV1Y57'],
          ['B07VTFN6HM', 'Western Digital 2TB', 'External HD', 'Aug 19, 2020', 'https://www.amazon.ca/Passport-Portable-External-Drive-Black/dp/B07VTFN6HM/'],
          ['B00QHURUBE', 'Steinberg UR22', 'Audio Interface', 'Aug 19, 2020', 'https://www.amazon.ca/Steinberg-UR22C-Interface-Cubase-Cubasis/dp/B07YFH671V'],
          ['B01NABDNPH', 'Magic Keyboard', 'Keyboard', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-Magic-Keyboard-MLA22LL-A/dp/B016QO64FI'],
          ['B016QO5YNG', 'Magic Mouse', 'Mouse', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-Magic-Mouse-2-MLA02LL/dp/B016QO5YNG'],
          ['B07K8RNW7H', 'iPhone XS Max', 'Phone', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-iPhone-Max-Smartphone-Refurbished/dp/B07K8RNW7H'],
          ['B07J2TQY8N', 'Apple Watch S3', 'Watch', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-Watch-Smartwatch-Silver-Aluminum/dp/B07J2TQY8N'],
          ['B07K3ZHM3V', 'Apple iPad Pro (2017)', 'Tablet', 'Aug 19, 2020', 'https://www.amazon.ca/Apple-MTJ02LL-Wi-Fi-Cellular-256GB/dp/B07K3ZHM3V'],
          ['B07SSSWDJX', 'SmartDesk 2 Premium', 'Desk', 'Aug 19, 2020', 'https://www.autonomous.ai/standing-desks/smartdesk-2-business'],
          ['B07C125Q9S', '2L Jug', 'Water Bottle', 'Aug 19, 2020', 'https://www.amazon.ca/gp/product/B075ZTRTTG'],
          ['B004VGIGVY', 'Guardian HEPA Filter', 'Air Purifier', 'Aug 19, 2020', 'https://www.amazon.ca/gp/product/B004VGIGVY'],
          ['B076J2BGWJ', 'Racing Swivel Chair', 'Desk Chair', 'Aug 19, 2020', 'https://www.amazon.ca/gp/product/B07B9CRXWL'],
          ['B083LXWLTK', 'Anti Fatigue Mat', 'Mat', 'Aug 19, 2020', 'https://www.autonomous.ai/office-accessories/anti-fatigue-mat'],



          // ['B073FHWTPL', 'Audio Technica Turntable', '', 'Aug 19, 2020', 'https://test.com'],
          // Neweer phantom power supply

          // Backup Battery (get model)


          // Moleskine Notebook Types?

        ]}
        columns={[{
          name: 'Image',
          // @ts-ignore
          formatter: cell => _(<img src={`https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=${cell}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=SL250`}
            className="w-16 h-16 rounded" />)
          }, 'Item', 'Category', 'Added', {
          name: 'View',
          // @ts-ignore
          formatter: cell => _(<a href={cell} target="_blank">Link</a>)
          }]}
        search={true}
        pagination={{
          enabled: true,
          limit: 80,
        }}
        sort={true}
      />
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
