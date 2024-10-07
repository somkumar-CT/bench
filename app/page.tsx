import Image from 'next/image';
import { Container } from '../components/container';
import { Hero } from '../components/hero';

export default function Home() {
  return (
    <div>
      <main className='text pt-navigation-height'>
        <Container>
          <Hero>
            <Hero.Title>
              Linear is a better way <br /> to build products.
            </Hero.Title>
            <Hero.SubTitle>
              Meet the new standard for modern software development. <br />
              Streamline issues, sprints, and product roadmaps.
            </Hero.SubTitle>
            <Image
              src='/images/hero.webp'
              alt='Hero image'
              className='w-full'
              height={0}
              width={0}
              unoptimized
            />
          </Hero>
        </Container>
      </main>
    </div>
  );
}
