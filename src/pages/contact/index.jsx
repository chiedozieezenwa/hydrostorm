import { Navbar } from "../../components/landing page/navbar"
import design from "./contact.module.css"

export const Contact = () => {
  return (
    <div className={design.container}>
        <Navbar />
        <div className={design.content}>
          Contact us
        </div>
    </div>
  )
}
