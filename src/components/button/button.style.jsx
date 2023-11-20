import { styled } from "styled-components";


export const TransparentButton = styled.button`
    font: 20px/150% 'Poppins';
    font-weight: 500;
    color: #FFF;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid  #FFF;
    background-color: transparent;
    cursor: pointer;
    &:hover {
        background-color: #FFF;
        color: #000;
    }
`

export const BlueButton = styled(TransparentButton)`
    height: 70px;
    padding: 20px 40px;
    background: #4997D3;
    border: none;
    &:hover {
        background-color: #000;
        color: #FFF;
    }
`

export const RoundedButton = styled(TransparentButton)`
    border-radius: 50%;
    background: #FFF;
    border: none;
`
export const GrayButton = styled(BlueButton)`
    padding: 12px 32px;
    color: #000;
    background: #F6F6F6;
    &:hover {
        background-color: #4997D3;
    }
`
