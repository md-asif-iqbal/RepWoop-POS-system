import "./globals.css";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Navigation from "./Shared/Navigation/Navigation";
import Footer from "./Shared/Footer/Footer";
import { Toaster } from "sonner";

export const metadata = {
  title: "Repwoop POS Software",
  description: "Professional Point of Sale System by Repwoop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter antialiased">
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
        <div className="h-screen flex">
          {/* Sidebar */}
          <div className="hidden lg:block md:w-[8%] lg:w-[16%] xl:w-[14%] p-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="w-full md:w-[95%] lg:w-[84%] xl:w-[86%] bg-slate-50 dark:bg-slate-900 overflow-y-auto flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
