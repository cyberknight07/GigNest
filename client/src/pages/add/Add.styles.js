import styled from "styled-components";

export const AddWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1400px;
  padding: 30px 0;

  h1 {
    color: grey;
    font-weight: 500;
    margin: 30px 0;
  }
`;

export const Sections = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const CommonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 5;

  label {
    color: gray;
    font-size: 18px;
  }

  input,
  select,
  textarea {
    background: rgb(241, 245, 245);
    border: none;
    padding: 16px;
    outline: none;
    border-radius:8px;
  }

  button {
    border: none;
    padding: 20px;
    background-color: green;
    color: white;
    font-weight: 500;
    cursor: pointer;
    font-size: 20px;
    border-radius:8px;
  }
`;

export const Left = styled(CommonSection)``;
export const Right = styled(CommonSection)``;
