"use client"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import UserDetails from "@/pages/api/getuserdata"
import SideLinks from "./components/SideLinks/page"

function Home() {
  const user = "james-mumo"

  return (
    <div className="w-full flex flex-col border p-0">
      {/* <UserDetails user={user}/> */}
      <SideLinks/>
    </div>
  )
}

export default Home
