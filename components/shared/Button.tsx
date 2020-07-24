import Link from 'next/link'

interface Props {
  children: React.ReactNode,
  href: string,
  className?: string,
  target?: string,
}

const Button: React.FC<Props> = (props) => {
  return <Link href={props.href}>
    <a className={`${props.className} py-3 px-8 rounded-sm text-center`} target={props.target}>
      <>{props.children}</>
    </a>
  </Link>
}

export default Button
