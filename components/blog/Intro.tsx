interface Props {
  Item?: any,
  tags: Array<string>,
  date?: string,
  title?: string,
  cover?: string,
}

const Intro: React.FC<Props> = (props) => {
  return <div className="bg-black">

    <div className="container mx-auto px-12 sm:px-24 pt-24 sm:pt-40 pb-16 sm:pb-32">
      <div className="mx-auto h-full max-w-screen-sm">

        <div className="border-solid border-purple mb-16 overflow-auto" style={{borderBottomWidth: `1px`}}>
          <p className="text-white float-left my-3 text-sm w-full sm:w-1/2">
            {props.tags.slice(0, 4)
              .map((tag: string, i: number) => <span
              className="mr-2 bg-gray-1000 rounded-sm px-2 py-1" key={i}>
              {tag}</span>)}
          </p>

          <p className="text-white sm:text-right float-left mt-2 sm:mt-3 mb-5 sm:mb-3 text-md w-full sm:w-1/2">
            {props.date}
          </p>
        </div>

        <h1 className="text-white text-3xl">{props.title}</h1>
      </div>
    </div>

    <img src={props.cover} className="w-full object-cover object-center mb-0 sm:mb-4 md:mb-12" style={{height: '60vh'}} />
  </div>
}

export default Intro
