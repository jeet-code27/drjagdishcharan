import './globals.css';
import TopNavbar from '@/components/TopNavbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNavbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
