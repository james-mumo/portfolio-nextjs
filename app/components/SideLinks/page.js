import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons"
import "./sidelinks.css"

const SideLinks = () => {
  return (
    <div className="container flex flex-row justify-between bottom-0 border w-[100vw] mr-0">
      <div className="leftSpan">[&#xf09b;]</div>
      <div className="rightSpan">
        <a href="mailto:mumojames98@gmail.com" className="mailTo">
          mumojames98@gmail.com
        </a>
      </div>
    </div>
  )
}

export default SideLinks
