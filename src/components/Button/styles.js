import styled from "styled-components";

export const Container = styled.button`
  width: 64px;
  height: 64px;

  background: ${({ theme }) => theme.COLORS.GRAY_900};

  border-radius: 50%;
  border: none;

  margin: auto;
`