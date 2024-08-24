import design from './support.module.css'
import { Navbar } from "../../components"

export const Support = () => {
  return (
    <div className={design.container}>
        <Navbar />
        <div className={design.content}>Support</div>
    </div>
  )
}
