import "./globals.css";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Navigation from "./Shared/Navigation/Navigation";
import Footer from "./Shared/Footer/Footer";
import MobileDrawer from "./Shared/Sidebar/MobileNav";
import { SidebarProvider } from "./Shared/Sidebar/SidebarContext";
import { Toaster } from "sonner";

export const metadata = {
  title: "SoftLanding POS Software",
  description: "Professional Point of Sale System by SoftLanding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter antialiased">
        <SidebarProvider>
          <Toaster 
            position="top-right" 
            richColors 
            closeButton
            toastOptions={{
              style: {
                fontFamily: 'Inter, sans-serif',
              },
            }}
          />
          {/* MobileDrawer at body root — outside nav stacking context, z-index works correctly */}
          <MobileDrawer />
          <div className="h-screen flex overflow-hidden">
            {/* Sidebar - Desktop only, fixed height, scrolls independently */}
            <div className="hidden lg:flex lg:flex-col w-64 shrink-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto">
              <Sidebar />
            </div>
            {/* Main Content - flex col, h-screen, scroll only this area */}
            <div className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-900 flex flex-col h-screen overflow-hidden">
              <Navigation />
              {/* Spacer to push content below the fixed navbar (~64px) */}
              <div className="h-16 shrink-0" />
              <main className="flex-1 overflow-y-auto">{children}</main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
