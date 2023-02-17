import "./globals.css"
import Navbar from "./components/Navbar/page"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
