import Nav from "./components/Nav";
import "./globals.css";

export const metadata = {
  title: "Tienda App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
