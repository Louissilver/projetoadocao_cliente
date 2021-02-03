import styled from 'styled-components';

const Carousel = styled.div`
    width: 100vw;
    height: calc(100vh - 86px);
`;

Carousel.Image = styled.img`
    width: 100%;
    object-fit: cover;
	object-position: center;
	height: 100%;
`;

export default Carousel;