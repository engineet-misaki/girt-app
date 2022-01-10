import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async async(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  getInitialProps;

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta charSet='UTF-8'></meta>
          <meta
            name='description'
            content='やり抜く力を調べるアプリ 自分がどれくらいやり抜く力があるのか、簡単な質問に答えて調べてみよう！'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
