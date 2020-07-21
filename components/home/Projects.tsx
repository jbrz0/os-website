import Slider from 'react-slick'

const RecentProj: React.FC<React.ReactNode> = () => {

  const settings = {
    centerMode: true,
    infinite: true,
    className: "slider",
    centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
    dots: true,

    // Autoplay settings
    autoplaySpeed: 13000,
    autoplay: true,
    pauseOnHover: true,
  }

  return <div className="py-40 gr-rad-rose shadow-2xl">
    <div className="container mx-auto px-24">
      <h4>See Some</h4>
      <h2 className="text-2xl">Recent Projects</h2>
    </div>

    <Slider {...settings}>
      <div className="p-6">
        <div className="bg-blue h-64"></div>
        <p>The navigation design should communicate the relationship between the links it contains so that users understand the options they have for navigating the site.</p>
      </div>
      <div className="p-6">
        <div className="bg-orange h-64"></div>
        <p>The navigation design should communicate the relationship between the links it contains so that users understand the options they have for navigating the site.</p>
      </div>
      <div className="p-6">
        <div className="bg-green h-64"></div>
        <p>navigation design should communicate the relationship between the links it contains so that users understand the options they have for navigating the site.</p>
      </div>
    </Slider>

    <div className="container mx-auto px-24 mt-10">
      <h3>See More Projects</h3>
    </div>

  </div>
}

export default RecentProj
