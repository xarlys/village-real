import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Box from '@pagerland/common/src/components/Box';
import Container from '@pagerland/common/src/components/Container';
import Typography from '@pagerland/common/src/components/Typography';

import { Img, ImgSlider, MapaImg } from './styled.components';

import FotoMapa from '../../assets/mapa.png';
import data from '../../data';


import ReactPlayer from 'react-player'
//import video from './village-video.mp4';

const Contact = ({
  WrapperProps,
  CaptionProps,
  VideoProps,
  TitleProps,
  SliderProps,
  TextProps,
  ImgProps,
  ImgPropsMapa,
  name,
  title,
  text,
  images,
  ImgWrapperProps,
}) => {

  return(
    <>
  
    <Box {...WrapperProps} name={name}>
      <Container>
        <Box {...CaptionProps}>          
          <ReactPlayer width={'100%'} height={'100%'} style={{borderRadius: '420px'}} playing controls={false} loop={true} url={['./village-video.mp4']} volume={1} muted={false} {...VideoProps}/>
        </Box>
        
      </Container>
        
      <Fade duration={600}>

        <ImgSlider {...SliderProps} 
          autoPlaySpeed={5000}
          autoPlay
        >
          {slider => {
            return images.map((img, key) => (
              //console.log(img),
              <Img {...ImgProps} key={key} onClick={() => slider.current.slickGoTo(key)} {...img} />
            ));
          }}
        </ImgSlider>  
          
      </Fade>

      {/* <ReactPlayer controls={false} playing url={['./village-video.mp4']} muted={false} /> */}

      {/* <video src={video} /> */}
      {/* <Box {...ImgWrapperProps}>
        <Fade duration={600} delay={100} style={{ textAlign: 'center', alignItems:'center', alignContent:'center'}}>
          <MapaImg style={{textAlign: 'center', alignItems:'center', alignContent:'center'}} alt="Mapa do Loteamento" {...ImgPropsMapa} />
        </Fade>
      </Box>  */}
    </Box>
    </>
  );
}

Contact.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Caption props
   * @See @pagerland/common/src/components/Box
   */
  CaptionProps: PropTypes.object,

  VideoProps: PropTypes.object,
  /**
   * Props of slider component
   * @See @pagerland/common/src/components/Slider
   */
  SliderProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Single image / slide props
   * @See @pagerland/common/src/components/Img
   */
  ImgProps: PropTypes.object,
  /**
   * Title node of component
   */
  ImgPropsMapa: PropTypes.object,
  /**
   * Title node of component
   */
  title: PropTypes.node,
  /**
   * Main description
   */
  text: PropTypes.node,
  /**
   * List of images used for slides
   */
  images: PropTypes.array,
  /**
   * Props list for phone image wrapper
   * @See @pagerland/common/src/components/Box
   */
  ImgWrapperProps: PropTypes.object,
};

Contact.defaultProps = {
  WrapperProps: {
    py: {
      _: 30,
      lg: 0,
    },
  },
  CaptionProps: {
    textAlign: {
      _: 'left',
      lg: 'center',
    },
    mb: 40,
    maxWidth: 770,
    mx: 'auto',
  },
  VideoProps: {
    alignItens: {
      _: 'left',
      lg: 'center',
    },
    width: '100%',
    height: '100%',
    maxWidth: 410,
    mx: 'auto',  
    mb: 20,
    borderRadius: 80, 

  },
  TitleProps: {
    as: 'h2',
    variant: 'h1',
    mb: {
      _: 3,
      lg: 4,
    },
  },
  TextProps: {
    variant: 'body1',
    color: 'gray.1',
  },
  SliderProps: {
    options: {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      slidesToScroll: 1,
      play: true,
      autoPlay: true,
    },
  },
  ImgProps: {
    width: {
      _: '480px !important',
      lg: '660px !important',
    },
    mb: 40,
    mx: -20,
    borderRadius: 42,
  },
  ...data.imagemLoteamento,
  // ImgWrapperProps: {
  //   position: 'relative',
  //   zIndex: -1,
  //   mt: 10,
  //   mb: -60,
  //   // top: -0,
  //   //left: 335,
  //   ml: 420,
  // },
  // ImgPropsMapa: {
  //   src: FotoMapa,
  //   srcSet: `${FotoMapa} 1x, ${FotoMapa} 2x`,
  //   alt: 'Mapa do Loteamento',
  //   width: '60%',
  //   height: '80%',
  //   borderRadius: '60px',
  //   alignItens: 'center',
  //   //maxWidth:'80%',

  // },

};

export default Contact;
