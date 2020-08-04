import Button from '../shared/Button'

interface Props {
  Card?: any,
  difficulty?: string,
  slug?: string,
}

const Card: React.FC<Props> = (props) => {

  const high: string = '#f3164c'
  const medium: string = '#ff9b50'
  const low: string = '#ffd400'
  const neutral: string = '#b6bfcc'

  let colour: string

  if (props.difficulty === null) colour = neutral
  else if (props.difficulty === "high") colour = high
  else if (props.difficulty === "medium") colour = medium
  else if (props.difficulty === "low") colour = low

  return <div className="w-full md:w-1/2 float-left px-2 mb-4 relative group">
    <div className="absolute right-0 top-0 card-triangle"
      style={{borderBottomColor: colour, borderLeftColor: colour}}
    ></div>
    <div className="bg-gray-800 rounded-sm group-hover:bg-gray-700">
      <img src="https://picsum.photos/800/500"
        className="w-full h-24 lg:h-40 object-cover"
        style={{borderTopLeftRadius: '0.125rem', borderTopRightRadius: '0.125rem'}}
      />
      {/* <div className="p-8 xl:p-10 overflow-auto"> */}
      <div className="px-6 py-4 overflow-auto">
        <h2 className="text-white mb-3">Personal Dashboard with Google Sheets More text yaaa yaya wor...</h2>
        <p className="text-gray-200 mb-8">Aside from websites, wireframes are utilized for the prototyping are utilized for the prototyping</p>

        <div className="ml-1">
        <Button href={`/blog/${props.slug}`}
          className="text-gray-200 text-md italic block
          xl:float-left hover:bg-gray-500 hover:text-white
          xl:w-1/2 xl:mr-2 xl:-ml-2 border-solid border border-transparent
          font-bold mb-4">View Post</Button>
        <Button href={`/lab/${props.slug}`}
          className="border-solid border border-purple
          xl:w-1/2 xl:ml-2 xl:-ml-2
          text-gray-100 text-md font-bold block xl:float-right group-hover:bg-purple">View Lab</Button>
        </div>
      </div>
    </div>
  </div>
}

export default Card
