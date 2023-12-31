import { InputInnerWrap, StyledLabel, StyledInput } from './FilterInput.styled';

export const FilterInput = ({ id, label, currentValue, onFilterChange }) => (
  <InputInnerWrap>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>

    <StyledInput
      type="number"
      min={0}
      id={id}
      value={currentValue}
      onChange={e => {
        const { id, value } = e.target;
        onFilterChange(id, value);
      }}
    />
  </InputInnerWrap>
);
