import Provider from "./provider";
import Header from "@/app/header";
import Footer from "@/app/footer";
import Main from "@/app/main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Provider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
