import styled from 'styled-components';
import { Col } from 'antd';

export const FooterBox = styled.footer`
    width : 100%;
    height : 80px;
    margin-top : 30px;
    padding : 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: -5px -2px 5px 0.5px #BFC7CE;
    & a {
        height: 22px;
        padding: 0 15px;
        color : #7A7A7A;
        & :hover {
            color : #ff4300;
        }
        @media only screen and (max-width: 400px){
            padding: 0 4px;
        }
    }
    & .FooterBoxWrapper{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    & .FooterCopyright{
        padding-top: 7px;
    }
    & > .mainBottomContent {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 15vw;
        font-size: 15px;
    }
`;