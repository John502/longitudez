import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=auto"
            rel="stylesheet"
            as="font"
          ></link>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=auto"
            rel="stylesheet"
            as="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
          />
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
