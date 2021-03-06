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

import Loteamento from './assets/loteamento/interior/FOTO-1.png';
import Loteamentox2 from './assets/loteamento/interior/FOTO-1.png';
import Loteamento2 from './assets/loteamento/interior/FOTO-2.png';
import Loteamento2x2 from './assets/loteamento/interior/FOTO-2.png';
import Loteamento3 from './assets/loteamento/interior/FOTO-3.png';
import Loteamento3x2 from './assets/loteamento/interior/FOTO-3.png';
import Loteamento4 from './assets/loteamento/interior/FOTO-4.png';
import Loteamento4x2 from './assets/loteamento/interior/FOTO-4.png';
import Loteamento5 from './assets/loteamento/interior/FOTO-5.png';
import Loteamento5x2 from './assets/loteamento/interior/FOTO-5.png';
import Loteamento6 from './assets/loteamento/interior/FOTO-6.png';
import Loteamento6x2 from './assets/loteamento/interior/FOTO-6.png';
import Loteamento7 from './assets/loteamento/interior/FOTO-7.png';
import Loteamento7x2 from './assets/loteamento/interior/FOTO-7.png';
import Loteamento8 from './assets/loteamento/interior/FOTO-8.png';
import Loteamento8x2 from './assets/loteamento/interior/FOTO-8.png';
import Loteamento9 from './assets/loteamento/interior/folder3.jpg';
import Loteamento9x2 from './assets/loteamento/interior/folder3.jpg';

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
        label: 'In??cio',
      },
      {
        to: 'about',
        label: 'Sobre n??s',
      },
      {
        to: 'price',
        label: 'Caracter??sticas',
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
        to: 'support',
        label: 'Suporte',
      },
      {
        to: 'pricing',
        label: 'Pre??o',
      },
      {
        to: 'contact',
        label: 'Contato',
      },
    ],
    actions: [
      {
        href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Ol?? Gostaria de falar sobre o Residencial Village Real',
        label: 'Fale com nossos corretores',
      },
    ],
  },
  welcome: {
    title: textToMultiline(`VILLAGE REAL \n\n`),
    text: textToMultiline(`Inspirado na tranquilidade da natureza  e do verde, o GRUPO ALFA IM??VEIS   CONSTRU????ES projetou para  Manhua??u e Simon??sia um lugar para integrar a atmosfera de sua casa, com um ambiente incr??vel, conectado ??s suas emo????es e ?? sua mem??ria.
    Celebre a sua exclusividade! Imagine uma vida onde voc?? acorda todos os dias com uma vista linda, um clima ameno, e esse sentimento de conquista, de realiza????o num condom??nio que une a alma da cidade com o clima do campo. Perceba que n??o h?? fronteiras para os sonhos, nem limites para a imagina????o. 
    Festeje a vida! Conquiste seu Village! O Condom??nio de Alto Padr??o com o melhor custo benef??cio por metro quadrado da regi??o`),
  },
  footer: {
    section1: {
      text: `Village Real um lugar para integrar a atmosfera de sua casa, com um ambiente incr??vel, conectado ??s suas emo????es e ?? sua mem??ria.`,
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
      text: `Se precisar de ajuda n??o deixe de nos contactar temos uma equipe de especialistas pronto para atend??-lo!`,
    },
  },
  about: {
    title: 'Mais sobre o Village Real',
    text: textToMultiline(`O Village Real ?? um condom??nio de alto padr??o, seu para??so particular. Inspirado na tranquilidade da natureza e do verde, o GRUPO ALFA IM??VEIS CONSTRU????ES projetou para Manhua??u e Simon??sia um lugar para integrar a atmosfera de sua casa, com um ambiente incr??vel, conectado ??s suas emo????es e ?? sua mem??ria.`),
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
        title: 'Condi????es Especiais de Pagamento',
        // text:
        //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui. Curabitur consectetur eu risus at mollis.',
      },
      {
        id: 'feature3',
        IconProps: {
          icon: Paperclip,
          gradient: 'quaternary',
        },
        title: 'Documenta????o Regularizada',
        // text:
        //   'Aqui voc?? ir?? encontrar LOTES A PARTIR DE 1500 m?? e com toda a documeta????o regularizada.',
      },
    ],
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Ol?? Gostaria de falar sobre o Residencial Village Real',
      title: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Ol?? Gostaria de falar sobre o Residencial Village Real',
      title: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Ol?? Gostaria de falar sobre o Residencial Village Real',
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
        'Condi????es especiais de pr??-lan??amento entrada facilitada.',
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
      title: 'Aproveite Essa Oportunidade Incr??vel',
      text:
        'Um novo conceito de moradia, onde voc?? pode contemplar a beleza e tranquilidade da natureza, ?? o seu para??so particular! Venha e aproveite a oportunidade de pr??-lan??amento.',
      list: [
        // {
        //   title: 'PAISAGISMO MODERNO',
        //   //text: 'PAISAGISMO MODERNO',
        // },
        // {
        //   title: '??REA DE LAZER LUXUOSA',
        //   //text: '??REA DE LAZER LUXUOSA',
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
        //   title: '??REA GOURMET',
        //   //text: '??rea Gourmet',
        // },
        // {
        //   title: '??TIMA LOCALIZA????O',
        //   //text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel vehicula dui.',
        // },
      ],
    },
  ],
  screenshots: {
    //title: 'Imagens do Residencial',
    //title: 'SEU PARA??SO PARTICULAR',
    text:
       'SEU PARA??SO PARTICULAR, UM CONDOM??NIO DE ALTO PADR??O',
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
  imagemLoteamento: {
    //title: `??rea de Lazer`,
    // text:
    //    'SEU PARA??SO PARTICULAR, UM CONDOM??NIO DE ALTO PADR??O',
    images: [
      {
        src: Loteamento9,
        srcSet: `${Loteamento9} 1x, ${Loteamento9x2} 2x`,
        alt: 'Interior 9',
      },
      {
        src: Loteamento,
        srcSet: `${Loteamento} 1x, ${Loteamentox2} 2x`,
        alt: 'Interior 1',
      },
      {
        src: Loteamento2,
        srcSet: `${Loteamento2} 1x, ${Loteamento2x2} 2x`,
        alt: 'Interior 2',
      },
      {
        src: Loteamento3,
        srcSet: `${Loteamento3} 1x, ${Loteamento3x2} 2x`,
        alt: 'Interior 3',
      },
      {
        src: Loteamento4,
        srcSet: `${Loteamento4} 1x, ${Loteamento4x2} 2x`,
        alt: 'Interior 4',
      },
      {
        src: Loteamento5,
        srcSet: `${Loteamento5} 1x, ${Loteamento5x2} 2x`,
        alt: 'Interior 5',
      }, 
      {
        src: Loteamento6,
        srcSet: `${Loteamento6} 1x, ${Loteamento6x2} 2x`,
        alt: 'Interior 6',
      }, 
      {
        src: Loteamento7,
        srcSet: `${Loteamento7} 1x, ${Loteamento7x2} 2x`,
        alt: 'Interior 7',
      }, 
      {
        src: Loteamento8,
        srcSet: `${Loteamento8} 1x, ${Loteamento8x2} 2x`,
        alt: 'Interior 8',
      },  
           
    ],
  },
  clients: {
    title: 'Nossos clientes falam por n??s',
    //text: 'O que os clientes falam sobre n??s',
    comments: [
      {
        author: 'Ludmila Soares Cruz',
        text: `A primeira coisa que pensei ao conhecer o Residencial Village Real foi: eu quero viver aqui com meu marido e meus filhos. Da?? fomos conhecer as condi????es de pagamento e vimos que cabia direitinho no or??amento familiar. Constru??mos a casa e, desde que nos mudamos, nossa vida tamb??m mudou. Hoje somos muito mais felizes.`,
        AvatarProps: {
          src: female,
          srcSet: `${female} 1x, ${femalex2} 2x`,
        },
      },
      {
        author: 'Victor Alves Damasceno',
        text: `Minha mulher escolheu o Residencial Village Real pelo lugar. Ela se encantou com o loteamento. Realmente ?? um novo conceito em viver. E estar perto do centro fez toda diferen??a para ela. Quanto a mim, o que chamou a aten????o foi a oportunidade de investimento. Sem d??vida, em termos de retorno financeiro n??o h?? nada melhor.`,
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
    title: 'Caracter??sticas',
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
              text: 'Ol?? Ol?? Ol??',
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
              href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Ol?? Gostaria de falar sobre o Residencial Village Real',
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
              href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Ol?? Gostaria de falar sobre o Residencial Village Real',
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
              href: 'https://api.whatsapp.com/send?phone=5533999481932&text=Ol?? Gostaria de falar sobre o Residencial Village Real',
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
    inputPlaceholder: 'Seu endere??o de email',
  },
  copyright: '?? 2021 TonyBrand - Especialista em Marketing Imobili??rio.',
};
