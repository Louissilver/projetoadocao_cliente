import styled from 'styled-components';
import Button from '../Button';

const ModalBase = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 10;
background-color: rgb(0,0,0, 0.6);
display: flex;
justify-content: center;
align-items: center;
`;

ModalBase.Container = styled.div`
    background-color: #ffffff;
    width: 60%;
    height: 60%;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
`;

ModalBase.Close = styled.button`
    background-color: ${({ theme }) => theme.colors.primaryDark};
    outline: none;
    display: flex;
    justify-content: center;
    border: none;
    border-radius: 5px;
    width: 24px;
    height: 24px;
    position: relative;
    right: calc(-100% + 30px);
    cursor: pointer;
    display: flex;
    align-items: center;
    &:before, 
    &:after {
        content: ' ';
        position: absolute;
        width: 4px;
        height: 16px;
        background-color: ${({ theme }) => theme.colors.secondary};
    }
    &:before{
        transform: rotate(45deg);
    }
    &:after{
        transform: rotate(-45deg);
    }
`;

ModalBase.Content = styled.div`
    overflow:auto;
    display: flex;
    flex-direction: column;
`;

ModalBase.Header = styled.header`
    display: flex;
    padding: .25rem;;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    h2{
        color: ${({ theme }) => theme.colors.primaryDark};
    }
    @media(max-width: 800px) {
        align-items: center;
        flex-wrap: wrap;
    }
`;

ModalBase.Footer = styled.footer`
    display: flex;
    padding: 1%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    @media(max-width: 800px) {
        align-items: center;
        flex-wrap: wrap;
    }
`;

export default function Modal({ cao, id = "modal", onClose = () => { } }) {
    const handleOutsideClick = (event) => {
        if (event.target.id === id) {
            onClose();
        }
    }


    return (
        <ModalBase id={id} onClick={handleOutsideClick}>
            <ModalBase.Container>
                <ModalBase.Header>
                    <ModalBase.Close onClick={onClose} />
                    <h2>{cao.nome} | {cao.raca}</h2>
                </ModalBase.Header>
                <ModalBase.Content>
                    <img src={cao.imagem} />
                </ModalBase.Content>
                <ModalBase.Footer>
                    <Button>Adotar</Button>
                    <Button onClick={onClose}>Fechar</Button>
                </ModalBase.Footer>
            </ModalBase.Container>
        </ModalBase>
    );
}