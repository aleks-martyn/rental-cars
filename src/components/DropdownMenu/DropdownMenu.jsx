import { CustomSelect } from 'components/CustomSelect';
import { prices } from 'constants';
import { Wrap } from './DropdownMenu.styled';

export const DropdownMenu = ({ brands }) => {
  return (
    <Wrap>
      <CustomSelect
        title={'Car brand'}
        text={'Enter the text'}
        items={brands}
      />

      <CustomSelect title={'Price / 1 hour'} text={'To $'} items={prices} />
    </Wrap>
  );
};
