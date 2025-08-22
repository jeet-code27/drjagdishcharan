import './globals.css';
import React, { Suspense } from "react";
import TopNavbar from '@/components/TopNavbar';
import Navbar from '@/components/Navbar';
import FloatingContactIcons from '@/components/FloatingContactIcons';
import ReduxProvider from '@/store/provider';
const Footer  = React.lazy(() => import("@/components/Footer"));
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        <ReduxProvider>
          <FloatingContactIcons />
          <TopNavbar />
          <Navbar />
          {children}
          <Suspense fallback={<div>Loading  Footer...</div>}>
          <Footer />
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
