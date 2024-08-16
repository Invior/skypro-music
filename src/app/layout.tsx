import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";
import { CurrentTrackProvider } from "@/contexts/CurrentProvider";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Skypro music",
  description: "Музыка для души",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <ReduxProvider>
        <CurrentTrackProvider>
          <body className={montserrat.className}>{children}</body>
        </CurrentTrackProvider>
      </ReduxProvider>
    </html>
  );
}
