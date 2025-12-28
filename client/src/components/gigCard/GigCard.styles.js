// GigCardWrapper,
// GigImage,
// InfoDiv,
// UserSpan,
// HorizontalLine,
// TitleParagraph,
// StarsSpan,
// DetailsWrapper,
// PriceDiv

/* TODO- Remaining Settings 
    1. Hover over card -> Title should be black in color.
*/

import styled from "styled-components";

const cardWidth = "250px";

export const GigCardWrapper = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${cardWidth};
    border: 1px solid beige;
    box-shadow: -.5px 0px 1px 0px burlywood;
    cursor: pointer;

    &:hover{
        box-shadow: 3px 3px 10px 0px burlywood;
        
    }
`;

export const GigImage = styled.img`
    height: 200px;
    object-fit: cover;
`;

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4px 8px;
`;

export const UserSpan = styled.span`
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;
            font-size: 18px;
            .pp{
                width: 40px;
                border-radius: 50%;
            }
`;
export const HorizontalLine = styled.hr`
    width: ${cardWidth};
    border: 1px solid beige;
`;
export const TitleParagraph = styled.p`
    display: flex;
    color: grey; // 
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const StarsSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        width: 20px;
    }
`;

export const DetailsWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 16px;
            
        img{
                width: 30px;
        }
`;
export const PriceDiv = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            line-height:0px;

            p{
                color: rgb(71, 69, 69);
                font-size: 18px;
                font-weight: 600;
                &:first-child{
                    color: grey;
                }
                
            }
`;


// .gigcard{
//     margin: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 250px;
//     border: 1px solid beige;
//     box-shadow: -.5px 0px 1px 0px burlywood;
//     cursor: pointer;

//     &:hover{
//         box-shadow: 3px 3px 10px 0px burlywood;
        
//     }
    

//     .gig-image{
//         height: 200px;
//         object-fit: cover;

//     }
//     .info{
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // gap: 10px;
        // padding: 4px 16px;

//         .user{
            // display: flex;
            // align-items: center;
            // gap: 10px;
            // font-size: 18px;
            // .pp{
            //     width: 40px;
            //     border-radius: 50%;
            // }
//         }

//         p{
            // display: flex;
            // color: grey;
            // font-size: 15px;
            // white-space: nowrap;
            // overflow: hidden;
            // text-overflow: ellipsis;
//         }
//         .stars{
            // display: flex;
            // align-items: center;
            // gap: 10px;
            // img{
            //     width: 20px;
            // }
//         }
//     }

//     hr{
//         border: 1px solid beige;
//     }

//     .details{
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        // padding: 4px 16px;
            
        // img{
        //         width: 30px;
        // }
//         .price{
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;

            // p{
            //     color: rgb(71, 69, 69);
            //     font-size: 18px;
            //     font-weight: 600;
            //     &:first-child{
            //         color: grey;
            //     }
                
            // }
//         }
//     }
// }