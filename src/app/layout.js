
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="min-h-full flex flex-col">

        <Header />

       <main className="relative z-10 grow">
         {children}
       </main>

        <div className="sticky bottom-0 z-0">
        <Footer />
      </div>
        </body>
        
    </html>
  );
}
