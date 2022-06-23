import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {

    --Grayish-blue: hsl(237, 18%, 59%);
    --Soft-red: hsl(345, 95%, 68%);

    --White: hsl(0, 0%, 100%);
    --Dark-desaturated-blue: hsl(236, 21%, 26%);
    --Very-dark-blue: hsl(235, 16%, 14%);
    --Very-dark: hsl(234, 17%, 12%);
}

body {
    font-family: 'Red Hat Text', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--Soft-red);
    background-color: var(--Very-dark-blue);
    background-image: url('./images/bg-stars.svg');
}

h1 {
    color: var(--White);
    text-transform: uppercase;
    letter-spacing: 7px;
    font-size: 1.4rem;
    margin-bottom: 4rem;
}

h2 {
    color: var(--Dark-desaturated-blue);
}
`

export default GlobalStyles