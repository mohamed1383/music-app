import './globals.css'
import Menu from './components/menu/menu';
import MenuPrivorder from './context/menu';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <MenuPrivorder>
            <Menu></Menu>
          {children}
        </MenuPrivorder>
      </body>
    </html>
  );
}
