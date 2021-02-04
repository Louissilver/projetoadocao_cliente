import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Input = styled.input`
    padding: 8px;
    font-size: 16px;
    margin-bottom: 5px;
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
    margin-bottom:20px;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`;

Input.Control = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;
`;

const Label = styled.label`
    text-align: start;
    padding-bottom: 5px;
    margin: 0;
    @media(max-width: 800px) {
        text-align: center;
    }
`;

Input.Area = styled.h2`
    text-align: center;
    font-size: 1.25rem;
    border-bottom: 1px solid black;
    width: 100%;
    padding: 1%;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color:  ${({ theme }) => theme.colors.secondary};
`;

function FormularioCadastro() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <Input.Container>
            <Input.Area>Dados pessoais</Input.Area>
                <Input.Row>
                    <Input.Control>
                        <Label aria-label="nome">Nome:</Label>
                        <Input id="nome" type="text" required placeholder="Insira aqui seu nome. (Ex: Luís)." />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="sobrenome">Sobrenome:</Label>
                        <Input id="sobrenome" type="text" required placeholder="Insira aqui seu sobrenome. (Ex: Silveira)." />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="cpf">CPF:</Label>
                        <Input id="cpf" type="number" required placeholder="Insira seu CPF." />
                    </Input.Control>
                </Input.Row>
                <Input.Row>
                    <Input.Control>
                        <Label aria-label="senha">Senha:</Label>
                        <Input id="senha" type="password" required placeholder="Insira aqui sua senha com, no mínimo, 8 dígitos." />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="confirmacaoSenha">Confirmação de senha:</Label>
                        <Input id="confirmacaoSenha" type="password" required placeholder="Confirme sua senha." />
                    </Input.Control>
                </Input.Row>
                <Input.Area>Dados para contato</Input.Area>
                <Input.Row>
                    <Input.Control>
                        <Label aria-label="email">E-mail:</Label>
                        <Input id="email" type="email" required placeholder="Insira aqui seu e-mail. (Ex: luis@gmail.com)." />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="fone">Telefone:</Label>
                        <Input id="fone" type="number" required placeholder="Ex: 51994475529" />
                    </Input.Control>
                </Input.Row>
                <Input.Area>Dados para entrega</Input.Area>
            <hr/>
                <Input.Row>
                    <Input.Control>
                        <Label aria-label="endereco">Endereço:</Label>
                        <Input id="endereco" type="text" required placeholder="Av. das Palmeiras" />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="numero">Número:</Label>
                        <Input id="numero" type="number" required placeholder="Insira o número da casa." />
                    </Input.Control>
                </Input.Row>
                <Input.Row>
                    <Input.Control>
                        <Label aria-label="cidade">Cidade:</Label>
                        <Input id="cidade" type="text" required placeholder="Insira sua cidade." />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="estado">Estado:</Label>
                        <Input id="estado" type="text" required placeholder="Insira seu Estado." />
                    </Input.Control>
                    <Input.Control>
                        <Label aria-label="cep">CEP:</Label>
                        <Input id="cep" type="number" required placeholder="Insira seu CEP." />
                    </Input.Control>
                </Input.Row>
                <Button type="submit">Cadastrar</Button>
            </Input.Container>
        </form>
    )
}

export default FormularioCadastro;