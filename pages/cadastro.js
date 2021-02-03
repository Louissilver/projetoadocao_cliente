import PageDefault from '../src/components/PageDefault';
import Head from '../src/components/Head';
import FormularioCadastro from '../src/components/FormularioCadastro';

export default function Cadastro() {
  return (
    <>
      <Head title="adoCão - Cadastro de parceiro" />
      <PageDefault>
        <FormularioCadastro />
      </PageDefault>
    </>
  )
}