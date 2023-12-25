import { ModalCondition } from './ModalCondition';
import { ConditionsInnerWrap } from './Modal.styled';

export const ModalConditionsWrap = ({ items }) => (
  <ConditionsInnerWrap>
    {items.map(({ name, value }, index) => (
      <ModalCondition key={index} name={name} value={value} />
    ))}
  </ConditionsInnerWrap>
);
