import styled from '@emotion/styled';

export const Wrap = styled.div`
  padding-top: 100px;
  display: flex;
  gap: 18px;
  justify-content: space-around;
  width: 859px;
  height: 74px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputOuterWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Subtitle = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--secondary-text-color);
`;

export const InputWrap = styled.div`
  display: flex;
`;

export const FormBtn = styled.button`
  min-width: 136px;
  height: 48px;
  padding: 14px 44px;
  align-self: end;
  border: none;
  border-radius: 12px;
  text-align: center;
  color: var(--button-text-color);
  background-color: var(--accent-color);
  font-family: 'Manrope';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  transition: background-color var(--tra);

  :hover {
    background-color: var(--button-active-color);
  }

  :focus {
    outline: 2px solid var(--button-active-color);
  }
`;
