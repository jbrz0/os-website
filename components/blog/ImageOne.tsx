interface Props {
  ImageOne?: any,
  src: string,
  alt?: string,
  caption?: string,
}

const ImageOne: React.FC<Props> = (props) => {
  return <>
    <img src={`${process.env.S3_BUCKET}/${props.src}`} className="w-full bg-gray-800 my-4 rounded-lg" alt={props.alt} />
    <div className="caption text-gray-200">{props.caption}</div>
  </>
}

export default ImageOne
