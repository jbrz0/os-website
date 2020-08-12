import Button from '../shared/Button'
import posts, { Post } from '../../markdown/0-index'

interface Props {
  Card?: any,
  difficulty?: string,
  cover?: string,
  post?: Post,
  slug?: string,
}

const Card: React.FC<Props> = (props) => {

  const hard: string = '#f3164c'
  const medium: string = '#ff9b50'
  const low: string = '#ffd400'
  const neutral: string = '#b6bfcc'

  let colour: string

  if (props.difficulty === null) colour = neutral
  else if (props.difficulty === "hard") colour = hard
  else if (props.difficulty === "medium") colour = medium
  else if (props.difficulty === "low") colour = low

  return <div className="w-full col-span-2 md:col-span-1 relative group">
    <div className="absolute right-0 top-0 card-triangle"
      style={{borderBottomColor: colour, borderLeftColor: colour}}
    ></div>
    <div className="bg-gray-900 group-hover:bg-gray-700"
      style={{borderRadius: '2rem'}}>
      <img src={props.post.cover}
        className="w-full h-24 lg:h-40 object-cover"
        style={{borderTopLeftRadius: '2rem', borderTopRightRadius: '0.125rem'}}
      />

      <div className="px-6 py-4 overflow-auto">
        <h2 className="text-white mb-3">{props.post.title}</h2>
        <p className="text-gray-200 mb-8">{props.post.description}</p>

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
