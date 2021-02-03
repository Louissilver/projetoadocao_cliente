import PageDefault from '../src/components/PageDefault';
import Head from '../src/components/Head';
import Carousel from '../src/components/Carousel';

export default function Home() {
  return (
    <>
      <Head title="adoCão" />
      <PageDefault>
        <Carousel>
        </Carousel>
      </PageDefault>
    </>
  )
}
