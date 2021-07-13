import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

//import logo from '../../assets/Logo.svg';
import logo from '../../assets/logo.png';

const Img = styled.img`
  display: block;
  ${base};
`;

const Logo = props => <Img src={logo} width={200} height={70} alt="Village Real" {...props} />;

export default Logo;
