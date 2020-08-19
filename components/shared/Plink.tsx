import { loadGetInitialProps } from "next/dist/next-server/lib/utils"

interface Props {
  Plink?: any,
  href: string,
  text: string,
}

const Plink: React.FC<Props> = (props) => {
return <a href={props.href} target="_blank">{props.text}</a>
}

export default Plink
