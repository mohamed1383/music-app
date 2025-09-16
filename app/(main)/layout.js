import MenuPrivorder from "./context/publicDatas"
import Menu from "./components/menu/menu"
import './globals.css'

export default function Layout({ children }) {
    return (
        <MenuPrivorder>
            <html lang="fa" dir="ltr">
                <body>
                    {children}
                    <Menu></Menu>
                </body>
            </html>
        </MenuPrivorder>
    )
}
