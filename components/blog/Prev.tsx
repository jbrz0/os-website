import Link from 'next/link'

interface Props {
  Prev?: any,
  href: string,
  title: string,
  subtext?: string,
}

const Prev: React.FC<Props> = (props) => {

  return <div className="pt-40 pb-24 bg-red shadow-2xl">
    <div className="container mx-auto px-10 mb-20 max-w-screen-lg">

    <Link href={props.href}><a>
      <div className="grid grid-cols-8 group">
        <div className="col-span-10 md:col-span-6 group-hover:opacity-75">
          <div className="text-gray-100 text-lg">{props.subtext === '' ? 'Previous Post' : props.subtext}</div>
          <h3 className="text-gray-100 text-4xl">
            {props.title}
          </h3>
        </div>
        <div className="col-span-2 hidden md:block">
          <div className="bg-purple group-hover:bg-dark-purple
          group-hover:opacity-100 float-right w-20 h-20 rounded-full
          flex align-center mt-10">
            <img src="/icons/arrow-right.svg" className="block mx-auto" />
          </div>
        </div>
      </div>
    </a></Link>

    </div>
  </div>
}

export default Prev
