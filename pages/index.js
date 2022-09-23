import Head from 'next/head'
import Article from './components/Article';
import ArticleContainer from './components/ArticleContainer';
import Footer from './components/Footer';
import TitleDescrp from './components/TitleDescrp';

export default function Home() {
  return (
    <div className="container">

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <TitleDescrp />

        <ArticleContainer>
          <Article />
          <Article />
          <Article />
          <Article />
        </ArticleContainer>

      </main>

      <Footer />

    </div>
  )
}
