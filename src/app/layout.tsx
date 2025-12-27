import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { site } from "@/lib/site";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Luis Calderón: Especialista en Rodilla en Quito",
    template: `%s | Dr. Luis Calderón`,
  },
  description:
    "Traumatólogo en Quito especializado en rodilla, artroscopia, prótesis robótica y preservación articular. Agenda tu cita en Fortune Plaza.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "Dr. Luis Calderón: Especialista en Rodilla en Quito",
    description:
      "Experto en cirugía de rodilla, meniscos y prótesis robótica. Agenda tu cita en el Norte de Quito.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/assets/foto-drluis.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Luis Calderón, especialista en rodilla en Quito",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} antialiased font-sans bg-background text-foreground`}
      >
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </div>
        <GoogleAnalytics gaId="G-XXXXXXX" />
      </body>
    </html>
  );
}
