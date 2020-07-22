import Link from 'next/link'

interface Props {
  children: React.ReactNode,
  className?: string
}

// Static version of button (without link)

const BtnStatic: React.FC<Props> = (props) => {
  return <div>
    <a className={`${props.className} py-3 px-8 rounded-sm text-center`}>
      <>{props.children}</>
    </a>
  </div>
}

export default BtnStatic
