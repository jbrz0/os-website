interface Props {
  children: React.ReactNode,
  href: string,
  className?: string,
  target?: string,
}

const Button: React.FC<Props> = (props) => {
  return <a
    href={props.href}
    className={`${props.className} py-3 px-8 rounded-sm text-center`}
    target={props.target}>
      {props.children}
    </a>
}

export default Button
