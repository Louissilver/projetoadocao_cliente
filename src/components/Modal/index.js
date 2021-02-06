import { Children } from 'react';
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
    border-radius: 20px;
`;

ModalBase.Close = styled.button`
    background-color: transparent;
    border: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 30px);
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    &:before, 
    &:after {
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 16px;
        background-color: black;
    }
    &:before{
        transform: rotate(45deg);
    }
    &:after{
        transform: rotate(-45deg);
    }
`;

ModalBase.Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

ModalBase.Header = styled.header`
    display: flex;
    justify-content: pace-around;
    padding: 1%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
`;

export default function Modal({ id = "modal", onClose = () => { }, children }) {
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
                </ModalBase.Header>
                <ModalBase.Content>
                    {children}
                </ModalBase.Content>
            </ModalBase.Container>
        </ModalBase>
    );
}