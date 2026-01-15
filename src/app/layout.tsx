import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Avadhesh Mishra | Portfolio",
  description:
    "Principal Delivery Consultant – Enterprise, Platform & CTO Advisory. Cloud, DevSecOps, Zero Trust, IAM/PAM, Secure AI.",
  metadataBase: new URL("https://avadheshmishra.com"),
  openGraph: {
    title: "Avadhesh Mishra | Portfolio",
    description: "CTO-level delivery leadership across cloud, security, and digital transformation.",
    url: "https://avadheshmishra.com",
    siteName: "Avadhesh Mishra",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
