import "./globals.css"
import { PiMusicNotesSimpleLight } from "react-icons/pi";
import Buttons from "./components/other/menuBtn/buttons";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-white min-h-screen ">
        <div className={`relative w-full min-h-[screen]`}>

          <div className="absolute top-40 right-20 w-2 h-2 bg-[#FF6B00] rounded-full opacity-50 animate-pulse"></div>

          <div className="relative">
            {children}
          </div>
        </div>

        <div className="fixed bg-[#000000] flex flex-col top-0 left-0 w-[15%] h-[100vh] pt-[25px] z-50  border border-[#222222]">
            <div className="flex w-full px-5 items-center gap-[15px] box-border pb-[20px] border-b border-[#202020]">
              <PiMusicNotesSimpleLight className="text-[35px] text-[#FF6B00]"></PiMusicNotesSimpleLight><span className="text-[25px]">Music Admin</span>
            </div>

            <Buttons></Buttons>

        </div>
      </body>
    </html>
  )
}
