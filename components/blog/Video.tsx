interface Props {
  Item?: any,
  src: string,
}

const Video: React.FC<Props> = (props) => {
  return <div className='embed-container'>
    <iframe
      src={`https://www.youtube.com/embed/${props.src}`}
      frameBorder='0'
      allowfullscreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    >
    </iframe>
  </div>
}

export default Video



// <div class='embed-container'><iframe src='https://www.youtube.com/embed/sjkrrmBnpGE' frameborder='0' allowfullscreen></iframe></div>

// <iframe src="https://www.youtube.com/embed/sjkrrmBnpGE"
//   frameborder="0"
//   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// />
