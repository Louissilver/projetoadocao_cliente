import styled from 'styled-components';
import carousel from '../../assets/carrossel.png';
import responsive from '../../assets/responsive.png';

const Carousel = styled.div`
    width: 100%;
    margin-top: 0;
    padding-top: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    height: calc(100vh - 86px);
    background-image: url('${carousel}');
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;

    @media(max-width: 800px) {
        background-image: url('${responsive}');
    }
`;

Carousel.Image = styled.img`
    width: 100%;
    object-fit: cover;
	object-position: center;
	height: 100%;
`;

export default Carousel;