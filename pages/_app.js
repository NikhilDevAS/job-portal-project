import '@/styles/globals.css';

import { Kanit } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={kanit.className}>
      <Component {...pageProps} />
    </main>
  );
}
