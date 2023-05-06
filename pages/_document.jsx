import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <body className='flex items-center justify-center h-screen bg-fixed bg-todoshka bg-center bg-cover'>
          <Main />
          <NextScript />
        </body>
    </Html>
  );
}
