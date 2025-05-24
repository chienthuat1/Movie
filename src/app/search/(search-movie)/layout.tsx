import "@/app/globals.css"
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
        <body>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
