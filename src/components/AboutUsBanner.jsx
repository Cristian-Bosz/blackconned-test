import team from '../assets/img/logos/Creative-team-bro.svg'

const AboutUsBanner = () => {
  return (
    <>
       <section className="bg-success py-5">
            <div className="container">
                <div className="row align-items-center py-5">
                    <div className="col-md-8 text-white">
                        <h2 className='display-5 title-aboutus'>About Us</h2>
                        <p className='lead p-about'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={team} alt="foto sobre el equipo"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUsBanner
