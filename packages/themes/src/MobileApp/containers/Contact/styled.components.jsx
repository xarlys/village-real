import styled from 'styled-components';
import { transition } from '../../styles';

import Slider from '@pagerland/common/src/components/Slider';
import BaseImg from '@pagerland/common/src/components/Img';

import Mapa from '@pagerland/common/src/components/Img';


export const ImgSlider = styled(Slider)`
  .slick-list {
    margin-bottom: -50px;
  }
`;

export const Img = styled(BaseImg)`
  position: relative;
  cursor: pointer;
  box-shadow: 0 20px 40px rgba(195, 107, 132, 0.1);
  opacity: 0.5;
  transition: ${transition.all};
  transform: scale(0.8);

  .slick-active & {
    z-index: 2;
    opacity: 1;
    transform: scale(1);
  }
`;


export const MapaImg = styled(Mapa)`
  pointer-events: none;
  user-select: none;
`;
