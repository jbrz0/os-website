interface Props {
  children: React.ReactNode,
}

const Wrapper: React.FC<Props> = (props) => {
  return <div className="text-white container mx-auto p-10 max-w-screen-md post">
    {props.children}
  </div>
}

export default Wrapper
