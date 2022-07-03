import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

export default function Layout ({children}){
  return <div className="layout">
    <Head>
      <title>BitCry</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    <Header />
    <main className="main">{children}</main>
    <Footer />
  </div>
}