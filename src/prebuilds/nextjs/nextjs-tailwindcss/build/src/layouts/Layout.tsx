import { Inter, Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "variable",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={`${inter.variable} ${poppins.variable} flex min-h-full flex-col font-inter`}>
      {children}
    </div>
  );
}
