import design from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={design.container}>
        <nav className={design.nav}>
            <section className={design.logo}>
                <p>HydroStorm</p>
            </section>
            <ul className={design.listItems}>
                <li>Home</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
            <button className={design.button}>Get Started</button>
        </nav>
    </div>
  )
}

