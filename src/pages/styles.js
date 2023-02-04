import styled from "styled-components";

export const Container = styled.div`
  .calculator {
    margin: 180px auto;
    width: 356px;
    height: 566px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    border-radius: 48px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  
    grid-template-areas:
      'screen'
      'button'
    ;
  }

  .screen {
    padding: 54px 34px 26px;
    font-weight: 400;
    font-size: 24px;
    grid-area: 'screen';
  }

  .screen-top {
    display: flex;
    justify-content: end;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    margin-bottom: 8px;
  }

  .screen-bottom {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }

  .screen-bottom span {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .buttons {
    margin: 0 32px;
    grid-area: 'buttons';
    grid-template-columns: 64px 64px 64px 64px;
    display: grid;
    gap: 12px;
  }

  .operator {
    background-color: ${({ theme }) => theme.COLORS.VIOLET_900};
  }

  .equal {
    background-color: ${({ theme })=> theme.COLORS.VIOLET_100}
  }




`