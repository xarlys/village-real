import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
//import Link from 'next/link';

import Box from '@pagerland/common/src/components/Box';
import Icon from '@pagerland/common/src/components/Icon';
import Grid from '@pagerland/common/src/components/Grid';
//import Link from '@pagerland/common/src/components/Link';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';
import Card from '@pagerland/common/src/components/Card';

import data from '../../data';
import Contact from '../Contact';
//import Button from '@pagerland/common/src/components/Button';

// import Folder from '@pagerland/cli/village/public/folder3.jpg';
// import { ButtonFolder, StyledLink } from './styled.components';

//const uriDownload = 'https://www.transfernow.net/dl/20210719eOWAiDcJ';
//const uriDownload = '/_next/static/images/folder3-3760a5e2196c0edc2593e9cdc7f582ce.jpg';
//const uriDownload = '@pagerland/cli/village/public/folder3.jpg';
//const uriDownloadPDF = '@pagerland/cli/village/public/folder.pdf';

const About = ({
  name,
  title,
  text,
  features,
  WrapperProps,
  CaptionProps,
  TitleProps,
  TextProps,
  FeaturesGridProps,
  CardProps,
}) => {
  // const [download, setDownload] = useState('');
  // const [count, setCount] = useState(0);
  return(
    <Box name={name} {...WrapperProps}>
    <Container style={{marginBottom: 100}}>
      <Box {...CaptionProps}>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
      </Box>

      <Contact name="contato" />
      <Grid {...FeaturesGridProps}>
        {features?.map((feature, key) => (
          <Fade bottom duration={600} key={feature.id} delay={key * 100}>
            <Card {...CardProps}>
              <Icon {...CardProps.IconProps} {...feature.IconProps} />
              <Typography {...CardProps.TitleProps}>{feature.title}</Typography>
              <Typography {...CardProps.TextProps}>{feature.text}</Typography>
            </Card>
          </Fade>
        ))}
         
         {/* <Link to={`https://localhost:3000`+Folder} href={Folder} target="_blank" download={Folder}>Download</Link> */}
         {/*<Button
          variant="primary" 
          style={{alignItens: 'center', textAlign: 'center'}} 
          onClick={() => {
            setDownload(uriDownload)
            setCount(old => old + 1)
          }}
          center
          >
            Baixe nosso folder
         </Button>
          {download && <iframe src={download } > </iframe> }  */}
         {/* {download && <a href={Folder} download={Folder} > </a> } */}
         {/* +'?c='+count style={{display: 'none'}} */}
      </Grid>
      
    </Container >
   
    {/* <StyledLink href={Folder}>{name}</StyledLink>
   
    <ButtonFolder href={Folder} download={Folder} >
      Olá    
    </ButtonFolder> */}
    {/* <Link underline='none' href={Folder} download={Folder} target="_blank" 
      style={{
        background: '#152144', padding: '38px 78px', fontSize: '32px', border: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#FFFFFF',
        borderRadius: '42px',
        alignItems: 'center',
        textAlign: 'center',
        // marginLeft: 0,
      }}            
      >
        Folder
    </Link> */}
    {/* <Link underline='none' href={Folder} download={Folder} target="_blank">
        Folder
    </Link> */}
   
  </Box>
  )
};

About.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title text
   */
  title: PropTypes.node,
  /**
   * Main content
   */
  text: PropTypes.node,
  /**
   * List of features
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Object with props for Icon component.
       * @See @pagerland/common/src/components/Icon
       */
      IconProps: PropTypes.object.isRequired,
      /**
       * Title of future
       */
      title: PropTypes.node.isRequired,
      /**
       * Description of future
       */
      text: PropTypes.node.isRequired,
    }),
  ),
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Caption wrapper props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main content text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Features component grid props
   * @See @pagerland/common/src/components/Grid
   */
  FeaturesGridProps: PropTypes.object,
  /**
   * Object with feature card specified props
   */
  CardProps: PropTypes.shape({
    /**
     * Title text props
     * @See @pagerland/common/src/components/Typography
     */
    TitleProps: PropTypes.object,
    /**
     * Object with props for Icon component.
     * @See @pagerland/common/src/components/Icon
     */
    IconProps: PropTypes.object,
    /**
     * Future description text props
     * @See @pagerland/common/src/components/Typography
     */
    TextProps: PropTypes.object,
  }),
};

About.defaultProps = {
  ...data.about,
  WrapperProps: {
    py: {
      _: 30,
      lg: 20,
    },
  },
  CaptionProps: {
    maxWidth: 770,
    mx: 'auto',
    textAlign: {
      _: 'left',
      md: 'center',
    },
    mb: {
      _: 4,
      lg: 4,
    },
  },
  TitleProps: {
    variant: 'h1',
    as: 'h2',
    mb: 3,
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
    ml: 10,
    textAlign: {
      md: 'justify',
    },
  },
  FeaturesGridProps: {
    my: 3,
    gridGap: '30px',
    gridTemplateColumns: {
      _: '1fr',
      lg: 'repeat(3, 1fr)',
    },
  },
  CardProps: {
    textAlign: 'center',
    IconProps: {
      fontSize: 48,
    },
    TitleProps: {
      as: 'h4',
      variant: 'h4',
      mt: 4,
      mb: 3,
    },
    TextProps: {
      color: 'gray.1',
    },
  },
};

export default About;
