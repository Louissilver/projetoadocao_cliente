import React, { useEffect, useState } from 'react';
import PageDefault from '../src/components/PageDefault';
import Card from '../src/components/Card';
import Button from '../src/components/Button';
import ListarCaes from '../src/repositories/Listagem';
import Head from '../src/components/Head';
import Loading from '../src/components/Loading';
import Modal from '../src/components/Modal';

export default function Listagem() {
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [dadosCao, setDadosCao] = useState([]);

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

    let verificador = 0;

    return (
        <>
            <Head title="adoCão - Cães para adoção" />
            <PageDefault>
                {dadosIniciais.length === 0 &&
                    <Loading.Container>
                        <Loading />
                    </Loading.Container>}
                <Card.Row>
                    {dadosIniciais.map((raca, indice) => {
                        for (let i = 0; i < dadosIniciais.length; i += 1) {
                            if (!(typeof dadosIniciais[indice].caes[0] === 'undefined') && (verificador === 0)) {
                                return (
                                    <Card key={raca.id}>
                                        <Card.Image src={dadosIniciais[indice].caes[i].imagem} />
                                        <Card.Header>
                                            <Card.Title>Nome: {dadosIniciais[indice].caes[i].nome}</Card.Title>
                                        </Card.Header>
                                        <Card.Content>
                                            <Card.List>
                                                <Card.Item>Raça: {dadosIniciais[indice].raca}</Card.Item>
                                                <Card.Item>Idade: {dadosIniciais[indice].caes[i].idade}</Card.Item>
                                                <Card.Item>Porte: {dadosIniciais[indice].caes[i].porte}</Card.Item>
                                                <Card.Item>Sexo: {dadosIniciais[indice].caes[i].sexo}</Card.Item>
                                            </Card.List>
                                        </Card.Content>
                                        <Card.Footer>
                                            <Button onClick={() => {
                                                setModalVisible(true)
                                                setDadosCao([dadosIniciais[indice].caes[i], dadosIniciais[indice].raca])
                                            }
                                            }>Saiba mais</Button>
                                            <Button>Adotar</Button>
                                        </Card.Footer>
                                    </Card>
                                );
                            }
                        }
                    })}
                    {modalVisible &&
                        <Modal id="saibaMais" onClose={() => { setModalVisible(false); }} info={dadosCao} />}
                </Card.Row>
            </PageDefault>
        </>
    )
}