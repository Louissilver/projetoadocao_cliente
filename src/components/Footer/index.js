import React from 'react';
import styled from 'styled-components';

const FooterBase = styled.footer`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
    padding-bottom: 32px;
    text-align: center;
    a{
        color: ${({ theme }) => theme.colors.primary};
        transition: 0.6s;
    }
    a:hover{
        opacity: 0.5;
    }
`;

function Footer() {
    return (
        <FooterBase>
            <p>&copy; Copyrigth 2021 | <a href="https://github.com/Louissilver" target="_blank">@Louissilver</a></p>
        </FooterBase>
    )
}

export default Footer;