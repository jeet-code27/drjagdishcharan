// app/layout.js
// import Footer from '@/components/layout/Footer';
// import Navbar from '@/components/layo/Navbar';
import './globals.css';
 



 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <main>{children}</main>
        {/* <FloatingContact/> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}