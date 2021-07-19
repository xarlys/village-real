
export interface ImageCarouselProps {
  cardsHome: {    
    id: number;
    src: string;
    title: string;
  }[],
}

const imageCards: ImageCarouselProps = {
  cardsHome: [
    {
      id: 1,
      src: '/images/cardsHome/auto1.png',
      title: 'Audi',      
    },
    {
      id: 2,
      src: '/images/cardsHome/auto2.png',
      title: 'Audi',      
    },
    {
      id: 3,
      src: '/images/cardsHome/auto5.png',
      title: 'Audi',      
    },
    {
      id: 4,
      src: '/images/cardsHome/auto4.png',
      title: 'Audi',      
    },
    {
      id: 5,
      src: '/images/cardsHome/Volvo.png',
      title: 'Audi',      
    },
    {
      id: 6,
      src: '/images/cardsHome/Lambo.png',
      title: 'Audi',      
    }
  ],
};
export default imageCards;
