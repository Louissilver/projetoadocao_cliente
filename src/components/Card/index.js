import styled from 'styled-components';

const Card = styled.article`
    width: 300px;
    border: 1px solid black;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin: 2%;
    padding: 0;
`;

Card.Header = styled.header`
    width: 100%;
    align-items: center;
    text-align:center;
    margin: 0;
`;

Card.Content = styled.main`
    align-items: center;
    margin: 0;
`;

Card.List = styled.ul`
    list-style: none;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
`;

Card.Item = styled.li`
    padding: 6%;
    border-top: 1px solid black;
`;

Card.Title = styled.h2`
    font-size: 14px;
    text-align: center;
    height: 100%;
    padding: 5%;
    margin: 0;
`;

Card.Image = styled.img`
    width: 100%;
    object-fit: cover;
	object-position: center;
	height: 150px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0%;
    border-bottom-right-radius: 0%;
`;

Card.Footer = styled.footer`
    width: 100%;
    align-items: center;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    border-top: 1px solid black;
`;

Card.Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: center;
    margin-left: 10%;
    width: 90%;
    @media(max-width: 800px) {
        flex-direction: column;
    margin-left: 5%;
    }
`;

export default Card;