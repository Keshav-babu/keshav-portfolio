import Footer from "./component/footer";
import Header from "./component/header";
import "./globals.css";

export const metadata = {
  title: "Portfolio – Keshav Mandal",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black">
        <div className="mx-auto w-full max-w-[768px] bg-[#f6f6f6] dark:bg-black border-2 border-grey">
          <Header />
          <main className="pt-[72px] pb-[60px] mx-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
