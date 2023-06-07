import auriculares from '../assets/img/shop/sony.jpg'
import dron from '../assets/img/shop/dron.png'
import gafas from '../assets/img/shop/gafas.webp'
import { Link } from 'react-router-dom'

const HomeCategoriesMonth = () => {
  return (
    <>
       <section className='container my-5'>
            <div className='text-center'> 
                <h2 className='display-5 title-categorias'>Categories of The Month</h2>
                <p className='lead p-categories'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            <div className='container-categories'>
                <div className="row row-categories">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <Link to="/">
                        <img src={auriculares} alt="imagen de auriculares sony" className="rounded-circle img-fluid border shadow-sm img-categorias"/></Link>
                        <h3 className="text-center mt-3 mb-3">Headphones</h3>
                        <p className="text-center"><button className="btn btn-success">Go shop</button></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <Link to="/">
                        <img src={gafas} alt="imagen de gafas" className="rounded-circle img-fluid border shadow-sm"/>
                        </Link>
                        <h3 className="text-center mt-3 mb-3">Accesorios</h3>
                        <p className="text-center"><button className="btn btn-success">Go shop</button></p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <Link to="/">
                        <img src={dron} alt="imagen de dron" className="rounded-circle img-fluid border shadow-sm"/>
                        </Link>
                        <h3 className="text-center mt-3 mb-3">Drones</h3>
                        <p className="text-center"><button className="btn btn-success">Go shop</button></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeCategoriesMonth
