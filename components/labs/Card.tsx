import Button from '../shared/Button'
import posts, { Post } from '../../markdown/0-index'

interface Props {
  Card?: any,
  difficulty?: string,
  cover?: string,
  post?: Post,
  onSite?: boolean,
  slug?: string,
}

const Card: React.FC<Props> = (props) => {

  const hard: string = '#f3164c'
  const medium: string = '#ff9b50'
  const easy: string = '#ffd400'
  const neutral: string = '#b6bfcc'

  let colour: string

  if (props.difficulty === null) colour = neutral
  else if (props.difficulty === "hard") colour = hard
  else if (props.difficulty === "medium") colour = medium
  else if (props.difficulty === "easy") colour = easy

  return <div className="w-full col-span-2 md:col-span-1 relative group">
    <div className="absolute right-0 top-0 card-triangle"
      style={{borderBottomColor: colour, borderLeftColor: colour}}
    ></div>
    <div className="bg-gray-900 group-hover:bg-gray-700 h-full"
      style={{borderRadius: '2rem'}}>
      <img src={`${process.env.S3_BUCKET}/${props.post.cover}`}
        className="w-full h-24 lg:h-40 object-cover"
        style={{borderTopLeftRadius: '2rem', borderTopRightRadius: '0.125rem'}}
      />

      <div className="p-10 overflow-auto">
        <h2 className="text-white mb-3">{props.post.title}</h2>
        <p className="text-gray-200 mb-32 xl:mb-24">{props.post.description}</p>
      </div>

      <div className="mb-8 ml-auto mr-auto left-0 right-0 absolute bottom-0 w-full grid grid-cols-2 gap-2" style={{width: '80%'}}>
      <Button href={`/blog/${props.slug}`}
        className="text-gray-200 text-base
        hover:bg-gray-500 hover:text-white col-span-1
        border-solid border border-transparent mb-4">Blog</Button>
      <Button href={props.onSite ? `/lab/${props.slug}` : `${props.slug}`}
        target={props.onSite || props.slug.slice(0, 2) !== '//' ? '_self' : '_blank'}
        className="text-gray-100 text-base
        group-hover:bg-purple hover:text-white col-span-1
        border-solid border border-purple mb-4">Lab</Button>
      </div>
    </div>
  </div>
}

export default Card
