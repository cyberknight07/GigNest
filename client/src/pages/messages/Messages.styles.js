
import styled from "styled-components";

export const MessagesWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
        width: 95vw;
        padding: 30px 0px;

`;
export const Heading = styled.h1``;
export const TabularWrapper = styled.table`
                width: 100%;
                border: none;

                button{
                padding: 12px;
                background-color: green;
                color: white;
                border: 1px solid green;
                border-radius: 2px;
                cursor: pointer;
                }
                                
                tr{
                    height: 50px;
                
                    th{
                        text-align: left;
                        padding: 14px;
                    }

                    td{
                        padding: 14px;
                        font-weight: 500;
                        color: grey;

                        &:first-child{
                            font-weight: 700;
                            color: black;
                        }

                        &:nth-child(3){
                            font-weight: 700;
                            color: black;
                        }
                    }
                }

                    .active{
                        background-color: rgb(224, 242, 237);
                    }
                
`;

