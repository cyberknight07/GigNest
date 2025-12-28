import styled, { css } from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ControlsWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const buttonStyles = css`
  padding: 24px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 8px 0px grey;
  background-color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;

  &:hover {
    padding: 26px;
    box-shadow: 0 0 15px 0px grey;
  }
`;

export const ButtonLeft = styled.button`
  ${buttonStyles}
  left: 10px;
  box-shadow: -2px 0 8px 0 grey;

  &:hover {
    box-shadow: -2px 0 15px 0 grey;
  }
`;

export const ButtonRight = styled.button`
  ${buttonStyles}
  right: 10px;
  box-shadow: 2px 0 8px 0 grey;

  &:hover {
    box-shadow: 2px 0 15px 0 grey;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  transition: all 0.3s ease;
  width: 100%;
  overflow: hidden;
`;

export const SlideItem = styled.div`
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.shrink {
    transform: scale(0.9);
    opacity: 0.7;
  }

  &.grow {
    transform: scale(1.1);
    opacity: 1;
  }
`;
