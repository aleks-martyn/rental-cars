import styled from "@emotion/styled";

export const CatalogBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: 136px;
  height: 48px;
  padding: 14px 44px;
  border: none;
  border-radius: 12px;
  text-align: center;
  color: var(--button-text-color);
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  transition: background-color var(--tra);

  &:hover {
    background-color: var(--button-active-color);
  }
`;
