import Button from '../shared/Button'
import Link from 'next/link'
import posts, { Post } from '../../markdown/0-index'

interface Props {
  Card?: any,
  difficulty?: string,
  cover?: string,
  post?: Post,
  onSite?: boolean,
  slug?: string,
  url?: string,
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

    <div className="group-hover:bg-gray-700 h-full flex flex-col justify-between"
      style={{borderRadius: '2rem', backdropFilter: 'blur(6px)', backgroundColor: 'rgba(12, 10, 32, 0.25)'}}>
    
      <div>
        <img src={`${process.env.S3_BUCKET}/${props.post.cover}`}
          className="w-full h-24 lg:h-40 object-cover"
          style={{borderTopLeftRadius: '2rem', borderTopRightRadius: '0.125rem'}}
        />
        <div className="p-10">
          <h2 className="text-white mb-3">{props.post.title}</h2>
          <p className="text-gray-200 mb-0">
            {props.post.description} &nbsp;
            <Link href={`/blog/${props.slug}`} className="text-slate-100 text-base hover:text-gray-400 underline">
              Read Blog
            </Link>
          </p>
        </div>
      </div>


      <div className="px-10 pb-8">

        <Button href={props.url === "" ? `/lab/${props.slug}` : `${props.url}`}
          target={props.onSite && props.slug.slice(0, 2) !== '//' ? '_self' : '_blank'}
          className="text-gray-100 text-base group-hover:bg-purple hover:opacity-80 col-span-1 border-solid border border-purple block">
            View Lab
        </Button>
      </div>
    </div>

  </div>
}

export default Card


