import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: white;
    color: black;
    flex: 1;
    padding: 0;
    margin: 0;
`;

function PageDefault({ children }) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default PageDefault;