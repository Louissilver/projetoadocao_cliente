import styled from 'styled-components';

const Button = styled.button`
border-radius: 5px;
font-weight: bold;
color: ${({ theme }) => theme.colors.primaryDark};
background-color: ${({ theme }) => theme.colors.secondary};
border-color: ${({ theme }) => theme.colors.primaryDark};
margin: 5px;
padding: 15px;
font-size: 16px;
transition: 0.6s;
&:hover,
&:active{
    cursor: pointer;
    opacity: 0.9;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
}
`;

export default Button;