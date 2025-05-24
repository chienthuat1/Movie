import "../globals.css"
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import MovieSlider from "@/app/component/nav";
export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
    <body className="min-h-screen flex flex-col relative">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    </body>
    </html>
  );
}
