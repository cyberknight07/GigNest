// OrdersWrapper
// OrdersContainer
// OrdersHeader
// OrdersTable

//TODO 
// 1. Remove color from thead

import styled from "styled-components";

export const OrdersWrapper = styled.div`
    display: flex;
    justify-content: center;    
`;
export const OrdersContainer = styled.div`
        width: 95vw;
        padding: 30px 0px;
`;

export const OrdersHeader = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;

            button{
                padding: 6px 18px;
                background-color: green;
                color: white;
                border: 1px solid green;
                border-radius: 5px;
            }
`;

export const OrdersTable = styled.table`
                width: 100%;
                border: none;
    
                tr{
                    height: 50px;
                    th{
                        padding: 0px 8px;
                        text-align: left;
                    }
                    td{
                        padding: 0px 8px;

                        .image{
                        width: 70px;
                        height: 35px;
                        object-fit: cover;
                    }
                    .order{
                        width: 20px;
                        height: 20px;
                        object-fit: cover;
                    }
                }
                
                &:nth-child(even){
                    background-color: rgba(190, 232, 220, 1);
                }
                &:nth-child(odd){
                    background-color: rgba(240, 251, 247, 1);
                }
            }   
        }
`;

// .orders{
//     display: flex;
//     justify-content: center;

//     .container{
//         width: 1440px;
//         padding: 50px 0px;

//         .header{
//             display: flex;
//             align-items: center;
//             justify-content: space-between;

//             button{
//                 padding: 6px 18px;
//                 background-color: green;
//                 color: white;
//                 border: 1px solid green;
//                 border-radius: 5px;
//             }
//         }

//         table{
//                 width: 100%;
//                 border: none;
                
                
//                 tr{
//                     height: 50px;
                

//                     th{
//                         text-align: left;
//                     }

//                     td{
//                         .image{
//                         width: 70px;
//                         height: 35px;
//                         object-fit: cover;
//                     }

//                     .order{
//                         width: 20px;
//                         height: 20px;
//                         object-fit: cover;
//                     }

//                     }

//                     &:nth-child(even){
//                         background-color: rgb(224, 242, 237);
//                     }

//                 }
                
//             }
            
//     }
// }