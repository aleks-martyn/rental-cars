import { InfoWrap, InfoText } from './Modal.styled';

export const ModalInfo = ({ items }) => (
  <InfoWrap>
    {items.map((item, index) => (
      <InfoText key={index}>{item}</InfoText>
    ))}
  </InfoWrap>
);
