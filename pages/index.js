import PageDefault from '../src/components/PageDefault';
import Head from '../src/components/Head';
import Carousel from '../src/components/Carousel';

export default function Home() {
  return (
    <>
    <Head/>
      <PageDefault>
      <Carousel>
        <Carousel.Image src="../public/images/carrossel.jpg"/>
      </Carousel>
      </PageDefault>
    </>
  )
}
