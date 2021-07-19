import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Sticky from 'react-sticky-el';
import absoluteUrl from 'next-absolute-url';

// import Carousel from 'react-multi-carousel';
// import '@pagerland/cli/village/node_modules/react-multi-carousel/lib/styles.css';
//import 'react-multi-carousel/lib/styles.css';
//import imageCards from '@pagerland/cli/village/packages/themes/src/MobileApp/containers/Carousel/imageCards';


import Theme, { theme } from '@pagerland/themes/src/MobileApp';
import {
  Navbar,
  Copyright,
  Footer,
  Welcome,
  About,
  Features,
  Clients,
  Pricing,
  Newsletter, 
  Screenshots,
  ImagemLoteamento,
  Contact
} from '@pagerland/themes/src/MobileApp/containers';
import Feature from '@pagerland/themes/src/MobileApp/containers/Features/Feature';
import Liquid from '@pagerland/themes/src/MobileApp/components/Liquids/C';

import data from '@pagerland/themes/src/MobileApp/data';

import preview from '@pagerland/themes/src/MobileApp/assets/preview.png';
// import phoneImg from '@pagerland/themes/src/MobileApp/assets/Phones-B.png';
// import phoneImg2x from '@pagerland/themes/src/MobileApp/assets/Phones-B@2x.png';
import phoneImg from '@pagerland/themes/src/MobileApp/assets/loteamento/elemento-grafico/Prancheta-2.png';
import phoneImg2x from '@pagerland/themes/src/MobileApp/assets/loteamento/elemento-grafico/Prancheta-2.png';

import SEO from '../components/SEO';



const Landing1 = ({ url }) => (
  
  <Theme>
    <Head>
      <link href={theme.typography.googleFont} rel="stylesheet" />
      <meta name="theme-color" content={theme.colors.primary} />
      <meta property="og:image" content={`${url}${preview}`} />
    </Head>
    <SEO title="Village Real" />

    <Sticky style={{ zIndex: 999, position: 'relative' }}>
      <Navbar
        links={[
          {
            to: '',
            label: 'Início',
          },
          {
            to: 'about',
            label: 'Sobre',
          },          
          {
            to: 'screens',
            label: 'Galeria',
          },
          {
            to: 'clients',
            label: 'Nossos Clientes',
          },
          {
            to: 'pricing',
            label: 'Características',
          },
          {
            to: 'newsletter',
            label: 'Novidades',
          },
          // {
          //   to: 'pricing',
          //   label: 'Pricing',
          // },
          
        ]}
      />
    </Sticky>

    <Welcome
      name=""
      PhoneImgProps={{
        ...Welcome.defaultProps.PhoneImgProps,
        src: phoneImg,
        srcSet: `${phoneImg} 1x, ${phoneImg2x} 2x`,
        width: '80.8622754491%',
        left: '20.8622754491%',
        top: '2.4527363184%',
        //bottom: '-60%'
      }}
      WrapperProps={{
        overflow: 'hidden',
        marginBottom: {
          _: -110,
          lg: -110,
        },
      }}
      LiquidComponent={Liquid}
      LiquidProps={{
        ...Welcome.defaultProps.LiquidProps,
        width: '122.3053892216%',
        left: 0,
        top: -20,
      }}
    />
    <About
      name="about"
      CardProps={{ ...About.defaultProps.CardProps, background: 'none', p: 0, boxShadow: 'none' }}
      FeaturesGridProps={{
        ...About.defaultProps.FeaturesGridProps,
        maxWidth: 1110,
        mx: 'auto',
        gridGap: '90px',
      }}
    />
   

    {/* <ImagemLoteamento />      */}
    {/* <CarouselImage name="carousel" /> */}

    <Features
      name="features"
      features={[
        {
          feature: data.features[3],
          chunkLength: 3,
          GridProps: {
            gridTemplateAreas: {
              _: '"caption" "photo" "features" "additional-features"',
              lg: '"caption caption caption" "features photo additional-features"',
            },
            gridColumnGap: '30px',
            gridRowGap: '50px',
            gridTemplateColumns: {
              _: '1fr',
              lg: '1fr 375px 1fr',
            },
          },
          CaptionProps: {
            ...Feature.defaultProps.CaptionProps,
            maxWidth: '790px',
            justifySelf: 'center',
            textAlign: 'center',
          },
          TextProps: {
            variant: 'body1',
            color: 'gray.1',
          },
          ListProps: {
            gridArea: 'features',
            alignSelf: 'center',
            textAlign: {
              _: 'left',
              lg: 'right',
            },
          },
          AdditionalListProps: {
            gridArea: 'additional-features',
            textAlign: 'left',
          },
        },
        // {
        //   ...Features.defaultProps.features[2],
        //   CaptionProps: {
        //     order: 1,
        //     mb: 80,
        //     flex: {
        //       _: '0 0 1',
        //       lg: '0 0 340px',
        //     },
        //   },
        //   GridProps: {
        //     gridTemplateAreas: {
        //       _: '"caption" "features"',
        //       lg: '"features caption"',
        //     },
        //     gridColumnGap: '60px',
        //     gridTemplateColumns: {
        //       _: '1fr',
        //       lg: 'auto 340px',
        //     },
        //     alignItems: 'center',
        //   },
        // },
      ]}
    />
    <Screenshots name="screens" />
    <Clients
      name="clients"
      LiquidProps={{
        display: 'none',
      }}
      InnerProps={{ ...Clients.defaultProps.InnerProps, ml: 'auto', mr: 'auto', my: 0 }}
      TitleProps={{
        ...Clients.defaultProps.TitleProps,
        textAlign: 'center',
        mb: {
          _: 0,
          lg: 50,
        },
      }}
      AvatarProps={{
        ...Clients.defaultProps.AvatarProps,
        fancy: true,
        mt: {
          _: 60,
          lg: -3,
        },
        ml: {
          _: 'auto',
          lg: 0,
        },
        mr: {
          _: 'auto',
          lg: 84,
        },
      }}
      SlideProps={{ ...Clients.defaultProps.SlideProps, pb: 4, pt: 60, mx: 'auto', maxWidth: 970 }}
    />
    <Pricing
      name="pricing"
      useRadios
      text="Condições especiais de pré-lançamento entrada facilitada."
      SwitchWrapperProps={{
        ...Pricing.defaultProps.SwitchWrapperProps,
        justifyContent: 'flex-start',
      }}
      prices={{
        ...data.pricing.prices,
        sections: [
          {
            //title: 'Infraestrutura',
            price: {
              a: 'Estrutura',              
            },
            features: [
              {
                text: 'Portaria 24 horas',
                check: true,
              },
              {
                text: 'Rede Pluvial',
                check: true,
              },
              {
                text: 'Água Potável',
                check: true,
              },
              {
                text: 'Energia e Iluminação de Led',
                check: true,
              },
              {
                text: 'Ruas totalmente asfaltadas',
                check: false,
              },
            ],
            button: {
              text: 'Saiba Mais',
              ButtonProps: {
                as: 'a',
                href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
              },
            },
          },
        
          {
            //title: 'Beginner',
            price: {
              a: 'Vantagens',              
            },
            features: [
              {
                text: 'Paisagismo Moderno',
                check: true,
              },
              {
                text: 'Piscina Adulto e Infantil',
                check: true,
              },
              {
                text: 'Sauna',
                check: true,
              },
              {
                text: 'Academia',
                check: true,
              },
              {
                text: 'Área Gourmet',
                check: false,
              },
            ],
            button: {
              text: 'Venha Conhecer',
              ButtonProps: {
                as: 'a',
                href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
              },
            },
          },
        ],
      }}
      sections={[...Pricing.defaultProps.sections.slice(1, 3)]}
    />

    <Newsletter name="newsletter" />
    <Footer />
    <Copyright />
  </Theme>
);

Landing1.propTypes = {
  url: PropTypes.string,
};

Landing1.defaultProps = {
  url: 'https://condominiovillagereal.com.br/',
  //https://pager.land/next/
};

export default Landing1;
