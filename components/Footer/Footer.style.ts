import styled from 'styled-components'

export const Container = styled.footer`
    z-index: 10;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(0, 0, 0, 0.5);
    & ul {
        list-style: none;
    }
    & li {
        display: inline-block;
        margin-right: 15px;
    }
`
