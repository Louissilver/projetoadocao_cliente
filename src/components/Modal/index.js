import { Children } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const ModalBase = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
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
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    top: 16px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    &:before, 
    &:after {
        content: ' ';
        position: absolute;
        width: 2.5px;
        height: 24px;
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

export default function Modal({ id="modal", onClose = () => {}, children }) {
    const handleOutsideClick = (event) => {
        if(event.target.id === id){
            onClose();
        }
    }

    
    return (
        <ModalBase id={id} onClick={handleOutsideClick}>
            <ModalBase.Container>
                <ModalBase.Close onClick={onClose}/>
                <ModalBase.Content>
                    {children}
                </ModalBase.Content>
            </ModalBase.Container>
        </ModalBase>
    );
}