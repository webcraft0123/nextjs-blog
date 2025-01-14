import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24 p-6">
        <Component {...pageProps} />
      </div>
    </>
  );
}
