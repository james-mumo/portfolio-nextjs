import "./nav.css"

function Navbar() {
  return (
    <main className="nav w-full flex flex-row justify-between px-[70px] py-[20px]">
      <span className="logo overflow-hidden blueColor w-[45px] h-[45px]">
        <a href="/#" className="  relative">
          <img
            src="./gitAvatar.png"
            alt="usernameInitialsIcon"
            className="object-cover  w-full h-full"></img>
        </a>
      </span>
      <ul className="navItems flex flex-row">
        <li>About</li>
        <li>Blog</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </main>
  )
}

export default Navbar
