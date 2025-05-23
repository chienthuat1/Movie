import "./globals.css"
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Nav from "@/app/component/nav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (

    <html lang="en">
    <body className="min-h-screen flex flex-col relative">
    <Header />
    <main className="flex-1">{children}</main>
    <div className="h-[2000px] bg-gray-100 p-10">Scroll để test sticky</div>
    <Footer />
    </body>
    </html>
  );
}
