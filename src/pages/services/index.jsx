import { Navbar } from "../../components"
import design from "./services.module.css"

export const Services = () => {
  return (
    <>
    <div className={design.container}>
        <Navbar />
    </div>
    <div className={design.content}>Services</div>
    </>
  )
}
