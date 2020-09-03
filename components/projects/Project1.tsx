import Button from '../shared/Button'

const Project1: React.FC<React.ReactNode> = () => {

  return <div className="pt-16 sm:pt-24 lg:pt-40 bg-gray-1000 shadow-2xl">
    <div className="container mx-auto px-12 sm:px-24">
      <div className="max-w-md mx-auto block">
        <h2 className="text-white sm:text-center text-3xl mb-4">Morning Briefing</h2>
        <p className="text-gray-200 sm:text-center">
          A browser homepage dashboard, this project connects some tailored APIs for a quick briefing
        </p>
        <div className="sm:flex sm:justify-center mt-8 mb-16 sm:mb-24">
          <Button href="/lab/morning-briefing" className="inline-block mr-4 mb-4 sm:mb-auto text-gray-200 btn-default text-lg">View Site</Button>
          <Button href="/blog/morning-briefing" className="inline-block text-white gr-tw-1 text-lg">View Post</Button>
        </div>
      </div>

      <img src="projects/display1.png" className="block mx-auto w-full" style={{maxWidth: '750px'}} />
    </div>
  </div>
}

export default Project1
