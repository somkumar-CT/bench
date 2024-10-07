import { ReactNode } from 'react';

type HeroProps = {
  children: ReactNode;
};

type HeroItemProps = {
  children: ReactNode;
};

const HeroTitle = ({ children }: HeroItemProps) => {
  return <h1 className='text-5xl my-6'>{children}</h1>;
};

const HeroSubTitle = ({ children }: HeroItemProps) => {
  return <p className='text-lg mb-12'>{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>;
};

Hero.Title = HeroTitle;
Hero.SubTitle = HeroSubTitle;
