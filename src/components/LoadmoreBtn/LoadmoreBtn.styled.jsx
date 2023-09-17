import styled from "@emotion/styled";

export const StyledLoadmoreBtn = styled.button`
  display: block;
  width: 100px;
  height: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  border: none;
  border-radius: 12px;
  text-align: center;
  text-decoration: underline;
  color: var(--accent-color);
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  transition: color var(--tra);

  &:hover {
    color: var(--button-active-color);
  }
`;
