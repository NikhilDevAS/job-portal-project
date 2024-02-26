import '@/styles/globals.css';
import ContextProvider from '@/components/context/context';

import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={kanit.className}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </main>
  );
}
