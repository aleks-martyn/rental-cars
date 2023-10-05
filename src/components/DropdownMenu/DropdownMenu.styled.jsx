import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Select = styled.div`
  position: relative;
  margin: 0 auto;
  width: 250px;
`;

export const SelectHeader = styled.div`
  display: flex;
  border: 1px solid grey;
  cursor: pointer;
`;

export const SelectCurrent = styled.span`
  padding: 8px;
  font-size: 18px;
  line-height: 1.5;
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

export const SelectBody = styled.div`
  position: absolute;
  display: block;
  border: 1px solid grey;
  border-top: 0;
  left: 0;
  right: 0;
  top: 100%;
`;

export const SelectItem = styled.div`
  cursor: pointer;
  padding: 8px;
  font-size: 18px;
  line-height: 1.5;
`;
