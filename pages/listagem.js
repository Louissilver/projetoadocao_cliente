import React, { useEffect, useState } from 'react';
import PageDefault from '../src/components/PageDefault';
import Card from '../src/components/Card';
import Button from '../src/components/Button';
import ListarCaes from '../src/repositories/Listagem';
import Head from '../src/components/Head';
import Loading from '../src/components/Loading';

export default function Listagem() {
    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        ListarCaes()
            .then((caes) => {
                setDadosIniciais(caes);
                console.log(caes);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <>
            <Head title="adoCão - Cães para adoção" />
            <PageDefault>
                {dadosIniciais.length === 0 &&
                    <Loading.Container>
                        <Loading />
                    </Loading.Container>}
                <Card.Row>
                    {dadosIniciais.map((cao, indice) => {
                        for (let i = 0; i < dadosIniciais.length; i += 1) {
                            if (!(typeof dadosIniciais[indice] === 'undefined') && (cao.adotado === false)) {
                                return (
                                    <Card key={indice}>
                                        <Card.Image src={cao.imagem} />
                                        <Card.Header>
                                            <Card.Title>Nome: {cao.nome}</Card.Title>
                                        </Card.Header>
                                        <Card.Content>
                                            <Card.List>
                                                <Card.Item>Idade: {cao.idade}</Card.Item>
                                                <Card.Item>Porte: {cao.porte}</Card.Item>
                                                <Card.Item>Sexo: {cao.sexo}</Card.Item>
                                            </Card.List>
                                        </Card.Content>
                                        <Card.Footer>
                                            <Button>Saiba mais</Button>
                                            <Button>Adotar</Button>
                                        </Card.Footer>
                                    </Card>
                                );
                            }
                        }
                    })}
                </Card.Row>
            </PageDefault>
        </>
    )
}