import styled from "styled-components";

export const InputStyled = styled.input`
  color: var(pink);
  padding: 5px;
  width: 300px;
  font-size: 16px;
  border: ${({ isError }) => (isError ? "1px solid ##ff0303" : "none")};
  border-bottom: 5px solid var(--grey);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const InputLabel = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  width: 50%;
`;

export const ErrorMessageS = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #ff0303;
  font-size: 15px;
`;
