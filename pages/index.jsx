import Head from 'next/head'
import Image from 'next/image'
import banner1 from '../public/img/index/banner/1.jpg'
import banner2 from '../public/img/index/banner/2.png'
import banner3 from '../public/img/index/banner/3.jpg'
import Index from "../components/header";

export default function Home() {
  return (
    <div className="page-home">
      <Head>
        <title>BitCry</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Index />

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

          <Container>
            <Row className="justify-content-md-between">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Documentation</Card.Title>
                  <Card.Text>
                    Find in-depth information about Next.js features and API.
                  </Card.Text>
                  <Button variant="primary" href="https://nextjs.org/docs">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Learn</Card.Title>
                  <Card.Text>
                    Learn about Next.js in an interactive course with quizzes!
                  </Card.Text>
                  <Button variant="primary" href="https://nextjs.org/learn">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Row>
            <Row className="justify-content-md-between">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Examples</Card.Title>
                  <Card.Text>
                    Discover and deploy boilerplate example Next.js projects.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://github.com/vercel/next.js/tree/canary/examples"
                  >
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Deploy</Card.Title>
                  <Card.Text>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                  >
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
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
    </div>

  )
}
