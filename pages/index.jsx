import Head from 'next/head'
import {Container, Carousel} from 'react-bootstrap'
import Image from 'next/image'
import banner1 from '../public/img/index/banner/1.jpg'
import banner2 from '../public/img/index/banner/2.png'
import banner3 from '../public/img/index/banner/3.jpg'
import Layout from "../components/common/layout";

export default function Home() {
  return (
    <Layout>
      <Container className="md-container">
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
    </Layout>
  )
}
