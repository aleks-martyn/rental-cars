import { ModalInfo } from './ModalInfo';
import { OuterInfoWrap } from './Modal.styled';

export const ModalInfoWrap = ({ upperData, bottomData }) => (
  <OuterInfoWrap>
    <ModalInfo items={upperData} />

    <ModalInfo items={bottomData} />
  </OuterInfoWrap>
);
