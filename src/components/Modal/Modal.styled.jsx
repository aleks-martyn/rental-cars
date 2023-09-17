import styled from "@emotion/styled";
import { Button } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWin = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 541px;
  min-height: 752px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--background-color);
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;
`;

export const ModalInnerWrap = styled.div`
  margin-bottom: 20px;
`;

export const BrandName = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`;

export const ModelName = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: var(--accent-color);
`;

export const AddDataWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OtherDataWrap = styled.div`
  display: flex;
  gap: 6px;
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--info-text-color);
`;

export const Description = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
`;

export const Subtitle = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
`;

export const ConditionsTextWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-width: 86px;
  height: 32px;
  padding: 7px 14px;
  background-color: var(--conditions-bg-color);
`;

export const ConditionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ConditionsInnerWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const ConditionsText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--conditions-text-color);
`;

export const ConditionsAccent = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--accent-color);
`;

export const RentalCarLink = styled.a`
  box-sizing: border-box;
  display: block;
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  text-align: left;
  text-decoration: none;
  color: var(--button-text-color);
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  transition: background-color var(--tra);

  &:hover {
    background-color: var(--button-active-color);
  }
`;

export const CloseBtn = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  min-width: 24px;
  height: 24px;
  padding: 0;
  color: var(--primary-text-color);
  }
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
  width: 18px;
  height: 18px;
  fill: currentColor;
`;
