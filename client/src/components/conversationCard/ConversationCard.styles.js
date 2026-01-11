import styled from "styled-components";

export const TableRow = styled.tr`
  height: 50px;
  th {
    padding: 0px 8px;
    text-align: left;
  }
  td {
    padding: 0px 8px;
    justify-content: left;
    align-items: center;
    
    span{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    img{
        width: 25px;
        height: 25px;
        object-fit: contain;
        border-radius: 50%;
    }
  }

  &:nth-child(even) {
    background-color: rgba(190, 232, 220, 1);
  }
  &:nth-child(odd) {
    background-color: rgba(240, 251, 247, 1);
  }
`;
