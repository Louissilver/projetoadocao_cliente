import PageDefault from '../src/components/PageDefault';
import Head from '../src/components/Head';
import FormularioCadastro from '../src/components/FormularioCadastro';

export default function Cadastro() {
  return (
    <>
    <Head/>
      <PageDefault>
        <FormularioCadastro/>
      </PageDefault>
    </>
  )
}