import StyledComponentsRegistry from "@/lib/registry";
import { Montserrat } from "next/font/google";

import './globals.css';

const montserrat = Montserrat({subsets: ["latin"]});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
