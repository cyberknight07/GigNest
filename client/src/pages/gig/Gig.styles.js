import styled from "styled-components";

export const GigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 95vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1500px) {
    width: 95%;
    flex-direction: column;
    gap: 30px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3; /* take more space */

  img {
    max-width: 100%;
  }
`;

export const Breadcrumb = styled.span`
  margin-bottom: 10px;
  color: #666;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
  }
`;

export const Stars = styled.div`
  img {
    width: 30px;
  }
`;

export const Scrollbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  padding: 0px 16px 0px 16px; //top, right, bottom, left
`;

export const Image = styled.img`

    transform: ${({left}) => (left ? "rotate(180deg)" : "Opx")}; ;
    cursor: ${({button}) => (button ? "pointer" : "auto")};
    width: ${({button}) => (button ? "40px" : "360px")};
    height: ${({button}) => {button ? "40px": "360px"}};
    object-fit: cover;
`;

export const AboutTitle = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
`;

export const RightSection = styled.div`
  flex: 1;
`;

export const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  padding: 20px;
`;
