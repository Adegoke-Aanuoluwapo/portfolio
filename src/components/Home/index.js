import LogoTitle from '../../assets/images/logo-s.png' 
import {Link, NavLink} from 'react-router-dom'
import './index.scss'

const Home = () => {

      return (
       <div className="container home-page">
          <div className="text-zone">
              <h1>Hi, <br /> I'm
              <img src={LogoTitle} alt="developer" />
              Immaculate
              <br />
              </h1>
             <h2>a Full Stack Developer /PHP /LARAVEL/REACT.<br/></h2> 
             <Link to="contact" className="flat-button">CONTACT</Link>
          </div>
       </div>
      )
}


export default Home;