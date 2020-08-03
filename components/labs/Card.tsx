import Button from '../shared/Button'

interface Props {
  Card?: any,
  difficulty?: string,
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
        className="w-full h-32 lg:h-56 object-cover"
        style={{borderTopLeftRadius: '0.125rem', borderTopRightRadius: '0.125rem'}}
      />
      <div className="p-8 xl:p-10 overflow-auto">
        <h2 className="text-white mb-3">Personal Dashboard with Google Sheets More text yaaa yaya wor...</h2>
        <p className="text-gray-200 mb-8">Aside from websites, wireframes are utilized for the prototyping are utilized for the prototyping</p>

        <Button href="#" className="text-gray-200 text-md italic block xl:float-left hover:bg-gray-500 hover:text-white
          font-bold mb-4">View Post</Button>
        <Button href="#" className="border-solid border border-purple
          text-gray-100 text-md font-bold block xl:float-right group-hover:bg-purple">View Lab</Button>
      </div>
    </div>
  </div>
}

export default Card
