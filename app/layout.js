import './globals.css'
import Menu from './components/menu/menu';
import MenuPrivorder from './context/menu';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuPrivorder>
          <div className="glass w-[20%] h-[100vh] border-[#ffffff0f] flex flex-col items-center">
            <Menu></Menu>
          </div>
          {children}
        </MenuPrivorder>
      </body>
    </html>
  );
}
