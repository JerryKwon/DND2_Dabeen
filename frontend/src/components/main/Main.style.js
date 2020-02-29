import styled from 'styled-components';

export const MainForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width : 100%;
    margin-top: -2vh;
    & .ant-carousel {
        width : 100%;
        height : 50vh;
        & img {
            width : 100%;
            height : 50vh;
        }
        & .slick-dots li button::before {
            content : ""
        }
    }
    & > .mainImage {
        border: solid 1px gray;
        width: 90%;
        margin-top: 30px;
        text-align: center;
        padding : 24px;
    }
    & .title {
        color: #424242;
        font-size : 48px;
    }
    @media only screen and (max-width: 425px){
        & .title {
            font-size : 32px;
        } 
    }
`;

export const LiveHelpRequestMenuBar = styled.div`
    display: flex;
    justify-content: center;
    flex-direction : column;
    align-items: center;
    width: 100vw;
    margin-top: 5vh;
 
    @media only screen and (max-width: 425px) {
        flex-direction : column;
        align-items: center;
    }
    

    & .liveHelpRequestForm {
        display: flex;
        justify-content: space-around;
        width: 20vw;
        min-width : 150px;

        @media only screen and (max-width: 425px){
            margin-left: 1vw;
        }
    }
    & div[name=${props=> props.selectLiveMenu}] {
        color : #FF4300;
    }

    & .liveHelpRequest {
        /*선택시 색상 변경되게*/
        font-size: 30px;
        cursor: pointer;
        transition : color 0.3s;
        :hover{
            color: #FF4300;
        }

        @media only screen and (max-width: 1024px){
            font-size: 20px;
        }

        @media only screen and (max-width: 768px){
            font-size: 18px;
        }
    }
`;