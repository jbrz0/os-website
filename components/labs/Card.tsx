import Button from '../shared/Button'
const Card: React.FC<React.ReactNode> = () => {

  const high: string = '#f3164c'
  const medium: string = '#ff9b50'
  const low: string = '#ffd400'

  return <div className="w-1/2 float-left px-2 mb-4 relative">
    <div className="absolute right-0 top-0 card-triangle"
      style={{borderBottomColor: high, borderLeftColor: high}}
    ></div>
    <div className="bg-gray-800 rounded-sm">
      <img src="https://picsum.photos/800/500"
        style={{borderTopLeftRadius: '0.125rem', borderTopRightRadius: '0.125rem'}}
      />
      <div className="p-10 overflow-auto">
        <h2 className="text-white mb-3">Personal Dashboard with Google Sheets More text yaaa yaya wor...</h2>
        <p className="text-gray-200 mb-8">Aside from websites, wireframes are utilized for the prototyping are utilized for the prototyping</p>

        <Button href="#" className="bg-gray-300 text-gray-100 text-md font-bold border-solid border border-gray-300 float-left">View Post</Button>
        <Button href="#" className="border-solid border border-teal text-gray-100 text-md font-bold float-right">View Post</Button>
      </div>
    </div>
  </div>
}

export default Card
