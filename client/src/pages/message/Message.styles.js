import styled from "styled-components";

export const MessageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
display: flex;
        flex-direction: column;
        width: 80vw;
        span{
            padding: 10px;
            font-weight: 500;
            font-size: 18px;
        }
`;

export const MessagesBox = styled.div`
margin: 10px 10px;
            height: 60vh;
            display:flex;
            justify-content: flex-start;
            flex-direction: column;
            overflow-y:auto;
`;
export const ItemBox = styled.div`
                display: flex;
                gap: 10px;
                padding: 0px 8px;
                max-width: 40vw;
                font-size: 18px;

                &.owner{
                    flex-direction: row-reverse;
                    align-self: flex-end;

                    p{
                        border-radius: 20px 0px 20px 20px;
                        background-color: rgb(41, 41, 179);
                        color: white;
                    }
                }
`;
export const ItemImage = styled.img`
                margin-top: 16px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
`;
export const ItemParagragh = styled.p`
                    padding: 10px;
                    background-color: lightgrey ;
                    color: rgb(83, 82, 82);
                    border-radius: 0px 20px 20px 20px;
              `;
export const HorizontalLine = styled.hr`
            height: 0px;
            border: 1px solid rgba(88, 71, 71, 1);
            margin: 4px 10px;
`;

export const WriterBox = styled.div`
            margin:4px;
            padding: 0px 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            textarea{
                width: 92%;
                height: 25px;
                padding: 10px 15px;
                border: 1px solid gray;
                border-radius: 40px;
                font-size: 18px;
                font-weight: 600;

                resize: none;
                overflow: auto;
            }

            button{
                padding: 8px 10px;
                border: 1px solid green;
                border-radius: 5px;
                background-color: green;
                color: white;
                font-weight: bold;
                letter-spacing: 1.5px;
            }
`;