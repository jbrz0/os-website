interface Props {
  Divider?: any,
  type?: string,
}

const Divider: React.FC<Props> = (props) => {
  return <img src={`/art/divider-${props.type}.jpg`} className="w-full object-cover" style={{height: '20px'}} />
}

export default Divider
