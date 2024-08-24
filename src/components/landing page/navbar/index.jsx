import { Link, NavLink } from 'react-router-dom'
import design from './navbar.module.css'

export const Navbar = () => {
  const getActiveClass = ({ isActive }) => isActive ? design.active : design.link;

  return (
    <div className={design.container}>
        <nav className={design.nav}>
            <section className={design.logo}>
                <p>Edu<span>Stealth</span></p>
            </section>
            <ul className={design.listItems}>
              <NavLink to="/" className={getActiveClass}>
                  <li>Home</li>
              </NavLink>
              <NavLink to="/services" className={getActiveClass}>
                  <li>Services</li>
              </NavLink>
              <NavLink to='/contact' className={getActiveClass}>
                  <li>Contact Us</li>
              </NavLink>   
              <NavLink to='/support' className={getActiveClass}>
                  <li>Support</li>
              </NavLink> 
            </ul>
            <Link to="/signup">
                <button className={design.button}>Get Started</button>
            </Link>
        </nav>
    </div>
  )
}

