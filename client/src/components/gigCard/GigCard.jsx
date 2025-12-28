import React from 'react'
import {
GigCardWrapper,
GigImage,
InfoDiv,
UserSpan,
HorizontalLine,
TitleParagraph,
StarsSpan,
DetailsWrapper,
PriceDiv,
} from  "./GigCard.styles.js"
import { Link } from 'react-router-dom'


const GigCard = ({item}) => {
  return (
    <Link to= "/gig/:id" className='link'>
        <GigCardWrapper>
        <GigImage src={item.img}/>
        <InfoDiv>
            <UserSpan>
                <img src={item.pp} className='pp' />
                <text>{item.username}</text>
            </UserSpan>
            <TitleParagraph>{item.desc}</TitleParagraph>
            <StarsSpan>
                <img src="./public/imgs/star.png"  />
                {item.star}
            </StarsSpan>
        </InfoDiv>
        <HorizontalLine/>
        <DetailsWrapper>
            <img src="./public/imgs/heart.png" />
            <PriceDiv>
                <p>Starting at</p>
                <p>${item.price}</p>
            </PriceDiv>
        </DetailsWrapper>
    </GigCardWrapper>
    </Link>
  )
}

export default GigCard