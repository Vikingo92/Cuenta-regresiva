import styled from 'styled-components';

export const StyleFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background: url('./images/pattern-hills.svg') center bottom;
    margin: 20px 0;

    li {
        list-style-type: none;
        color: var(--Grayish-blue);
        display: inline-flex;
        margin: 0 15px;
        margin-bottom: 50px;
        font-size: 2rem;
        cursor: pointer;
        align-items: center;
        
        
        &:hover {
            color: var(--Soft-red);
            transition: all .3s ease-in-out;
        }

        
    @media(max-width: 375px) {
        flex-direction: 1;
        align-items: center;
    }
    
    }
    
`

export const Image = styled.img`

`

export const ImageFooter = styled.div`
    background-size: auto 0;

`
