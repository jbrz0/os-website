interface Props {
  SliderArrow?: any,
  onClick?: any,
  right?: boolean,
}

const SliderArrow: React.FC<Props> = (props) => {

  return <>
    { props.right && <img src="/icons/slider-arrow.svg"
      className="slider-arrow cursor-pointer absolute top-0 right-0 bottom-0 z-10 my-auto rounded-full mr-4"
      onClick={props.onClick}
      style={{ transform: 'scaleX(-1)', filter: 'dropShadow(0px 0px 3px black)', background: 'rgba(0, 0, 0, 0.25)'}}
      /> }
    { !props.right && <img src="/icons/slider-arrow.svg"
      className="slider-arrow cursor-pointer absolute top-0 left-0 bottom-0 z-10 my-auto rounded-full ml-4"
      onClick={props.onClick}
      style={{filter: 'dropShadow(0px 0px 3px black)', background: 'rgba(0, 0, 0, 0.25)'}}
      /> }
  </>
}

export default SliderArrow
