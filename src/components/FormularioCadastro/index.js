import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Input = styled.input`
    padding: 16px;
    font-size: 16px;
    margin-bottom: 20px;
`;

Input.Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   flex-wrap: wrap;
   align-items: center;
   padding: 3%;
   margin-bottom: 30px;
   @media(max-width: 800px) {
        flex-direction: column;
    }
`;

Input.Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-bottom:10px;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`;

Input.Control = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px;
`;

const Label = styled.label`
    text-align: start;
    padding-bottom: 16px;
    margin: 0;
    @media(max-width: 800px) {
        text-align: center;
    }
`;

function FormularioCadastro() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <Input.Container>
                <Input.Row>
                    <Input.Control>
                        <Label aria-label="nome">Nome:</Label>
                        <Input id="nome" type="text" required placeholder="Insira aqui seu nome completo. (Ex: Luís Fernando da Silveira)" />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="senha">Senha:</Label>
                        <Input id="senha" type="password" required placeholder="Insira aqui sua senha com, no mínimo, 8 dígitos." />
                    </Input.Control>
                </Input.Row>
                <Input.Row>
                    <Input.Control>
                        <Label aria-label="email">E-mail:</Label>
                        <Input id="email" type="email" required placeholder="Insira aqui seu e-mail. (Ex: luis@gmail.com)" />
                    </Input.Control>
                </Input.Row>
                <Button type="submit">Cadastrar</Button>
            </Input.Container>
        </form>
    )
}

export default FormularioCadastro;