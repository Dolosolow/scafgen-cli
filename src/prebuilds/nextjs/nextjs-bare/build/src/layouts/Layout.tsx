import { Inter, Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export function Layout({ children }: PropsWithChildren) {
  return <div className={poppins.className}>{children}</div>;
}
