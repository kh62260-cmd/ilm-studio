import "./globals.css";
import { Poppins, Cinzel } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Ilm Studio | Islamic Knowledge & Educational Content",

  description:
    "Ilm Studio shares authentic Islamic knowledge, Quran, Hadith, Islamic history, motivational stories, and educational content for everyone.",

  keywords: [
    "Ilm Studio",
    "Islamic Knowledge",
    "Quran",
    "Hadith",
    "Islamic Stories",
    "Islamic History",
    "Motivational Islamic Videos",
    "Educational Videos",
    "Pakistan",
  ],

  authors: [
    {
      name: "Ilm Studio",
    },
  ],

  creator: "Ilm Studio",

  openGraph: {
    title: "Ilm Studio",

    description:
      "Islamic Knowledge • Quran • Hadith • Inspirational Stories",

    url: "https://your-domain.com",

    siteName: "Ilm Studio",

    locale: "en_US",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${poppins.variable} ${cinzel.variable}`}>
      {children}
      </body>

    </html>
  );
}