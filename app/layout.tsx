import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/container';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <head>
        <meta
          name='viewport'
          content='width=device-width, height=device-height, initial-scale=1'
        />
      </head> */}
      <body className='antialiased min-h-screen flex flex-col'>
        <Header />
        {children}
        <footer>
          <Container>footer</Container>
        </footer>
      </body>
    </html>
  );
}
