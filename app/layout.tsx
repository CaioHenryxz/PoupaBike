import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "PoupaBike | Mobilidade elétrica e bikes pra todos os estilos",
  description:
    "Landing page da PoupaBike com motos elétricas, bicicletas, acessórios e atendimento rápido pelo WhatsApp.",
  icons: {
    icon: "/logo-poupabike.png",
    apple: "/logo-poupabike.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
