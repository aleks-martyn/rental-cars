import { CustomSelect } from 'components/CustomSelect';
import { FilterInput } from 'components/FilterInput';
import { prices } from 'constants';
import {
  Wrap,
  InputOuterWrap,
  Subtitle,
  InputWrap,
  FormBtn,
} from './DropdownMenu.styled';

export const DropdownMenu = ({
  brands,
  onFilterChange,
  onFilterReset,
  selectedBrand,
  selectedPrice,
  minMileage,
  maxMileage,
}) => (
  <Wrap>
    <CustomSelect
      title="Car brand"
      id="brand"
      items={brands}
      onValueChange={onFilterChange}
      currentValue={selectedBrand}
    />

    <CustomSelect
      title="Price / 1 hour"
      id="price"
      items={prices}
      onValueChange={onFilterChange}
      currentValue={selectedPrice}
    />

    <InputOuterWrap>
      <Subtitle>Car mileage / km</Subtitle>

      <InputWrap>
        <FilterInput
          id="min"
          label="From"
          currentValue={minMileage}
          onFilterChange={onFilterChange}
        />

        <FilterInput
          id="max"
          label="To"
          currentValue={maxMileage}
          onFilterChange={onFilterChange}
        />
      </InputWrap>
    </InputOuterWrap>

    <FormBtn type="button" onClick={onFilterReset}>
      Reset
    </FormBtn>
  </Wrap>
);
