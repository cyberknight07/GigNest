import styled from 'styled-components';

export const RegisterWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    width: 1400px;
    padding: 30px 0px;

    h1{
            color: grey;
            font-weight: 500;
            margin: 30px 0px;
    }
`;

export const RegisterForm = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

export const LeftRightWrapper = styled.div`
                display: flex;
                flex-direction: column;
                gap: 10px;
                flex: 5;


                label{
                    color: gray;
                    font-size: 18px;
                }

                input,select,textarea{
                    background: rgb(241, 245, 245);
                    border:none;
                    padding: 20px;
                }
                
                button{
                    border: none;
                    padding: 20px;
                    background-color: green;
                    color: white;
                    font-weight: 500;   
                    cursor: pointer;
                    font-size: 20px;
                }
                
                span{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
`;

// export const Checkbox = styled.input.attrs({type:"checkbox"})`
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   border: 3px solid #ccc;
//   appearance: none;
//   -webkit-appearance: none;
//   outline: none;
//   cursor: pointer;
//   display: grid;
//   place-content: center;
//   background-color: white;

//   &::after {
//     content: "";
//     width: 18px;
//     height: 18px;
//     border-radius: 50%;
//     background-color: red;
//     transform: scale(0);
//     transition: transform 0.15s ease-in-out;
    
//   }

//   &:checked::after {
//     transform: scale(1);
//   }
// `;


export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 3px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;

  display: grid;
  place-content: center;
  background-color: #fff;

  /* Soft default shadow */
  box-shadow:
    inset 0 0 0 rgba(0, 0, 0, 0),
    0 4px 10px rgba(0, 0, 0, 0.15);

  transition: 
    box-shadow 0.2s ease,
    transform 0.15s ease,
    border-color 0.2s ease;

  /* Inner red dot */
  &::after {
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: blue;
    transform: scale(0);
    transition: transform 0.15s ease-in-out;
  }

  /* Checked = bulging effect */
  &:checked {
    border-color: red;
    transform: scale(1.05);
    box-shadow:
      inset 0 2px 6px rgba(0, 0, 0, 0.2),
      0 6px 160px rgba(0, 17, 255, 0.35);
  }

  &:checked::after {
    transform: scale(1);
  }

  /* Click press effect */
  &:active {
    transform: scale(0.95);
    box-shadow:
      inset 0 4px 8px rgba(0, 0, 0, 0.25),
      0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;



// .register{
//     display: flex;
//     justify-content: center;

//     .container{
//         width: 1400px;
//         padding: 30px 0px;

//         h1{
//             color: grey;
//             font-weight: 500;
//             margin: 30px 0px;
//         }

//             form{
//                 display: flex;
//                 justify-content: space-between;
//                 gap: 50px;
//             }

//             .left,
//             .right{
//                 display: flex;
//                 flex-direction: column;
//                 gap: 10px;
//                 flex: 5;


//                 label{
//                     color: gray;
//                     font-size: 18px;
//                 }

//                 input,select,textarea{
//                     background: rgb(241, 245, 245);
//                     border:none;
//                     padding: 20px;
//                 }
                
//                 button{
//                     border: none;
//                     padding: 20px;
//                     background-color: green;
//                     color: white;
//                     font-weight: 500;   
//                     cursor: pointer;
//                     font-size: 20px;
//                 }
//             }

//         }
//     }
