import styled, { css } from 'styled-components';

export const Heading1 = css`
  font-size: 32px;
  line-height: 36px;
`;

export const Heading1Text = styled.p`
  ${Heading1};
  font-weight: ${({ weight }) => (weight ? weight : '500')};
  color: ${({ color }) => (color ? color : 'unset')};
`;

export const Heading2 = css`
  font-size: 28px;
  line-height: 32px;
`;

export const Heading2Text = styled.h2`
  ${Heading2}
  font-weight: ${({ weight }) => (weight ? weight : 'unset')};
  color: ${({ color }) => (color ? color : 'unset')};
`;

export const Heading3 = css`
  font-size: 20px;
  line-height: 24px;
`;

export const Heading3Text = styled.p`
  ${Heading3};
  font-weight: ${({ weight }) => (weight ? weight : '500')};
  color: ${({ color }) => (color ? color : 'unset')};
`;

export const BodyDefault = css`
  font-size: 16px;
  line-height: 24px;
  font-family: 'Hind Madurai';
`;

export const BodyDefaultText = styled.p`
  ${BodyDefault};
  font-weight: ${({ weight }) => (weight ? weight : 'unset')};
  color: ${({ color }) => (color ? color : 'unset')};
`;

export const BodySmall = css`
  font-size: 14px;
  line-height: 20px;
`;
export const BodySmallText = styled.p`
  ${BodySmall};
  font-weight: ${({ weight }) => (weight ? weight : 'unset')};
  color: ${({ color }) => (color ? color : 'unset')};
`;
