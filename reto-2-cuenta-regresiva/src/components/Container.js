import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    align-items: center;
    justify-content: center;
    text-align: center;


    @media(max-width: 375px) {
        flex-direction: column;
        align-items: center;
    }

`

export const Background = styled.div`
    background: url('./images/bg-stars.svg') center;
    
`