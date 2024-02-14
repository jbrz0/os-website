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

    <img src={`${process.env.S3_BUCKET}/office-uses.jpg`} className="fixed w-full top-0 bottom-0 right-0 left-0 h-screen object-cover object-center behind opacity-80" style={{filter: 'blur(5px)'}} />
    <div className="px-4">
    <h1 className="text-white text-3xl text-center mt-32 mb-20">Uses</h1>
    {/* container mx-auto max-w-screen-md mb-48 */}
    <div className="mb-48">
      <Grid
        data={[
          ['','LG Ultragear 27GR95QE-B','Hardware','🖥️ Monitor','Feb 13, 2024','studio1','https://www.lg.com/ca_en/monitors/gaming/27gr95qe-b/', ''],
          ['','Dell U3818DW','Hardware','🖥️ Monitor','Aug 19, 2020','studio2','https://www.amazon.ca/Dell-Screen-LED-Lit-Monitor-U3818DW/dp/B073FHWTPL', ''],
          ['','Seinheiser HD650','Hardware','🎧 Audio','Feb 13, 2024','studio1','https://www.sennheiser-hearing.com/en-CA/p/hd-650/', ''],
          ['','Schitt Fulla 2','Hardware','🎧 Audio','Feb 13, 2024','studio1','https://www.schiit.com/products/fulla-2', ''],
          ['','Apple Airpods','Hardware','🎧 Audio','Feb 13, 2024','portable, mic','https://www.apple.com/ca/airpods-3rd-generation/', ''],
          ['','Audio Technica ATH-PRO5X','Hardware','🎧 Audio','Aug 19, 2020','studio2, backup','https://www.audio-technica.com/en-ca/ath-pro5x', ''],
          ['','Logitech Blue Snowball Ice','Hardware','🎙️ Microphone','Aug 19, 2020','studio1, mic','https://www.logitechg.com/en-ca/products/streaming-gear/snowball-ice-usb-microphone.988-000070.html', ''],
          ['','Behringer B-1','Hardware','🎙️ Microphone','Feb 13, 2024','studio2','https://www.behringer.com/product.html?modelCode=P0142', ''],
          ['','Neweer Suspension Arm','Hardware','🔩 Accessories','Aug 19, 2020','studio1, mic','https://www.amazon.ca/Neewer%C2%AE-Microphone-Suspension-Mounting-Windscreen/dp/B01GRMF5ZE', ''],
          ['','Yeti 1.89L Rambler','Hardware','🔩 Accessories','Feb 13, 2024','studio1, portable','https://www.yeti.ca/drinkware/bottles/70000000476.html', ''],
          ['','Razer Thunderbolt Hub','Hardware','🔩 Accessories','Feb 13, 2024','studio2','https://www.razer.com/ca-en/gaming-pc-accessories/razer-thunderbolt-4-dock-chroma', ''],
          ['','Apple Magsafe Battery','Hardware','🔩 Accessories','Feb 13, 2024','portable','https://www.amazon.ca/Apple-MJWY3AM-A-MagSafe-Battery/dp/B099BWY7WT', ''],
          ['','Neewer LP-E6 Dummy Battery','Hardware','🔩 Accessories','Feb 13, 2024','studio1','https://ca.neewer.com/collections/battery/products/neewer-dummy-battery-replacement-for-lp-e6-lp-e6n-lp-e6nh-66601977', ''],
          ['','Logitech C920','Hardware','📹 Camera','Aug 19, 2020','studio1, backup','https://www.logitech.com/en-ca/products/webcams/c920s-pro-hd-webcam.960-001257.html', ''],
          ['','Canon r5','Hardware','📹 Camera','Feb 13, 2024','studio1','https://shop.canon.ca/en_ca/p/eos-r5', ''],
          ['','Canon RF 15-35 2.8','Hardware','📹 Camera','Feb 13, 2024','studio1','https://canon.ca/en/product?name=RF_15-35_F2.8L_IS_USM&category=/en/products/Lenses/RF-Lenses', ''],
          ['','Salt Lamp','Hardware','🕯️ Lighting','Aug 19, 2020','studio1, background','https://www.amazon.ca/Himalayan-Glow-1002-large-Pink/dp/B001892AX2', ''],
          ['','Neewer RL-18 Ring Light','Hardware','🕯️ Lighting','Feb 13, 2024','studio1','https://ca.neewer.com/collections/ring-lights/products/neewer-rl-18-18-inch-ring-light-66601390', ''],
          ['','Logitech G213','Hardware','⌨️ Keyboard','Feb 13, 2024','studio1','https://www.logitechg.com/en-ca/products/gaming-keyboards/g213-rgb-gaming-keyboard.920-008083.html', ''],
          ['','Magic Keyboard','Hardware','⌨️ Keyboard','Aug 19, 2020','studio2','https://www.apple.com/ca/shop/product/MK2A3LL/A/magic-keyboard-us-english', ''],
          ['','Logitech G502 Hero','Hardware','🖱️ Mouse','Feb 13, 2024','studio1','https://www.logitechg.com/en-ca/products/gaming-mice/g502-hero-gaming-mouse.910-005469.html', ''],
          ['','Magic Mouse','Hardware','🖱️ Mouse','Aug 19, 2020','studio2','https://www.apple.com/ca/shop/product/MK2E3AM/A/magic-mouse-white-multi-touch-surface', ''],
          ['','Herman Miller Aeron (C)','Hardware','🪑 Furniture','Feb 13, 2024','studio1','https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html', ''],
          ['','Autonomous SmartDesk','Hardware','🪑 Furniture','Feb 13, 2024','studio1','https://www.autonomous.ai/en-CA/standing-desks/smartdesk-2-business', ''],
          ['','Corsair MM300 Mousepad','Hardware','🔩 Accessories','Feb 13, 2024','studio1','https://www.corsair.com/ca/en/p/mousepads/ch-9413641-ww/mm300-pro-premium-spill-proof-cloth-gaming-mouse-pad-extended-ch-9413641-ww', ''],
          ['','Macbook Pro 16 M1 32GB','Hardware','📱 Device','Feb 13, 2024','studio2, portable','https://www.apple.com/ca/macbook-pro/', ''],
          ['','IBP Creator LCMRG211','Hardware','📱 Device','Feb 13, 2024','studio1','https://www.ibuypower.com/store/creator-rdy-lcmrg211', ''],
          ['','iPhone 15 Pro Max','Hardware','📱 Device','Feb 13, 2024','portable','https://www.apple.com/ca/iphone-15-pro/', ''],
          ['','iPad Pro 11 (2nd Gen)','Hardware','📱 Device','Feb 13, 2024','portable','https://www.apple.com/ca/ipad-pro/', ''],
          ['','Apple Watch 7','Hardware','📱 Device','Aug 19, 2020','portable','https://www.apple.com/ca/watch/', ''],
          ['','Leuchtturm A6 Notebook','Hardware','📃 Documents','Feb 13, 2024','studio1, portable','https://www.leuchtturm1917.ca/notebook-classic.html', ''],
          ['','Fisher Space Pen (Bullet)','Hardware','📃 Documents','Feb 13, 2024','studio1, portable','https://www.spacepen.ca/products/matte-black-bullet-clip', ''],
          ['','Google Calendar/Tasks','Software','⚒️ Productivity','Feb 13, 2024','','https://workspace.google.com/', ''],
          ['','Notion','Software','⚒️ Productivity','Feb 13, 2024','','https://www.notion.so/', ''],
          ['','Google Keep','Software','⚒️ Productivity','Feb 13, 2024','','https://workspace.google.com/', ''],
          ['','Apple Reminders/Siri','Software','⚒️ Productivity','Feb 13, 2024','','https://apps.apple.com/us/app/reminders/id1108187841', ''],
          ['','Apple Journal','Software','⚙️ Admin','Feb 13, 2024','','https://apps.apple.com/us/app/journal/id6447391597', ''],
          ['','1Password','Software','⚙️ Admin','Feb 13, 2024','','https://1password.com/', ''],
          ['','Google Sheets','Software','📃 Documents','Feb 13, 2024','','https://workspace.google.com/', ''],
          ['','Google Docs','Software','📃 Documents','Feb 13, 2024','','https://workspace.google.com/', ''],
          ['','Discord','Software','💬 Comms','Feb 13, 2024','','https://discord.com/', ''],
          ['','Slack','Software','💬 Comms','Feb 13, 2024','','https://slack.com/', ''],
          ['','IFTTT','Software','🧩 Automation','Feb 13, 2024','','https://ifttt.com/', ''],
          ['','Apple Shortcuts','Software','🧩 Automation','Feb 13, 2024','','https://apps.apple.com/us/app/shortcuts/id915249334', ''],
          ['','Apple Music','Software','🎼 Music','Feb 13, 2024','','https://www.apple.com/ca/apple-music/', ''],
          ['','Stripe','Software','🪙 Finance','Feb 13, 2024','','https://stripe.com/en-ca', ''],
          ['','Wise','Software','🪙 Finance','Feb 13, 2024','','https://wise.com/', ''],
          ['','Harvest','Software','🪙 Finance','Feb 13, 2024','','https://www.getharvest.com/', '']
        ]}

        Name	Category	Type	Date Added	Tags	Link
        columns={[
          // {
          // name: 'Image',
          // // @ts-ignore
          // formatter: cell => _(<img src={`${process.env.S3_BUCKET}/${cell}`}
          // className="w-16 h-16 rounded" />)
          // },
          {
            name: ' ',
            width: '5%',
          }, 
          {
            name: 'Item',
            width: '15%',
          },
          {
            name: 'Category',
            width: '5%',
          },
          {
            name: 'Type',
            width: '10%',
          },
          {
            name: 'Date Added',
            width: '5%',
          },
          {
            name: 'Tags',
            width: '5%',
          },
          {
            name: 'Link',
            width: '5%',
            // @ts-ignore
            formatter: cell => _(<a href={cell} className="rounded bg-gray-900 hover:bg-gray-700" style={{padding: '0.25rem 1rem 0.45rem'}} target="_blank">Link</a>)
          },
          {
            name: ' ',
            width: '5%',
          }, 
        ]}
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
