import {
  ConditionsTextWrap,
  ConditionsText,
  ConditionsAccent,
} from './Modal.styled';

export const ModalCondition = ({ name = null, value }) => (
  <ConditionsTextWrap>
    {name ? (
      <ConditionsText>
        {name}: <ConditionsAccent>{value}</ConditionsAccent>
      </ConditionsText>
    ) : (
      <ConditionsText>{value}</ConditionsText>
    )}
  </ConditionsTextWrap>
);
