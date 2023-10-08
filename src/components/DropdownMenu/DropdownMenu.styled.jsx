import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const StyledSection = styled.section`
  padding-top: 100px;
`;

export const Wrap = styled.div`
  display: flex;
  width: 224px;
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
  display: flex;
  justify-content: space-between;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: var(--select-color);
  cursor: pointer;
`;

export const SelectCurrent = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
`;

export const SelectArrowDownIcon = styled(KeyboardArrowDownIcon)`
  width: 20px;
  height: 20px;
`;

export const SelectArrowUpIcon = styled(KeyboardArrowUpIcon)`
  width: 20px;
  height: 20px;
`;

const setVisibility = props => (props.isToggleOn === 'true' ? 'block' : 'none');

export const SelectBody = styled.div`
  position: absolute;
  display: ${setVisibility};
  border: 1px solid var(--select-border-color);
  border-radius: 14px;
  left: 0;
  right: 0;
  top: 110%;
  z-index: 1;
  background-color: var(--background-color);
  box-shadow: 0 4px 36px var(--select-shadow-color);
`;

const setTextColor = props =>
  props.name === props.currentValue
    ? 'var(--primary-text-color)'
    : 'var(--select-text-color)';

export const SelectItem = styled.div`
  cursor: pointer;
  padding: 8px 14px;
  color: ${setTextColor};
  transition: color var(--tra);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;

  &:hover,
  &:focus {
    color: var(--primary-text-color);
  }
`;
