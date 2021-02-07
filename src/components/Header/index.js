import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../Button';

const HeaderBase = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const ButtonContent = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 50%;
    @media(max-width: 800px) {
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
    }
`;

function Header() {
    const router = useRouter()
    return (
        <HeaderBase>
            <a href="/">
                <img className="Logo" src='https://fontmeme.com/permalink/210201/b688a2d013b81c3849c40f2158a06cef.png' alt="Logo da AdoCão" />
            </a>
            <ButtonContent>
                <Button onClick={() => router.push('/')}>Home</Button>
                <Button onClick={() => router.push('/listagem')}>Quero adotar</Button>
                <Button onClick={() => router.push('/cadastro')}>Me cadastrar</Button>
            </ButtonContent>
        </HeaderBase>
    )
}

export default Header;