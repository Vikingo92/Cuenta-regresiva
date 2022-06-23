import styled from 'styled-components';

export const DivStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 100px;

    
    @media(max-width: 375px) {
        flex-direction: column;
        align-items: center;
    }

`

export const TimerStyle = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    
`
export const NumberStyle = styled.p`
    font-size: 5rem;
    background-color: var(--Dark-desaturated-blue);
    box-shadow: 6px 10px 5px var(--Very-dark);
    margin: 1rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    cursor: pointer;
    
    &:hover {
        transition: all .5s ease-in-out;
        color: var(--White);
    }
    
`    

export const CountStyle = styled.p`
    color: var(--Grayish-blue);
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 5px;

    &:hover {
        color: var(--Soft-red);
        transition: all .3s ease-in-out;
    }

`
