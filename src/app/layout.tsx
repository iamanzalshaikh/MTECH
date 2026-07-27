import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "M-Tech Computers INDIA - AutoCAD Course Training Classes in India",
  description: "M-Tech Computers is a leading training network of India in the field of CAD/CAM/CAE. Learn AutoCAD, SolidWorks, Revit, CATIA, Civil/Mechanical/Electrical designing software with ISO certification and placement support.",
  keywords: "AutoCAD course, CAD training classes, SolidWorks training, Revit Architecture, CATIA course, M-Tech Computers India, engineering software course",
  openGraph: {
    title: "M-Tech Computers INDIA - AutoCAD Course Training Classes in India",
    description: "M-Tech Computers is a leading training network of India in the field of CAD/CAM/CAE. Replicated in Next.js.",
    type: "website",
    url: "https://caddeskindia.com/",
    images: [
      {
        url: "https://caddeskindia.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-26-at-13.26.27.jpeg",
        width: 1280,
        height: 800,
        alt: "M-Tech Computers India Training",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
