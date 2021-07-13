import * as Yup from 'yup';

import MapMarker from '@pagerland/icons/src/line/MapMarker';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import Dna from '@pagerland/icons/src/line/Dna';
import Home from '@pagerland/icons/src/line/Home';
import Paperclip from '@pagerland/icons/src/line/Paperclip';
import MoneyWithdraw from '@pagerland/icons/src/line/MoneyWithdraw';
import Atom from '@pagerland/icons/src/line/Atom';
import CheckCircle from '@pagerland/icons/src/line/CheckCircle';
import Gift from '@pagerland/icons/src/line/Gift';
import Coffee from '@pagerland/icons/src/line/Coffee';
import Medal from '@pagerland/icons/src/line/Medal';
import LightbulbAlt from '@pagerland/icons/src/line/LightbulbAlt';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import firstFuture from './assets/frist-feature.svg';
import secondFuture from './assets/second-feature.svg';
// import thirdFuture from './assets/third-feature.svg';
import thirdFuture from './assets/loteamento/elemento-grafico/Prancheta-1.png';

// import Phone1 from './assets/screenshots/Phone-1.png';
// import Phone1x2 from './assets/screenshots/Phone-1@2x.png';
import Phone1 from './assets/loteamento/mapas-local/foto0.png';
import Phone1x2 from './assets/loteamento/mapas-local/foto0.png';
import Phone2 from './assets/loteamento/mapas-local/foto1.png';
import Phone2x2 from './assets/loteamento/mapas-local/foto1.png';
import Phone3 from './assets/loteamento/mapas-local/foto3.png';
import Phone3x2 from './assets/loteamento/mapas-local/foto3.png';
import Phone4 from './assets/loteamento/mapas-local/foto4.png';
import Phone4x2 from './assets/loteamento/mapas-local/foto4.png';
import Phone5 from './assets/loteamento/mapas-local/foto2.png';
import Phone5x2 from './assets/loteamento/mapas-local/foto2.png';
// import Phone6 from './assets/screenshots/Phone-6.png';
// import Phone6x2 from './assets/screenshots/Phone-6@2x.png';

import male from './assets/clients/photo-male.jpg';
import malex2 from './assets/clients/photo-male@2x.jpg';
import female from './assets/clients/photo-female.jpg';
import femalex2 from './assets/clients/photo-female@2x.jpg';

export default {
  title: 'Village Real',
  navbar: {
    links: [
      {
        to: '',
        label: 'Início',
      },
      {
        to: 'about',
        label: 'Sobre nós',
      },
      {
        to: 'price',
        label: 'Características',
      },
      {
        to: 'screens',
        label: 'Galeria',
      },
      {
        to: 'clients',
        label: 'Prova Social',
      },
      {
        to: 'support',
        label: 'Suporte',
      },
      {
        to: 'pricing',
        label: 'Preço',
      },
      {
        to: 'contact',
        label: 'Contato',
      },
    ],
    actions: [
      {
        href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
        label: 'Fale com nossos corretores',
      },
    ],
  },
  welcome: {
    title: textToMultiline(`VILLAGE REAL \n\n`),
    text: `Um Condomínio de Alto Padrão. Inspirado na tranquilidade da natureza e do verde, o GRUPO ALFA IMÓVEIS CONSTRUÇÕES projetou para Manhuaçu e Simonésia.`,
  },
  footer: {
    section1: {
      text: `Village Real um lugar para integrar a atmosfera de sua casa, com um ambiente incrível, conectado às suas emoções e à sua memória.`,
    },
    contact: {
      title: 'Contato',
      sections: [
        {
          icon: MapMarker,          
          text: textToMultiline(`Governador Valadares\nMG, Brasil`),
          //text: textToMultiline(`9207 Lakeshore Rd\nShreveport, Rhode Island\n98563 United States`),
        },
        {
          icon: Phone,
          text: '(33) 99948-1932',
        },
        {
          icon: Envelope,
          text: 'contato@villagereal.com.br',
        },
      ],
    },
    section3: {
      title: 'Suporte & Downloads',
      text: `Se precisar de ajuda não deixe de nos contactar temos uma equipe de especialistas pronto para atendê-lo!`,
    },
  },
  about: {
    title: 'Mais Sobre o Village Real?',
    text: `O Village Real é um condomínio de alto padrão, seu paraíso particular. Inspirado na tranquilidade da natureza e do verde, o GRUPO ALFA IMÓVEIS CONSTRUÇÕES projetou para Manhuaçu e Simonésia um lugar para integrar a atmosfera de sua casa, com um ambiente incrível, conectado às suas emoções e à sua memória.`,
    features: [
      {
        id: 'feature1',
        IconProps: {
          icon: Home,
          gradient: 'tertiary',
        },
        title: 'Infraestrutura completa',
        // text:
        //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis.',
      },
      {
        id: 'feature2',
        IconProps: {
          icon: MoneyWithdraw,
          gradient: 'primary',
        },
        title: 'Condições Especiais de Pagamento',
        // text:
        //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis.',
      },
      {
        id: 'feature3',
        IconProps: {
          icon: Paperclip,
          gradient: 'quaternary',
        },
        title: 'Documentação Regularizada',
        // text:
        //   'Aqui você irá encontrar LOTES A PARTIR DE 1500 m² e com toda a documetação regularizada.',
      },
    ],
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
      title: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
      title: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
      title: 'YouTube',
    },
  ],
  features: [
    {
      ImageProps: {
        src: firstFuture,
      },
      title: 'First feature',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.',
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      ImageProps: {
        src: secondFuture,
      },
      title: 'Second feature',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis. Vivamus iaculis vehicula fermentum.',
      list: [
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: CheckCircle,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      title: 'Ofertas Especiais',
      text:
        'Condições especiais de pré-lançamento entrada facilitada.',
      list: [
        {
          IconProps: {
            icon: Gift,
            gradient: 'primary',
          },
          title: 'Features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: Coffee,
            gradient: 'tertiary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: Medal,
            gradient: 'secondary',
          },
          title: 'Another features subheading',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
        {
          IconProps: {
            icon: LightbulbAlt,
            gradient: 'quaternary',
          },
          title: 'And just one more',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        },
      ],
    },
    {
      ImageProps: {
        src: thirdFuture,
      },
      title: 'Aproveite Essa Oportunidade Incrível',
      text:
        'Um novo conceito de moradia, onde você pode contemplar a beleza e tranquilidade da natureza, é o seu paraíso particular! Venha e aproveite a oportunidade de pré-lançamento.',
      list: [
        // {
        //   title: 'PAISAGISMO MODERNO',
        //   //text: 'PAISAGISMO MODERNO',
        // },
        // {
        //   title: 'ÁREA DE LAZER LUXUOSA',
        //   //text: 'ÁREA DE LAZER LUXUOSA',
        // },
        // {
        //   title: 'PISCINA ADULTO E INFANTIL',
        //   //text: 'PISCINA ADULTO E INFANTIL',
        // },
        // {
        //   title: 'SAUNA E ACADEMIA',
        //   //text: 'Sauna e Academia',
        // },
        // {
        //   title: 'ÁREA GOURMET',
        //   //text: 'Área Gourmet',
        // },
        // {
        //   title: 'ÓTIMA LOCALIZAÇÃO',
        //   //text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        // },
      ],
    },
  ],
  screenshots: {
    title: 'Imagens do Residencial',
    text:
      'SEU PARAÍSO PARTICULAR, UM CONDOMÍNIO DE ALTO PADRÃO',
    images: [
      {
        src: Phone1,
        srcSet: `${Phone1} 1x, ${Phone1x2} 2x`,
        alt: 'Phone 1',
      },
      {
        src: Phone2,
        srcSet: `${Phone2} 1x, ${Phone2x2} 2x`,
        alt: 'Phone 2',
      },
      {
        src: Phone3,
        srcSet: `${Phone3} 1x, ${Phone3x2} 2x`,
        alt: 'Phone 3',
      },
      {
        src: Phone4,
        srcSet: `${Phone4} 1x, ${Phone4x2} 2x`,
        alt: 'Phone 4',
      },
      {
        src: Phone5,
        srcSet: `${Phone5} 1x, ${Phone5x2} 2x`,
        alt: 'Phone 5',
      },      
    ],
  },
  clients: {
    title: 'Prova Social',
    text: 'O que os clientes falam sobre nós?',
    comments: [
      {
        author: 'Ludmila Soares Cruz',
        text: `A primeira coisa que pensei ao conhecer o Residencial Village Real foi: eu quero viver aqui com meu marido e meus filhos. Daí fomos conhecer as condições de pagamento e vimos que cabia direitinho no orçamento familiar. Construímos a casa e, desde que nos mudamos, nossa vida também mudou. Hoje somos muito mais felizes.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
      {
        author: 'Victor Alves Damasceno',
        text: `Minha mulher escolheu o Residencial Village Real pelo lugar. Ela se encantou com o loteamento. Realmente é um novo conceito em viver. E estar perto do centro fez toda diferença para ela. Quanto a mim, o que chamou a atenção foi a oportunidade de investimento. Sem dúvida, em termos de retorno financeiro não há nada melhor.`,
        AvatarProps: {
          src: male,
          srcSet: `${male} 1x, ${malex2} 2x`,          
        },
      },
    ],
  },
  faq: {
    title: 'Do you have any questions?',
    text:
      'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
    options: [
      {
        title: 'Cras quis dolor auctor mi varius tincidunt?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Mauris accumsan dolor et elementum dapibus?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Phasellus sollicitudin neque a odio varius, condimentum ultrices risus molestie?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Pellentesque fringilla non dolor ut convallis?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
      {
        title: 'Integer imperdiet venenatis orci, ac dictum libero semper sit amet?',
        text:
          'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
      },
    ],
  },
  pricing: {
    title: 'Características',
    prices: {
      currency: 'BR',
      types: {
        a: 'Monthly',
        b: 'Annually',
      },
      sections: [
        {
          title: 'Beginner',
          price: {
            a: '$0',
            b: '$0',
          },
          features: [
            {
              text: 'Olá Olá Olá',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: false,
            },
            {
              text: 'Nullam vitae tortor',
              check: false,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Choose beginner',
            ButtonProps: {
              as: 'a',
              href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
            },
          },
        },
        {
          title: 'Advanced',
          price: {
            a: '$12',
            b: '$120',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: false,
            },
            {
              text: 'Fusce quis vestibulum',
              check: false,
            },
          ],
          button: {
            text: 'Choose advanced',
            ButtonProps: {
              as: 'a',
              href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
            },
          },
        },
        {
          title: 'Expert',
          price: {
            a: '$24',
            b: '$240',
          },
          features: [
            {
              text: 'Ut commodo suscipit',
              check: true,
            },
            {
              text: 'Mauris congue viverra',
              check: true,
            },
            {
              text: 'Nunc non orci ut mi',
              check: true,
            },
            {
              text: 'Nullam vitae tortor',
              check: true,
            },
            {
              text: 'Lorem ipsum dolor sit',
              check: true,
            },
            {
              text: 'Fusce quis vestibulum',
              check: true,
            },
          ],
          button: {
            text: 'Choose expert',
            ButtonProps: {
              as: 'a',
              href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Olá Gostaria de falar sobre o Residencial Village Real',
            },
          },
        },
      ],
    },
  },
  contact: {
    title: 'Contato',
    text:
      'Ut commodo suscipit neque vitae suscipit. Mauris congue viverra dolor, vel lobortis elit venenatis vel. Nunc non orci ut mi semper aliquet. Nullam vitae tortor faucibus, vehicula lorem in, convallis mi.',
    sendButtonText: 'Send message',
    form: {
      validationSchema: Yup.object({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        message: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'firstName',
          placeholder: 'Primeiro Nome',
          initialValue: '',
        },
        {
          name: 'email',
          placeholder: 'E-mail',
          type: 'email',
          initialValue: '',
        },
        {
          name: 'message',
          placeholder: 'Mensagem',
          multiline: true,
          initialValue: '',
        },
      ],
    },
  },
  newsletter: {
    title: 'Fique Sempre Atualizado',
    text: 'Assine nosso boletim informativo e receba as novidades e as melhores ofertas!',
    buttonText: 'Inscrever-se',
    inputPlaceholder: 'Seu endereço de email',
  },
  copyright: '© 2021 TonyBrand - Especialista em Marketing Imobiliário.',
};
