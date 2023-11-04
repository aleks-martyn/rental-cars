import styled from '@emotion/styled';

export const InputInnerWrap = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
`;

const borderRadius = id => (id === 'min' ? '14px 0 0 14px' : '0 14px 14px 0');

const borderRightColor = id =>
  id === 'min' ? 'var(--input-border-color)' : 'none';

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 160px;
  height: 48px;
  padding: 14px 18px;
  padding-left: 60px;
  border: none;
  border-right: 1px solid ${({ id }) => borderRightColor(id)};
  border-radius: ${({ id }) => borderRadius(id)};
  background-color: var(--select-color);
  color: var(--primary-text-color);
  outline-color: var(--input-border-color);
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
`;
