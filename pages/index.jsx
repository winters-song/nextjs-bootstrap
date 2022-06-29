import Head from 'next/head'
import {Container, Row, Card, Button, Carousel} from 'react-bootstrap'
import Image from 'next/image'
import banner1 from '../public/img/index/banner/1.jpg'
import banner2 from '../public/img/index/banner/2.png'
import banner3 from '../public/img/index/banner/3.jpg'
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="page-home">
      <Head>
        <title>BitCry</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Header />

      <Container className="md-container">

        <Container>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p>
            Get started by editing <code>pages/index.js</code>
          </p>

          <Carousel>
            <Carousel.Item>
              <Image
                src={banner1}
                alt="Picture of the author"
                className={"d-block w-100"}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={banner2}
                alt="Picture of the author"
                className={"d-block w-100"}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={banner3}
                alt="Picture of the author"
                className={"d-block w-100"}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <footer className="cntr-footer">
          <a
            href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo" />
          </a>
        </footer>
      </Container>

      <Footer />
    </div>
  )
}
