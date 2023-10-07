import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const StyledSection = styled.section`
  padding-top: 100px;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: var(--secondary-text-color);
`;

export const Select = styled.div`
  position: relative;
`;

export const SelectHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 224px;
  height: 48px;
  padding: 14px 89px 14px 18px;
  display: flex;
  align-items: center;
  border-radius: 14px;
  background-color: var(--select-color);
  cursor: pointer;

  &::after {
    content: ">";
    position: absolute;
    right: 14px;
  }
`;

export const SelectCurrent = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
`;

export const SelectIcon = styled(KeyboardArrowDownIcon)`
  width: 20px;
  height: 20px;
  margin-left: auto;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const setVisibility = props => (props.isToggleOn === 'true' ? 'block' : 'none');

export const SelectBody = styled.div`
  position: absolute;
  display: ${setVisibility};
  border: 1px solid grey;
  border-top: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 1;
`;

export const SelectItem = styled.div`
  cursor: pointer;
  padding: 8px;
  font-size: 18px;
  line-height: 1.5;

  &:hover {
    background-color: var(--button-active-color);
  }
`;
