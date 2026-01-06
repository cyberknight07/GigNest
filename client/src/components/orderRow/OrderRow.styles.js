import styled from "styled-components";

export const TableRow = styled.tr`
  height: 50px;
  th {
    padding: 0px 8px;
    text-align: left;
  }
  td {
    padding: 0px 8px;

    .image {
      width: 70px;
      height: 35px;
      object-fit: cover;
    }
    .order {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    background-color: rgba(190, 232, 220, 1);
  }
  &:nth-child(odd) {
    background-color: rgba(240, 251, 247, 1);
  }
`;
